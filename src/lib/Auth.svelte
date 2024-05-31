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
    let instagramHandle = '';
    let errorMessage = writable('');

    let accountType = ''; // No default account type to force user to choose
    let step = 'login'; // New variable to control form steps

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        // Check if the required fields are filled
        if (!email || !password || (!registered && !confirmPassword)) {
            errorMessage.set('Error! Missing needed input');
            setTimeout(() => { errorMessage.set('') }, 5000); // Reset missingInput after 5 seconds
            return;
        }

        if (accountType === 'influencer' && !instagramHandle) {
            errorMessage.set('Error! Instagram handle is required for influencers');
            setTimeout(() => { errorMessage.set('') }, 5000); // Reset error message after 5 seconds
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
                instagramHandle: accountType === 'influencer' ? instagramHandle : '',
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

    function setAccountType(type) {
        accountType = type;
        step = 'userForm';
    }
</script>

<style>
    .account-type-button {
        padding: 0.5rem 1rem;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s;
    }
    .account-type-button.active {
        background-image: linear-gradient(to right, #833ab4 10%, #fd1d1d 30%, #fcb045 90%);
        color: white;
        border-color: transparent;
    }
    .account-type-button.inactive {
        background-color: white;
        color: #fd1d1d;
        border-color: #fd1d1d;
    }
    .account-type-button:hover {
        background-color: #fcb045;
        color: white;
    }
</style>

<div class="bg-base-100 min-w-min w-screen">
    <div class="flex flex-col md:flex-row w-full items-center justify-center gap-x-28 px-2 lg:px-6">
        <div class="text-center lg:text-left text-white lg:ml-4">
            <h1 class="text-5xl font-bold">Let's make some <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">noise</span> together.</h1>
            <p class="py-6">Unlock the secrets to successful influencer marketing. Login now!</p>
        </div>
        <div class="max-w-sm min-w-[350px] bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg">
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 !rounded-lg">
                {#if step === 'login'}
                    <form class="card-body" on:submit={handleSubmit}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Email</span>
                            </label>
                            <input bind:value={email} type="email" placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Password</span>
                            </label>
                            <input bind:value={password} type="password" placeholder="Password" class="input input-bordered" required />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn !text-white bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !rounded-lg">Sign in</button>
                        </div>
                        <button type="button" on:click={() => { registered = false; step = 'selectType'; }} class="btn !text-white btn-active btn-link mt-2">Don't have an account? Sign up</button>
                    </form>
                {/if}
                {#if step === 'selectType'}
                    <div class="card-body">
                        <span class="label-text !text-white ml-1">Account Type</span>
                        <div class="form-control flex gap-2">
                            <button type="button" class="account-type-button {accountType === 'merchant' ? 'active' : 'inactive'}" on:click={() => setAccountType('merchant')}>Merchant</button>
                            <button type="button" class="account-type-button {accountType === 'influencer' ? 'active' : 'inactive'}" on:click={() => setAccountType('influencer')}>Influencer</button>
                        </div>
                    </div>
                {/if}
                {#if step === 'userForm'}
                    <form class="card-body" on:submit={handleSubmit}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Email</span>
                            </label>
                            <input bind:value={email} type="email" placeholder="email" class="input input-bordered" required />
                        </div>
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
                        {#if accountType === 'influencer'}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text !text-white">Instagram Handle</span>
                                </label>
                                <input bind:value={instagramHandle} type="text" placeholder="@yourhandle" class="input input-bordered" required />
                            </div>
                        {/if}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Password</span>
                            </label>
                            <input bind:value={password} type="password" placeholder="Password" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text !text-white">Confirm Password</span>
                            </label>
                            <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input input-bordered" required />
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn !text-white bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !rounded-lg">Sign Up</button>
                        </div>
                        <button type="button" on:click={() => { registered = true; step = 'login'; }} class="btn !text-white btn-active btn-link mt-2">Already have an account? Sign in</button>
                    </form>
                {/if}
            </div>
        </div>
    </div>
</div>
