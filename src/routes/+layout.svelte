<script>
  import "../app.css";
  import logo from '../lib/logo.png';
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
        goto('/auth/sign-up');
      }
    }
  });
</script>


<div class="min-h-screen static">
  <div class="navbar bg-base-100">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <img class="max-w-[200px]" src={logo} alt="Your Description" />
    </div>
    <div class="navbar-end"></div>
  </div>
  <main>
    <slot></slot>
  </main>
</div>
