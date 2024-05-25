<script>
    import { authHandlers, authStore } from '$lib/authStore';
    import { setDoc, doc } from "firebase/firestore";
    import { db } from "../firebase.js";
    import { writable } from "svelte/store";
	import { goto } from '$app/navigation';

    let registered = true;
    let email = '';
    let name = '';
    let phoneNumber = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = writable('');

    let accountType = 'merchant';


    async function handleSubmit() {
        // Check if the required fields are filled
        if (!email || !password || (!registered && !confirmPassword)) {
            errorMessage.set('Error! Missing needed input');
            setTimeout(() => {  errorMessage.set('') }, 5000); // Reset missingInput after 5 seconds
            return;
        }

        // Handle registration
        if (!registered && password === confirmPassword) {
            try {
                await authHandlers.signup(email, password);
                await addUserToDatabase($authStore.currentUser.uid);
            } catch (error) {
                errorMessage.set(`Error! ${error}`);
                console.log(error);
            }
        }

        // Handle mismatched passwords for registration
        if (!registered && password !== confirmPassword) {
            errorMessage.set('Error! Passwords do not match');
            setTimeout(() => { errorMessage.set('') }, 5000); // Reset unmatchPassword after 5 seconds
            return;
        }

        // Handle login for existing users
        if (registered) {
            try {
                await authHandlers.login(email, password);
                console.log('registered', $authStore);
            } catch (error) {
                console.log(error);
                errorMessage.set(`Error! ${error}`);
            }
        }
    }

    async function addUserToDatabase(userId) {
        // add user to the database with same id as the auth id of the user
            try {
                await setDoc(doc(db, "users", userId), {
                    name: name,
                    email: email,
                    phone: phoneNumber,
                    type: accountType,
                    timestamp: new Date()
                });
                errorMessage.set('');
            } catch (error) {
                console.error("Error adding store:", error);
                errorMessage.set('Error creating account. Please try again.');
            }
    }

    $: {
        if ($authStore.currentUser) {
            // User is logged in
            console.log('Logged in user:', $authStore.currentUser);
            goto("../app/campaigns")
            // Redirect or show content for logged-in users
        } else {
            // User is not logged in
            console.log('User is not logged in');
        }
    }
</script>



<div class="bg-base-100 min-w-min w-screen">
    <div class="flex flex-col md:flex-row w-full items-center justify-center gap-x-28 px-2 lg:px-6">
        <div class="text-center lg:text-left text-white lg:ml-4">
            <h1 class="text-5xl font-bold">Let's make some <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">noise</span> together.</h1>
            <p class="py-6">Unlock the secrets to successful influencer marketing. Login now!</p>
        </div>
        <div class="max-w-sm min-w-[350px] bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg">
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 !rounded-lg">
                <form class="card-body">
                    {#if !registered}
                        <span class="label-text !text-white ml-1">Account Type</span>
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text !text-white">Merchant</span>
                                <input type="radio" name="radio-10" class="radio checked:bg-red-500" value="merchant" bind:group={accountType} />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text !text-white">Influencer</span>
                                <input type="radio" name="radio-10" class="radio checked:bg-blue-500" value="influencer" bind:group={accountType} />
                            </label>
                        </div>
                    {/if}
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text !text-white">Email</span>
                        </label>
                        <input bind:value={email} type="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    {#if !registered}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Name</span>
                            </label>
                            <input bind:value={name} type="text" placeholder="Name" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Phone Number (only numbers)</span>
                            </label>
                            <input bind:value={phoneNumber} type="number" placeholder="Phone" class="input input-bordered" required />
                        </div>
                    {/if}
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text !text-white">Password</span>
                        </label>
                        <input bind:value={password} type="password" placeholder="Password" class="input input-bordered" required />
                        {#if registered}
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        {/if}
                    </div>
                    {#if registered}
                        <div>
                            <button on:click={handleSubmit} type="submit" class="btn !text-white bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !rounded-lg">
                                Sign in
                            </button>
                        </div>
                        <button on:click={() => {registered = false}} class="btn btn-active btn-link">Don't have an account? Sign up</button>
                    {:else}
                        <label class="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                            <input bind:value={confirmPassword} type="password" class="grow" placeholder="Confirm Password" />
                        </label>
                        <div>
                            <button on:click={handleSubmit} type="submit" class="btn !text-white bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !rounded-lg">
                                Sign Up
                            </button>
                        </div>
                        <button on:click={() => { registered = true} } class="btn btn-active btn-link">Already have an account? Sign in</button>
                    {/if}
                    {#if $errorMessage}
                        <div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{$errorMessage}</span>
                        </div>
                    {/if}
                </form>
            </div>
        </div>
    </div>
</div>
