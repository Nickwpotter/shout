<script>
    import { writable } from "svelte/store";
    import { db } from "../firebase";
    import { collection, addDoc } from "firebase/firestore";
    import { goto } from "$app/navigation";
    import hero from '$lib/hero.png';
  
    const showModal = writable(false);
    let visitorEmail = '';
    let visitorName = '';
    let visitorPhone = '';
    let visitorMessage = '';
  
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
  </script>

<div class="flex items-center h-[85vh] w-full p-2 lg:px-20 lg:py-2">
  <div class="flex flex-col lg:flex-row justify-between items-center gap-4 w-full max-w-[1600px]">
    <div class="flex flex-col gap-2 items-center lg:items-left">
      <h1 class="text-[40px] lg:text-[72px] font-bold text-white text-center lg:text-left">Turn Online <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Influence</span> into In-Store <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Sales</span></h1>
      <h2 class="text-[16px] lg:text-[22px] text-white text-center lg:text-left">Shout connects store owners and social media influencers to drive real-world results. Track campaign success and maximize your impact</h2>
      <div class="flex flex-col lg:flex-row w-full gap-4">
        <button on:click={() => goto(`/sign-up`)} class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">Sign in</span></button>
        <button on:click={() => showModal.set(true)} class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">Contact us</span></button>
      </div>
    </div>
    <div>
      <img class="max-w-[250px] lg:max-w-[500px]" src={hero} alt="Digital Marketing 3d render" />
    </div>
  </div>
</div>
  
  {#if $showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg shadow-lg w-full max-w-md">
          <div class="rounded-lg w-full max-w-md bg-black p-6">
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
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text text-black">Message</span>
              </label>
              <textarea bind:value={visitorMessage} class="textarea textarea-bordered" placeholder="Message"></textarea>
            </div>
            <button class="btn btn-primary w-full shadow-md mb-4" on:click={submitVisitorInfo}>Submit</button>
            <button class="btn btn-secondary w-full shadow-md" on:click={closeModal}>Close</button>
          </div>
        </div>
    </div>
  {/if}
  