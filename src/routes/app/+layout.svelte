<script>
    import { authStore } from '$lib/authStore';
    import "../../app.css";
    import { goto } from '$app/navigation';

    let userLogged = false;
  
    // Reactive statement to monitor authentication status
    $:{
      if ($authStore) {
        userLogged = !!$authStore.currentUser;
        console.log("user was authenticated")
      }
      else {
        goto("/auth/sign-up")
      }
    }
  </script>

  {#if userLogged}
    <slot/>    
  {:else}
   <div>
     User is not signed in, click <a class="text-orange-400" href="{"/auth/sign-up"}">here</a> to sign in.
   </div>
  {/if}