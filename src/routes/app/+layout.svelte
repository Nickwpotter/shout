<script>
    import { authStore } from '$lib/authStore';
    import { base } from '$app/paths';
    import { goto } from "$app/navigation";
    import "../../app.css";
	import Auth from '$lib/Auth.svelte';
    import {redirect} from '@sveltejs/kit';
	import { root } from 'postcss';

    let rootURL = base;
    let userLogged = false;
  
    // Reactive statement to monitor authentication status
    $:{
      if ($authStore) {
        userLogged = !!$authStore.currentUser;
      }
    }


  </script>

  {#if userLogged}
    <slot/>    
  {:else}
   <div>
     User is not signed in, click <a href="{rootURL + "/auth/sign-up"}">here</a> to sign in.
   </div>
  {/if}