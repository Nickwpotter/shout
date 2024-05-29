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
  let alertMessage = '';
  let alertType = '';
  let showAlert = writable(false);

  const closeModal = () => {
    showModal.set(false);
    alertMessage = '';
    alertType = '';
    showAlert.set(false);
  };

  const registerUser = async () => {
    try {
      await goto("/auth/sign-up");
    } catch {
      console.error("Error sending the user to the registration: ");
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^(?:\+1\s?)?\(?([2-9][0-9]{2})\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;
    return phonePattern.test(phone);
  };

  const submitVisitorInfo = async () => {
    if (!validateEmail(visitorEmail)) {
      alertMessage = 'Please enter a valid email address.';
      alertType = 'alert-error';
      return;
    }

    if (!validatePhone(visitorPhone)) {
      alertMessage = 'Please enter a valid US phone number.';
      alertType = 'alert-error';
      return;
    }

    try {
      await addDoc(collection(db, "visitors"), {
        name: visitorName,
        email: visitorEmail,
        phone: visitorPhone,
        timestamp: new Date()
      });
      alertMessage = 'Your information has been submitted successfully!';
      alertType = 'alert-success bg-black text-white';
      showModal.set(false);
      showAlert.set(true);
    } catch (error) {
      console.error("Error submitting visitor info:", error);
      alertMessage = 'Error submitting your information. Please try again.';
      alertType = 'alert-error';
    }
  };
</script>

<div class="flex items-center h-[85vh] w-full px-2 py-4 mt-16 lg:my-0 lg:px-20 lg:py-2">
  <div class="flex flex-col lg:flex-row justify-between items-center gap-4 w-full max-w-[1600px]">
    <div class="flex flex-col gap-2 items-center lg:items-left">
      <h1 class="text-[40px] lg:text-[72px] font-bold text-white text-center lg:text-left">Turn Online <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Influence</span> into In-Store <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Sales</span></h1>
      <h2 class="text-[16px] lg:text-[22px] text-white text-center lg:text-left">Shout connects store owners and social media influencers to drive real-world results. Track campaign success and maximize your impact</h2>
      <div class="flex flex-col items-center lg:flex-row w-full gap-4">
        <button on:click={() => goto(`/auth/sign-up`)} class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">Sign in</span></button>
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
        {#if alertMessage && alertType === 'alert-error'}
        <div role="alert" class="alert alert-error mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{alertMessage}</span>
        </div>
        {/if}
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-white">Name</span>
          </label>
          <input type="text" bind:value={visitorName} class="input input-bordered border-white text-white"/>
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-white">Email</span>
          </label>
          <input type="email" bind:value={visitorEmail} class="input input-bordered border-white text-white"/>
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-white">Phone Number</span>
          </label>
          <input type="tel" bind:value={visitorPhone} class="input input-bordered border-white text-white"/>
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-white">Message</span>
          </label>
          <textarea bind:value={visitorMessage} class="textarea textarea-bordered border-white text-white" placeholder="Message"></textarea>
        </div>
        <button class="btn btn-primary w-full shadow-md mb-4" on:click={submitVisitorInfo}>Submit</button>
        <button class="btn btn-secondary w-full shadow-md" on:click={closeModal}>Close</button>
      </div>
    </div>
  </div>
{/if}

{#if $showAlert}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" on:click={closeModal}>
    <div class="bg-black text-white p-4 rounded-lg shadow-lg w-full max-w-md mt-20">
      <div role="alert" class="alert {alertType}">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{alertMessage}</span>
      </div>
    </div>
  </div>
{/if}
