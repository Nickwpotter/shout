<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { db } from "../firebase";
    import { collection, addDoc } from "firebase/firestore";
  
    const showModal = writable(true);
    let visitorEmail = '';
    let visitorName = '';
    let visitorPhone = '';
  
    const closeModal = () => {
      showModal.set(false);
    };
  
    const submitVisitorInfo = async () => {
      try {
        await addDoc(collection(db, "visitors"), {
          name: visitorName,
          email: visitorEmail,
          phone: visitorPhone,
          timestamp: new Date()
        });
        closeModal();
      } catch (error) {
        console.error("Error submitting visitor info:", error);
      }
    };
  
    onMount(() => {
      showModal.set(true);
    });
  </script>
  
  <div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
    <h1 class="text-3xl font-bold text-black mb-6">Welcome to Shout</h1>
    <p class="text-lg text-black mb-4">Our mission is to help local restaurants gain more visibility through influencer marketing.</p>
    <p class="text-lg text-black mb-4">For sales inquiries, please contact us at: <span class="font-bold">801-726-9049</span></p>
  </div>
  
  {#if $showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-black">Name</span>
          </label>
          <input type="text" bind:value={visitorName} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-black">Email</span>
          </label>
          <input type="email" bind:value={visitorEmail} class="input input-bordered border-black text-black"/>
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-black">Phone Number</span>
          </label>
          <input type="tel" bind:value={visitorPhone} class="input input-bordered border-black text-black"/>
        </div>
        <button class="btn btn-primary w-full shadow-md mb-4" on:click={submitVisitorInfo}>Submit</button>
        <button class="btn btn-secondary w-full shadow-md" on:click={closeModal}>Close</button>
      </div>
    </div>
  {/if}
  