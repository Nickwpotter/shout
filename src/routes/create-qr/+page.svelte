<script>
import {db} from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

  let baseUrl = '';
  let influencerName = '';
  let qrCodeDataURL = '';

  const generateQRCode = async () => {
    const url = `${baseUrl}?influencer=${encodeURIComponent(influencerName)}`;
    const encodedUrl = encodeURIComponent(url);
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=200x200&format=png`;
    console.log(url);
    try {
      qrCodeDataURL = apiUrl;
      await addDoc(collection(db, "qrcodes"), {
        influencerName,
        url
      });
    } catch (error) {
      console.error("Error generating QR Code:", error);
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
      .catch(err => console.error('Error downloading the QR code:', err));
  };
</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center ">
  <h1 class="text-3xl font-bold text-white mb-2">Create QR Code</h1>
  <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
    <div class="form-control mb-4">
      <label class="label">
        <span class="text-black">Base URL</span>
      </label>
      <input type="text" bind:value={baseUrl} class="input input-bordered border-black text-white"/>
    </div>
    <div class="form-control mb-4">
      <label class="label">
        <span class="text-black">Influencer Name</span>
      </label>
      <input type="text" bind:value={influencerName} class="input input-bordered border-black text-white"/>
    </div>
    <button class="btn btn-primary w-full shadow-md" on:click={generateQRCode}>Generate QR Code</button>
  </div>
  {#if qrCodeDataURL}
    <div class="mt-8 p-4 bg-neutral rounded shadow-lg">
      <img src={qrCodeDataURL} alt="Generated QR Code" class="w-48 h-48 mx-auto"/>
      <button class="btn btn-secondary mt-4" on:click={downloadQRCode}>Download QR Code</button>
    </div>
  {/if}
</div>
