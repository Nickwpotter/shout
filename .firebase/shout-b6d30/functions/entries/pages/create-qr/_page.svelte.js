import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../chunks/index.js";
const css = {
  code: ".loading-spinner.svelte-1584p87{border:4px solid rgba(0, 0, 0, 0.1);width:36px;height:36px;border-radius:50%;border-left-color:#09f;animation:svelte-1584p87-spin 1s ease infinite}@keyframes svelte-1584p87-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import { db } from \\"../../firebase\\";\\n  import { collection, addDoc, doc, getDoc, getDocs, query, where } from \\"firebase/firestore\\";\\n  import { writable } from \\"svelte/store\\";\\n\\n  /**\\n   * @typedef {Object} Store\\n   * @property {string} id\\n   * @property {string} name\\n   */\\n\\n  let influencerName = '';\\n  let qrCodeDataURL = '';\\n  let qrCodeId = '';\\n  let storeName = '';\\n  let qrCodeLink = '';\\n  let errorMessage = writable('');\\n  let loading = writable(false);\\n\\n  let displayedInfluencerName = '';\\n  let displayedStoreName = '';\\n  // const baseUrl = 'https://shout-b6d30.web.app/transaction';\\n  // const baseUrl = 'http://localhost:5173/transaction';\\n\\n  const baseUrl = 'https://shout-b6d30.web.app/transaction';\\n  let promotionStartDate = '';\\n  let promotionDuration = 0;\\n  let durationUnit = 'days';\\n\\n  // Modal states\\n  const showStoreModal = writable(false);\\n  const showInfluencerModal = writable(false);\\n\\n  // Store form fields\\n  let storePhone = '';\\n  let storeContact = '';\\n\\n  // Influencer form fields\\n  let influencerDOB = '';\\n  let influencerVenmo = '';\\n  let influencerImage = '';\\n  let influencerInstagramHandle = '';\\n  let influencerInstagramLink = '';\\n\\n  const resetForm = () => {\\n    influencerName = '';\\n    promotionStartDate = '';\\n    promotionDuration = 0;\\n    durationUnit = 'days';\\n    storeName = '';\\n  };\\n\\n  const generateQRCode = async () => {\\n    if (!influencerName.trim() || !promotionStartDate.trim() || promotionDuration <= 0 || !storeName.trim()) {\\n      errorMessage.set('All fields are required.');\\n      return;\\n    }\\n\\n    const storeSnapshot = await getDocs(query(collection(db, \\"stores\\"), where(\\"name\\", \\"==\\", storeName)));\\n\\n    if (storeSnapshot.empty) {\\n      showStoreModal.set(true);\\n      return;\\n    }\\n\\n    loading.set(true);\\n\\n    const influencerQuery = query(collection(db, \\"influencers\\"), where(\\"name\\", \\"==\\", influencerName));\\n    const influencerSnapshot = await getDocs(influencerQuery);\\n\\n    if (!influencerSnapshot.empty) {\\n      const influencerDoc = influencerSnapshot.docs[0];\\n      const influencerId = influencerDoc.id;\\n\\n      const qrcodeQuery = query(collection(db, \\"qrcodes\\"), where(\\"influencerName\\", \\"==\\", influencerName), where(\\"promotionStartDate\\", \\"==\\", promotionStartDate), where(\\"promotionDuration\\", \\"==\\", promotionDuration), where(\\"durationUnit\\", \\"==\\", durationUnit), where(\\"storeName\\", \\"==\\", storeName));\\n      const qrcodeSnapshot = await getDocs(qrcodeQuery);\\n\\n      if (!qrcodeSnapshot.empty) {\\n        const qrcodeDoc = qrcodeSnapshot.docs[0];\\n        qrCodeId = qrcodeDoc.id;\\n        qrCodeLink = \`\${baseUrl}?qrcode=\${qrCodeId}\`;\\n        qrCodeDataURL = \`https://api.qrserver.com/v1/create-qr-code/?data=\${encodeURIComponent(qrCodeLink)}&size=200x200&format=png\`;\\n        errorMessage.set('');\\n        displayedInfluencerName = influencerName;\\n        displayedStoreName = storeName;\\n        loading.set(false);\\n      } else {\\n        try {\\n          const docRef = await addDoc(collection(db, \\"qrcodes\\"), {\\n            influencerName,\\n            promotionStartDate,\\n            promotionDuration,\\n            durationUnit,\\n            storeName,\\n            usageCount: 0,\\n            timestamp: new Date()\\n          });\\n          qrCodeId = docRef.id;\\n          qrCodeLink = \`\${baseUrl}?qrcode=\${qrCodeId}\`;\\n          qrCodeDataURL = \`https://api.qrserver.com/v1/create-qr-code/?data=\${encodeURIComponent(qrCodeLink)}&size=200x200&format=png\`;\\n          errorMessage.set('');\\n          displayedInfluencerName = influencerName;\\n          displayedStoreName = storeName;\\n        } catch (error) {\\n          console.error(\\"Error generating QR Code:\\", error);\\n          errorMessage.set('Error generating QR code. Please try again.');\\n        }\\n        loading.set(false);\\n      }\\n    } else {\\n      showInfluencerModal.set(true);\\n      loading.set(false);\\n    }\\n  };\\n\\n  const downloadQRCode = () => {\\n    fetch(qrCodeDataURL)\\n      .then(response => response.blob())\\n      .then(blob => {\\n        const url = window.URL.createObjectURL(blob);\\n        const a = document.createElement('a');\\n        a.style.display = 'none';\\n        a.href = url;\\n        a.download = 'qrcode.png';\\n        document.body.appendChild(a);\\n        a.click();\\n        window.URL.revokeObjectURL(url);\\n      })\\n      .catch(err => {\\n        console.error('Error downloading the QR code:', err);\\n        errorMessage.set('Error downloading the QR code. Please try again.');\\n      });\\n  };\\n\\n  const addStore = async () => {\\n    if (!storeName.trim()) {\\n      errorMessage.set('Store name is required.');\\n      return;\\n    }\\n\\n    const storeQuery = query(collection(db, \\"stores\\"), where(\\"name\\", \\"==\\", storeName));\\n    const storeSnapshot = await getDocs(storeQuery);\\n\\n    if (!storeSnapshot.empty) {\\n      errorMessage.set('Store name already exists.');\\n      return;\\n    }\\n\\n    try {\\n      const docRef = await addDoc(collection(db, \\"stores\\"), {\\n        name: storeName,\\n        phone: storePhone,\\n        contact: storeContact,\\n        timestamp: new Date()\\n      });\\n      const docSnap = await getDoc(docRef);\\n      errorMessage.set('');\\n      showStoreModal.set(false);\\n      alert('Store added successfully. ID: ' + docSnap.id);\\n    } catch (error) {\\n      console.error(\\"Error adding store:\\", error);\\n      errorMessage.set('Error adding store. Please try again.');\\n    }\\n  };\\n\\n  const addInfluencer = async () => {\\n    if (!influencerName.trim()) {\\n      errorMessage.set('Influencer name is required.');\\n      return;\\n    }\\n\\n    try {\\n      const docRef = await addDoc(collection(db, \\"influencers\\"), {\\n        name: influencerName,\\n        dob: influencerDOB,\\n        venmo: influencerVenmo,\\n        image: influencerImage,\\n        instagramHandle: influencerInstagramHandle,\\n        instagramLink: influencerInstagramLink,\\n        timestamp: new Date()\\n      });\\n      const docSnap = await getDoc(docRef);\\n      errorMessage.set('');\\n      showInfluencerModal.set(false);\\n      alert('Influencer added successfully. ID: ' + docSnap.id);\\n    } catch (error) {\\n      console.error(\\"Error adding influencer:\\", error);\\n      errorMessage.set('Error adding influencer. Please try again.');\\n    }\\n  };\\n\\n  onMount(async () => {\\n    // Initial setup or any required initialization\\n  });\\n<\/script>\\n\\n\\n\\n<style>\\n  .loading-spinner {\\n    border: 4px solid rgba(0, 0, 0, 0.1);\\n    width: 36px;\\n    height: 36px;\\n    border-radius: 50%;\\n    border-left-color: #09f;\\n    animation: spin 1s ease infinite;\\n  }\\n\\n  @keyframes spin {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n\\n<div class=\\"p-8 bg-base-100 text-black min-h-screen flex flex-col items-center \\">\\n  <h1 class=\\"text-3xl font-bold text-white mb-2\\">Create QR Code</h1>\\n  <div class=\\"w-full max-w-sm shadow-lg rounded-lg p-6 bg-white\\">\\n    <div class=\\"form-control mb-4\\">\\n      <label class=\\"label\\" for=\\"influencerName\\">\\n        <span class=\\"label-text text-black\\">Influencer Name</span>\\n      </label>\\n      <input id=\\"influencerName\\" type=\\"text\\" bind:value={influencerName} class=\\"input input-bordered border-black text-black\\"/>\\n    </div>\\n    <div class=\\"form-control mb-4\\">\\n      <label class=\\"label\\" for=\\"promotionStartDate\\">\\n        <span class=\\"label-text text-black\\">Promotion Start Date</span>\\n      </label>\\n      <input id=\\"promotionStartDate\\" type=\\"date\\" bind:value={promotionStartDate} class=\\"input input-bordered border-black text-black\\"/>\\n    </div>\\n    <div class=\\"form-control mb-4\\">\\n      <label class=\\"label\\" for=\\"promotionDuration\\">\\n        <span class=\\"label-text text-black\\">Promotion Duration</span>\\n      </label>\\n      <input id=\\"promotionDuration\\" type=\\"number\\" bind:value={promotionDuration} class=\\"input input-bordered border-black text-white\\"/>\\n      <div class=\\"mt-2\\">\\n        <label class=\\"inline-flex items-center\\">\\n          <input type=\\"radio\\" name=\\"durationUnit\\" value=\\"days\\" bind:group={durationUnit} checked={durationUnit === 'days'} class=\\"form-radio text-black\\"/>\\n          <span class=\\"ml-2 text-black\\">Days</span>\\n        </label>\\n        <label class=\\"inline-flex items-center\\">\\n          <input type=\\"radio\\" name=\\"durationUnit\\" value=\\"hours\\" bind:group={durationUnit} checked={durationUnit === 'hours'} class=\\"form-radio text-black\\"/>\\n          <span class=\\"ml-2 text-black\\">Hours</span>\\n        </label>\\n      </div>\\n    </div>\\n    <div class=\\"form-control mb-4\\">\\n      <label class=\\"label\\" for=\\"storeName\\">\\n        <span class=\\"label-text text-black\\">Store</span>\\n      </label>\\n      <input id=\\"storeName\\" type=\\"text\\" bind:value={storeName} class=\\"input input-bordered border-black text-white\\"/>\\n    </div>\\n    <button class=\\"btn btn-primary w-full shadow-md\\" on:click={generateQRCode} disabled={$loading}>\\n      {#if $loading}\\n        <div class=\\"loading-spinner\\"></div>\\n      {/if}\\n      Generate QR Code\\n    </button>\\n    {#if $errorMessage}\\n      <p class=\\"mt-4 text-red-600\\">{$errorMessage}</p>\\n    {/if}\\n  </div>\\n\\n  {#if qrCodeDataURL}\\n    <div class=\\"w-full max-w-sm shadow-lg rounded-lg p-6 bg-white mt-6 flex flex-col items-center\\">\\n      <img src={qrCodeDataURL} alt=\\"QR Code\\" class=\\"mb-4 w-40 h-40\\"/>\\n      <p class=\\"text-black font-bold mb-2\\">Store: {displayedStoreName}</p>\\n      <p class=\\"text-black font-bold mb-2\\">Influencer: {displayedInfluencerName}</p>\\n      <p class=\\"text-black font-bold mb-2\\">QR Code ID: {qrCodeId}</p>\\n      <a href={qrCodeLink} target=\\"_blank\\" class=\\"text-blue-500 underline mb-4\\">Test QR Code Link</a>\\n      <button class=\\"btn btn-secondary w-full mt-4\\" on:click={downloadQRCode}>Download QR Code</button>\\n    </div>\\n  {/if}\\n\\n  {#if $showStoreModal}\\n    <div class=\\"fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75\\">\\n      <div class=\\"bg-white p-6 rounded-lg shadow-lg\\">\\n        <h2 class=\\"text-2xl font-bold mb-4\\">Add New Store</h2>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"storeName\\">\\n            <span class=\\"label-text text-black\\">Store Name</span>\\n          </label>\\n          <input id=\\"storeName\\" type=\\"text\\" bind:value={storeName} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"storePhone\\">\\n            <span class=\\"label-text text-black\\">Store Phone</span>\\n          </label>\\n          <input id=\\"storePhone\\" type=\\"text\\" bind:value={storePhone} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"storeContact\\">\\n            <span class=\\"label-text text-black\\">Store Contact</span>\\n          </label>\\n          <input id=\\"storeContact\\" type=\\"text\\" bind:value={storeContact} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <button class=\\"btn btn-primary w-full shadow-md\\" on:click={addStore}>\\n          Add Store\\n        </button>\\n        <button class=\\"btn btn-secondary w-full mt-2 shadow-md\\" on:click={() => showStoreModal.set(false)}>\\n          Cancel\\n        </button>\\n        {#if $errorMessage}\\n          <p class=\\"mt-4 text-red-600\\">{$errorMessage}</p>\\n        {/if}\\n      </div>\\n    </div>\\n  {/if}\\n\\n  {#if $showInfluencerModal}\\n    <div class=\\"fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75\\">\\n      <div class=\\"bg-white p-6 rounded-lg shadow-lg w-full max-w-md\\">\\n        <h2 class=\\"text-2xl font-bold mb-4\\">Add New Influencer</h2>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"influencerName\\">\\n            <span class=\\"label-text text-black\\">Influencer Name</span>\\n          </label>\\n          <input id=\\"influencerName\\" type=\\"text\\" bind:value={influencerName} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"influencerDOB\\">\\n            <span class=\\"label-text text-black\\">Influencer DOB</span>\\n          </label>\\n          <input id=\\"influencerDOB\\" type=\\"date\\" bind:value={influencerDOB} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"influencerVenmo\\">\\n            <span class=\\"label-text text-black\\">Influencer Venmo</span>\\n          </label>\\n          <input id=\\"influencerVenmo\\" type=\\"text\\" bind:value={influencerVenmo} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"influencerInstagramHandle\\">\\n            <span class=\\"label-text text-black\\">Instagram Handle</span>\\n          </label>\\n          <input id=\\"influencerInstagramHandle\\" type=\\"text\\" bind:value={influencerInstagramHandle} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <div class=\\"form-control mb-4\\">\\n          <label class=\\"label\\" for=\\"influencerInstagramLink\\">\\n            <span class=\\"label-text text-black\\">Instagram Link</span>\\n          </label>\\n          <input id=\\"influencerInstagramLink\\" type=\\"text\\" bind:value={influencerInstagramLink} class=\\"input input-bordered border-black text-black\\"/>\\n        </div>\\n        <button class=\\"btn btn-primary w-full shadow-md\\" on:click={addInfluencer}>\\n          Add Influencer\\n        </button>\\n        <button class=\\"btn btn-secondary w-full mt-2 shadow-md\\" on:click={() => showInfluencerModal.set(false)}>\\n          Cancel\\n        </button>\\n        {#if $errorMessage}\\n          <p class=\\"mt-4 text-red-600\\">{$errorMessage}</p>\\n        {/if}\\n      </div>\\n    </div>\\n  {/if}\\n</div>\\n"],"names":[],"mappings":"AAwME,+BAAiB,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,iBAAiB,CAAE,IAAI,CACvB,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,IAAI,CAAC,QAC1B,CAEA,WAAW,mBAAK,CACd,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  let $errorMessage, $$unsubscribe_errorMessage;
  let $showStoreModal, $$unsubscribe_showStoreModal;
  let $showInfluencerModal, $$unsubscribe_showInfluencerModal;
  let influencerName = "";
  let storeName = "";
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  let loading = writable(false);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let promotionStartDate = "";
  let promotionDuration = 0;
  const showStoreModal = writable(false);
  $$unsubscribe_showStoreModal = subscribe(showStoreModal, (value) => $showStoreModal = value);
  const showInfluencerModal = writable(false);
  $$unsubscribe_showInfluencerModal = subscribe(showInfluencerModal, (value) => $showInfluencerModal = value);
  let storePhone = "";
  let storeContact = "";
  let influencerDOB = "";
  let influencerVenmo = "";
  let influencerInstagramHandle = "";
  let influencerInstagramLink = "";
  $$result.css.add(css);
  $$unsubscribe_loading();
  $$unsubscribe_errorMessage();
  $$unsubscribe_showStoreModal();
  $$unsubscribe_showInfluencerModal();
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center "><h1 class="text-3xl font-bold text-white mb-2" data-svelte-h="svelte-ljsoua">Create QR Code</h1> <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white"><div class="form-control mb-4"><label class="label" for="influencerName" data-svelte-h="svelte-1nq0t7m"><span class="label-text text-black">Influencer Name</span></label> <input id="influencerName" type="text" class="input input-bordered border-black text-black"${add_attribute("value", influencerName, 0)}></div> <div class="form-control mb-4"><label class="label" for="promotionStartDate" data-svelte-h="svelte-wew48s"><span class="label-text text-black">Promotion Start Date</span></label> <input id="promotionStartDate" type="date" class="input input-bordered border-black text-black"${add_attribute("value", promotionStartDate, 0)}></div> <div class="form-control mb-4"><label class="label" for="promotionDuration" data-svelte-h="svelte-uhhl7c"><span class="label-text text-black">Promotion Duration</span></label> <input id="promotionDuration" type="number" class="input input-bordered border-black text-white"${add_attribute("value", promotionDuration, 0)}> <div class="mt-2"><label class="inline-flex items-center"><input type="radio" name="durationUnit" value="days" ${"checked"} class="form-radio text-black"${add_attribute("checked", true, 1)}> <span class="ml-2 text-black" data-svelte-h="svelte-1to7pop">Days</span></label> <label class="inline-flex items-center"><input type="radio" name="durationUnit" value="hours" ${""} class="form-radio text-black"${""}> <span class="ml-2 text-black" data-svelte-h="svelte-1e1k40v">Hours</span></label></div></div> <div class="form-control mb-4"><label class="label" for="storeName" data-svelte-h="svelte-16pvxf"><span class="label-text text-black">Store</span></label> <input id="storeName" type="text" class="input input-bordered border-black text-white"${add_attribute("value", storeName, 0)}></div> <button class="btn btn-primary w-full shadow-md" ${$loading ? "disabled" : ""}>${$loading ? `<div class="loading-spinner svelte-1584p87"></div>` : ``}
      Generate QR Code</button> ${$errorMessage ? `<p class="mt-4 text-red-600">${escape($errorMessage)}</p>` : ``}</div> ${``} ${$showStoreModal ? `<div class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75"><div class="bg-white p-6 rounded-lg shadow-lg"><h2 class="text-2xl font-bold mb-4" data-svelte-h="svelte-3bpl46">Add New Store</h2> <div class="form-control mb-4"><label class="label" for="storeName" data-svelte-h="svelte-21ij4u"><span class="label-text text-black">Store Name</span></label> <input id="storeName" type="text" class="input input-bordered border-black text-black"${add_attribute("value", storeName, 0)}></div> <div class="form-control mb-4"><label class="label" for="storePhone" data-svelte-h="svelte-p1q7sq"><span class="label-text text-black">Store Phone</span></label> <input id="storePhone" type="text" class="input input-bordered border-black text-black"${add_attribute("value", storePhone, 0)}></div> <div class="form-control mb-4"><label class="label" for="storeContact" data-svelte-h="svelte-1if6d4m"><span class="label-text text-black">Store Contact</span></label> <input id="storeContact" type="text" class="input input-bordered border-black text-black"${add_attribute("value", storeContact, 0)}></div> <button class="btn btn-primary w-full shadow-md" data-svelte-h="svelte-ut16iz">Add Store</button> <button class="btn btn-secondary w-full mt-2 shadow-md" data-svelte-h="svelte-18nd0wi">Cancel</button> ${$errorMessage ? `<p class="mt-4 text-red-600">${escape($errorMessage)}</p>` : ``}</div></div>` : ``} ${$showInfluencerModal ? `<div class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75"><div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"><h2 class="text-2xl font-bold mb-4" data-svelte-h="svelte-1kujoj2">Add New Influencer</h2> <div class="form-control mb-4"><label class="label" for="influencerName" data-svelte-h="svelte-1i4z8bm"><span class="label-text text-black">Influencer Name</span></label> <input id="influencerName" type="text" class="input input-bordered border-black text-black"${add_attribute("value", influencerName, 0)}></div> <div class="form-control mb-4"><label class="label" for="influencerDOB" data-svelte-h="svelte-1gtdiqq"><span class="label-text text-black">Influencer DOB</span></label> <input id="influencerDOB" type="date" class="input input-bordered border-black text-black"${add_attribute("value", influencerDOB, 0)}></div> <div class="form-control mb-4"><label class="label" for="influencerVenmo" data-svelte-h="svelte-1k6oawi"><span class="label-text text-black">Influencer Venmo</span></label> <input id="influencerVenmo" type="text" class="input input-bordered border-black text-black"${add_attribute("value", influencerVenmo, 0)}></div> <div class="form-control mb-4"><label class="label" for="influencerInstagramHandle" data-svelte-h="svelte-u1o1wf"><span class="label-text text-black">Instagram Handle</span></label> <input id="influencerInstagramHandle" type="text" class="input input-bordered border-black text-black"${add_attribute("value", influencerInstagramHandle, 0)}></div> <div class="form-control mb-4"><label class="label" for="influencerInstagramLink" data-svelte-h="svelte-nvn78j"><span class="label-text text-black">Instagram Link</span></label> <input id="influencerInstagramLink" type="text" class="input input-bordered border-black text-black"${add_attribute("value", influencerInstagramLink, 0)}></div> <button class="btn btn-primary w-full shadow-md" data-svelte-h="svelte-1yn3m85">Add Influencer</button> <button class="btn btn-secondary w-full mt-2 shadow-md" data-svelte-h="svelte-1hxhe8i">Cancel</button> ${$errorMessage ? `<p class="mt-4 text-red-600">${escape($errorMessage)}</p>` : ``}</div></div>` : ``}</div>`;
});
export {
  Page as default
};
