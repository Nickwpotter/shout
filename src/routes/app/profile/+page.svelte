<script>
    import "../../../app.css";
    import { authStore, authHandlers } from '$lib/authStore';
    import { onMount } from 'svelte';
    import { getDoc, updateDoc } from 'firebase/firestore';
    import { goto } from "$app/navigation";

    let user = {
      name: '',
      email: '',
      phone: '',
      type: ''
    };
    let showModal = false;
    let loading = true;

    onMount(async () => {
        await fetchUserData();
    })
  
    async function fetchUserData() {
      if ($authStore.userRef) {
        const userDoc = await getDoc($authStore.userRef);
        if (userDoc.exists()) {
          user = userDoc.data();
        } else {
          console.log("No such document!");
        }
        loading = false;
      } else {
        console.log("No current user in authStore");
        loading = false;
      }
    }
  
    async function updateUser() {
      if ($authStore.userRef) {
        await updateDoc($authStore.userRef, {
          name: user.name,
          phone: user.phone
        });
        showModal = false;
      }
    }

    async function logout() {
        try {
            await authHandlers.logout(); // Assuming you have a logout function in your authStore
            await goto('/auth/sign-up'); // Redirect to the login page
        } catch (error) {
        console.error("Logout failed", error);
        }
    }

</script>

<div class="min-h-screen flex items-center justify-center p-4">
    {#if loading}
        <span class="loading loading-infinity loading-lg text-white"></span>
    {:else}
        <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg">
            <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-black flex flex-col items-center">
                <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Name:</span> {user.name}</p>
                <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Email:</span> {user.email}</p>
                <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Phone:</span> {user.phone}</p>
                <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Account Type:</span> {user.type}</p>
                <div class="card-actions justify-end">
                    <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none mt-4" on:click={() => showModal = true}>Edit</button>
                    <button class="btn btn-secondary to-90% !text-white !rounded-lg border-none mt-4" on:click={logout}>Sign Out</button>
                </div>
            </div>
        </div>
    {/if}
  
    {#if showModal}
      <div class="modal modal-open">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Edit Profile</h3>
          <div class="py-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered" bind:value={user.name} />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input type="text" class="input input-bordered" bind:value={user.phone} />
            </div>
          </div>
          <div class="modal-action">
            <button class="btn btn-primary" on:click={updateUser}>Update</button>
            <button class="btn" on:click={() => showModal = false}>Cancel</button>
          </div>
        </div>
      </div>
    {/if}
</div>

<style>
    .modal-open .modal-box {
      max-width: 90%;
      width: 100%;
    }
    .border-gradient-to-r {
        border: 4px solid;
        border-image-slice: 1;
        border-width: 4px;
        border-image-source: linear-gradient(to right, #833ab4 10%, #fd1d1d 30%, #fcb045 90%);
    }
</style>
