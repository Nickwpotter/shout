<script>
    import { onMount } from "svelte";
    import { db } from "../../firebase";
    import {collection, getDocs, query, where,} from "firebase/firestore";
    import { authStore } from '$lib/authStore';

    import { goto } from "$app/navigation";

    let codes = [];

    onMount(async () => {
        // get codes to select
        // Replace so that this page is dynamic for merchants and influencers.
        await getCodes();

    });

    async function getCodes() {
        const q = query(collection(db, "codes"), where('merchant', '==', $authStore.userRef));
        const querySnapshot = await getDocs(q);
        codes = querySnapshot.docs.map((doc) => ({
            // Get the document data
            ...doc.data(),
            // Store the document reference
            ref: doc.ref,
        }));
        console.log('codes', codes);
    }


    $:{
        if($authStore.userRef) {
            getCodes();
        }
    }

</script>

<div>
    <div class="w-full flex justify-between p-4">
        <h1 class="text-xl font-bold text-white">Your Campaigns</h1>
        <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none shadow-md" on:click={async() => {await goto(`/campaigns/new`)}}>
            Create new Campaign
        </button>
    </div>
    <div class="w-full p-4">
        <div class="overflow-x-auto">
            <table class="table text-white">
                <!-- head -->
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                    <th>Influencer</th>
                    <th>Total Transactions</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {#each codes as _code}
                    <tr>
                        <th>1</th>
                        <td>{_code.ref.id}</td>
                        <td>{_code.promotionStartDate}</td>
                        <td>{_code.promotionDuration}</td>
                        <td>{_code.influencer.id}</td>
                        <td>{_code.usageCount}</td>
                        <td>View</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

