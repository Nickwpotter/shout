<script>
    import { authStore } from '$lib/authStore';
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
  
    let userLogged = false;
  
    // Reactive statement to monitor authentication status
    // $: {
    //   if ($authStore) {
    //     userLogged = !!$authStore.currentUser;
    //     if (!userLogged) {
    //       goto('/');
    //     }
    //   }
    // }
  
    // Subscribe to the authentication store
    // isAuthenticated.subscribe(value => {
    //   isAuth = value;
    // });
    // // Check authentication status on component mount
    onMount( async () => {
      if ($authStore) {
        userLogged = !!$authStore.currentUser;
        if (userLogged) {
          goto("../auth" +  "/sign-up");
        }
      }
    });
  </script>

  {#if userLogged}
  <slot></slot>
  {/if}