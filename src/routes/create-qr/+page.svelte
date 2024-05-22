<script>
  import { onMount } from "svelte";
  import { db } from "../../firebase";
  import { collection, addDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
  import { writable } from "svelte/store";

  /**
   * @typedef {Object} Store
   * @property {string} id
   * @property {string} name
   */

  let influencerName = '';
  let qrCodeDataURL = '';
  let qrCodeId = '';
  let storeName = '';
  let qrCodeLink = '';
  let errorMessage = writable('');
  let loading = writable(false);

  let displayedInfluencerName = '';
  let displayedStoreName = '';
  // const baseUrl = 'https://shout-b6d30.web.app/transaction';
  // const baseUrl = 'http://localhost:5173/transaction';

  const baseUrl = 'https://shout-b6d30.web.app/transaction';
  let promotionStartDate = '';
  let promotionDuration = 0;
  let durationUnit = 'days';

  // Modal states
  const showStoreModal = writable(false);
  const showInfluencerModal = writable(false);

  // Store form fields
  let storePhone = '';
  let storeContact = '';

  // Influencer form fields
  let influencerDOB = '';
  let influencerVenmo = '';
  let influencerImage = '';
  let influencerInstagramHandle = '';
  let influencerInstagramLink = '';

  const resetForm = () => {
    influencerName = '';
    promotionStartDate = '';
    promotionDuration = 0;
    durationUnit = 'days';
    storeName = '';
  };

  const generateQRCode = async () => {
    if (!influencerName.trim() || !promotionStartDate.trim() || promotionDuration <= 0 || !storeName.trim()) {
      errorMessage.set('All fields are required.');
      return;
    }

    const storeSnapshot = await getDocs(query(collection(db, "stores"), where("name", "==", storeName)));

    if (storeSnapshot.empty) {
      showStoreModal.set(true);
      return;
    }

    loading.set(true);

    const influencerQuery = query(collection(db, "influencers"), where("name", "==", influencerName));
    const influencerSnapshot = await getDocs(influencerQuery);

    if (!influencerSnapshot.empty) {
      const influencerDoc = influencerSnapshot.docs[0];
      const influencerId = influencerDoc.id;

      const qrcodeQuery = query(collection(db, "qrcodes"), where("influencerName", "==", influencerName), where("promotionStartDate", "==", promotionStartDate), where("promotionDuration", "==", promotionDuration), where("durationUnit", "==", durationUnit), where("storeName", "==", storeName));
      const qrcodeSnapshot = await getDocs(qrcodeQuery);

      if (!qrcodeSnapshot.empty) {
        const qrcodeDoc = qrcodeSnapshot.docs[0];
        qrCodeId = qrcodeDoc.id;
        qrCodeLink = `${baseUrl}?qrcode=${qrCodeId}`;
        qrCodeDataURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeLink)}&size=200x200&format=png`;
        errorMessage.set('');
        displayedInfluencerName = influencerName;
        displayedStoreName = storeName;
        loading.set(false);
      } else {
        try {
          const docRef = await addDoc(collection(db, "qrcodes"), {
            influencerName,
            promotionStartDate,
            promotionDuration,
            durationUnit,
            storeName,
            usageCount: 0,
            timestamp: new Date()
          });
          qrCodeId = docRef.id;
          qrCodeLink = `${baseUrl}?qrcode=${qrCodeId}`;
          qrCodeDataURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeLink)}&size=200x200&format=png`;
          errorMessage.set('');
          displayedInfluencerName = influencerName;
          displayedStoreName = storeName;
        } catch (error) {
          console.error("Error generating QR Code:", error);
          errorMessage.set('Error generating QR code. Please try again.');
        }
        loading.set(false);
      }
    } else {
      showInfluencerModal.set(true);
      loading.set(false);
    }
  };

  const downloadQRCode = () => {
    fetch(qrCodeDataURL)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => {
        console.error('Error downloading the QR code:', err);
        errorMessage.set('Error downloading the QR code. Please try again.');
      });
  };

  const addStore = async () => {
    if (!storeName.trim()) {
      errorMessage.set('Store name is required.');
      return;
    }

    const storeQuery = query(collection(db, "stores"), where("name", "==", storeName));
    const storeSnapshot = await getDocs(storeQuery);

    if (!storeSnapshot.empty) {
      errorMessage.set('Store name already exists.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "stores"), {
        name: storeName,
        phone: storePhone,
        contact: storeContact,
        timestamp: new Date()
      });
      const docSnap = await getDoc(docRef);
      errorMessage.set('');
      showStoreModal.set(false);
      alert('Store added successfully. ID: ' + docSnap.id);
    } catch (error) {
      console.error("Error adding store:", error);
      errorMessage.set('Error adding store. Please try again.');
    }
  };

  const addInfluencer = async () => {
    if (!influencerName.trim()) {
      errorMessage.set('Influencer name is required.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "influencers"), {
        name: influencerName,
        dob: influencerDOB,
        venmo: influencerVenmo,
        image: influencerImage,
        instagramHandle: influencerInstagramHandle,
        instagramLink: influencerInstagramLink,
        timestamp: new Date()
      });
      const docSnap = await getDoc(docRef);
      errorMessage.set('');
      showInfluencerModal.set(false);
      alert('Influencer added successfully. ID: ' + docSnap.id);
    } catch (error) {
      console.error("Error adding influencer:", error);
      errorMessage.set('Error adding influencer. Please try again.');
    }
  };

  onMount(async () => {
    // Initial setup or any required initialization
  });
