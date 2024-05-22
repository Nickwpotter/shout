<script>
  import { db } from "../../firebase";
  import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
  import { writable } from "svelte/store";

  const baseUrl = 'https://shout-b6d30.web.app/transaction';
  let influencerName = '';
  let qrCodeDataURL = '';
  let errorMessage = writable('');

  const generateQRCode = async () => {
    if (!influencerName.trim()) {
      errorMessage.set('Influencer name cannot be empty.');
      return;
    }

    const q = query(collection(db, "qrcodes"), where("influencerName", "==", influencerName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If an existing QR code is found, use it
      const doc = querySnapshot.docs[0];
      qrCodeDataURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(doc.data().url)}&size=200x200&format=png`;
      errorMessage.set('');
    } else {
      // If no existing QR code is found, create a new one
      const url = `${baseUrl}?influencer=${encodeURIComponent(influencerName)}`;
      const encodedUrl = encodeURIComponent(url);
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=200x200&format=png`;

      try {
        qrCodeDataURL = apiUrl;
        await addDoc(collection(db, "qrcodes"), {
          influencerName,
          url
        });
        errorMessage.set('');
      } catch (error) {
        console.error("Error generating QR Code:", error);
        errorMessage.set('Error generating QR code. Please try again.');
      }
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
</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
  <h1 class="text-3xl font-bold text-black mb-6">Create QR Code</h1>
  <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
    <div class="form-control mb-4">
      <label class="label" for="influencerName">
        <span class="label-text text-black">Influencer Name</span>
      </label>
      <input id="influencerName" type="text" bind:value={influencerName} class="input input-bordered border-black text-black"/>
    </div>
    {#if $errorMessage}
      <div class="text-red-500 mb-4">{$errorMessage}</div>
    {/if}
    <button class="btn btn-primary w-full shadow-md" on:click={generateQRCode}>Generate QR Code</button>
  </div>
  {#if qrCodeDataURL}
    <div class="mt-8 p-4 bg-neutral rounded shadow-lg">
      <img src={qrCodeDataURL} alt="Generated QR Code" class="w-48 h-48 mx-auto"/>
      <button class="btn btn-secondary mt-4" on:click={downloadQRCode}>Download QR Code</button>
    </div>
  {/if}
</div>
