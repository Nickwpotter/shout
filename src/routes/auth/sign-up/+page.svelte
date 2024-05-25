<script>
    import Auth from "$lib/Auth.svelte";
    import { authStore } from "$lib/authStore.js";
    import { goto } from "$app/navigation";

    // let userLogged = false;

    // $:{
    //     console.log('userLogged', userLogged);
    //     if($authStore) {
    //         userLogged = !!$authStore.currentUser;
    //         console.log('userLogged', userLogged);
    //         if(userLogged) {
    //             goto(`/app/campaigns`);
    //         }
    //     }
    // }

</script>

<div class="min-h-screen max-w-screen w-screen sm:flex sm:flex-row mx-0 justify-center">
    <Auth/>
</div>