</script>



<style>
  .loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center ">
  <h1 class="text-3xl font-bold text-white mb-2">Create QR Code</h1>
  <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
    <div class="form-control mb-4">
      <label class="label" for="influencerName">
        <span class="label-text text-black">Influencer Name</span>
      </label>
      <input id="influencerName" type="text" bind:value={influencerName} class="input input-bordered border-black text-black"/>
    </div>
    <div class="form-control mb-4">
      <label class="label" for="promotionStartDate">
        <span class="label-text text-black">Promotion Start Date</span>
      </label>
      <input id="promotionStartDate" type="date" bind:value={promotionStartDate} class="input input-bordered border-black text-black"/>
    </div>
    <div class="form-control mb-4">
      <label class="label" for="promotionDuration">
        <span class="label-text text-black">Promotion Duration</span>
      </label>
      <input id="promotionDuration" type="number" bind:value={promotionDuration} class="input input-bordered border-black text-white"/>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input type="radio" name="durationUnit" value="days" bind:group={durationUnit} checked={durationUnit === 'days'} class="form-radio text-black"/>
          <span class="ml-2 text-black">Days</span>
        </label>
        <label class="inline-flex items-center">
          <input type="radio" name="durationUnit" value="hours" bind:group={durationUnit} checked={durationUnit === 'hours'} class="form-radio text-black"/>
          <span class="ml-2 text-black">Hours</span>
        </label>
      </div>
    </div>
    <div class="form-control mb-4">
      <label class="label" for="storeName">
        <span class="label-text text-black">Store</span>
      </label>
      <input id="storeName" type="text" bind:value={storeName} class="input input-bordered border-black text-white"/>
    </div>
    <button class="btn btn-primary w-full shadow-md" on:click={generateQRCode} disabled={$loading}>
      {#if $loading}
        <div class="loading-spinner"></div>
      {/if}
      Generate QR Code
    </button>
    {#if $errorMessage}
      <p class="mt-4 text-red-600">{$errorMessage}</p>
    {/if}
  </div>

  {#if qrCodeDataURL}
    <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white mt-6 flex flex-col items-center">
      <img src={qrCodeDataURL} alt="QR Code" class="mb-4 w-40 h-40"/>
      <p class="text-black font-bold mb-2">Store: {displayedStoreName}</p>
      <p class="text-black font-bold mb-2">Influencer: {displayedInfluencerName}</p>
      <p class="text-black font-bold mb-2">QR Code ID: {qrCodeId}</p>
      <a href={qrCodeLink} target="_blank" class="text-blue-500 underline mb-4">Test QR Code Link</a>
      <button class="btn btn-secondary w-full mt-4" on:click={downloadQRCode}>Download QR Code</button>
    </div>
  {/if}

  {#if $showStoreModal}
    <div class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Add New Store</h2>
        <div class="form-control mb-4">
          <label class="label" for="storeName">
            <span class="label-text text-black">Store Name</span>
          </label>
          <input id="storeName" type="text" bind:value={storeName} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label" for="storePhone">
            <span class="label-text text-black">Store Phone</span>
          </label>
          <input id="storePhone" type="text" bind:value={storePhone} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label" for="storeContact">
            <span class="label-text text-black">Store Contact</span>
          </label>
          <input id="storeContact" type="text" bind:value={storeContact} class="input input-bordered border-black text-black"/>
        </div>
        <button class="btn btn-primary w-full shadow-md" on:click={addStore}>
          Add Store
        </button>
        <button class="btn btn-secondary w-full mt-2 shadow-md" on:click={() => showStoreModal.set(false)}>
          Cancel
        </button>
        {#if $errorMessage}
          <p class="mt-4 text-red-600">{$errorMessage}</p>
        {/if}
      </div>
    </div>
  {/if}

  {#if $showInfluencerModal}
    <div class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">Add New Influencer</h2>
        <div class="form-control mb-4">
          <label class="label" for="influencerName">
            <span class="label-text text-black">Influencer Name</span>
          </label>
          <input id="influencerName" type="text" bind:value={influencerName} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label" for="influencerDOB">
            <span class="label-text text-black">Influencer DOB</span>
          </label>
          <input id="influencerDOB" type="date" bind:value={influencerDOB} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label" for="influencerVenmo">
            <span class="label-text text-black">Influencer Venmo</span>
          </label>
          <input id="influencerVenmo" type="text" bind:value={influencerVenmo} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label" for="influencerInstagramHandle">
            <span class="label-text text-black">Instagram Handle</span>
          </label>
          <input id="influencerInstagramHandle" type="text" bind:value={influencerInstagramHandle} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label" for="influencerInstagramLink">
            <span class="label-text text-black">Instagram Link</span>
          </label>
          <input id="influencerInstagramLink" type="text" bind:value={influencerInstagramLink} class="input input-bordered border-black text-black"/>
        </div>
        <button class="btn btn-primary w-full shadow-md" on:click={addInfluencer}>
          Add Influencer
        </button>
        <button class="btn btn-secondary w-full mt-2 shadow-md" on:click={() => showInfluencerModal.set(false)}>
          Cancel
        </button>
        {#if $errorMessage}
          <p class="mt-4 text-red-600">{$errorMessage}</p>
        {/if}
      </div>
    </div>
  {/if}
</div>
