<script>
    import { createEventDispatcher } from 'svelte';

    export let registered;
    export let email;
    export let name;
    export let phoneNumber;
    export let password;
    export let confirmPassword;
    export let accountType;
    export let errorMessage;
    
    const dispatch = createEventDispatcher();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch('submit');
    }
</script>

<div class="form-container" transition:fade>
    <form class="card-body" on:submit={handleSubmit}>
        {#if !registered}
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input bind:value={email} type="email" placeholder="Email" class="input input-bordered" required />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input bind:value={name} type="text" placeholder="Name" class="input input-bordered" required />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Phone Number (only numbers)</span>
                </label>
                <input bind:value={phoneNumber} type="number" placeholder="Phone" class="input input-bordered" required />
            </div>
        {/if}
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input bind:value={password} type="password" placeholder="Password" class="input input-bordered" required />
            {#if registered}
                <label class="label">
                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
            {/if}
        </div>
        {#if !registered}
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Confirm Password</span>
                </label>
                <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input input-bordered" required />
            </div>
        {/if}
        <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #e2e8f0;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .form-control {
        width: 100%;
        margin-bottom: 1rem;
    }
    .input {
        width: 100%;
    }
    .btn-primary {
        background: linear-gradient(to right, #833ab4 10%, #fd1d1d 30%, #fcb045 90%);
        border: none;
        color: white;
    }
</style>
