<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function selectAccountType(type) {
        dispatch('accountTypeSelected', type);
    }
</script>

<div class="form-container" transition:fade>
    <h2>Select Account Type</h2>
    <button on:click={() => selectAccountType('merchant')}>Merchant</button>
    <button on:click={() => selectAccountType('influencer')}>Influencer</button>
</div>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #f3f4f6;
    }
    button {
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
