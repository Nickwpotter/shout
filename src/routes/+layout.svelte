<script>
  import "../app.css";
  import logo from '$lib/logo.png';
  import profilePicture from '$lib/profile.png';
  import { authStore, authHandlers} from '$lib/authStore';
  import { goto } from "$app/navigation";

  let userLogged = false;

  $: {
    if ($authStore.userRef) {
      userLogged = true;
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

  async function goToProfile() {
    await goto('/app/profile');
  }

  async function goToCampaigns() {
    await goto('/app/campaigns');
  }
</script>

<div class="min-h-screen static">
  <div class="navbar bg-base-100">
    <div class="flex-1"></div>
    <div class="navbar-center">
      <img class="max-w-[200px]" src={logo} alt="Your Description" />
    </div>
    <div class="flex-1 flex justify-end gap-2">
      {#if userLogged}
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% border border-white">
            <img alt="Profile" src={profilePicture} />
          </div>
        </div>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li><a on:click={goToProfile}>Profile</a></li>
          <li><a on:click={goToCampaigns}>Campaigns</a></li>
          <li><a on:click={logout}>Logout</a></li>
        </ul>
      </div>
      {/if}
    </div>
  </div>
  <main>
    <slot/>
  </main>
</div>
