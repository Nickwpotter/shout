<script>
    import { onMount } from "svelte";
    import { db } from "../../../firebase.js";
    import {collection, getDocs, query, where,} from "firebase/firestore";
    import { authStore } from '$lib/authStore';

    import { goto } from "$app/navigation";

    let codes = [];
    let userType;

    onMount(async () => {
        // get codes to select
        if($authStore.userRef) {
            await getCodes($authStore.userType);
        }
    });

    async function getCodes(userType) {
        if(userType === 'merchant') {
            const q = query(collection(db, "codes"), where('merchant', '==', $authStore.userRef));
            const querySnapshot = await getDocs(q);
            codes = querySnapshot.docs.map((doc) => ({
                // Get the document data
                ...doc.data(),
                // Store the document reference
                ref: doc.ref,
            }));
        } else {
            const q = query(collection(db, "codes"), where('influencer', '==', $authStore.userRef));
            const querySnapshot = await getDocs(q);
            codes = querySnapshot.docs.map((doc) => ({
                // Get the document data
                ...doc.data(),
                // Store the document reference
                ref: doc.ref,
            }));
        }
    }


    $:{
        if($authStore?.userRef) {
            getCodes($authStore.userType);
            userType = $authStore.userType;
        }
    }

</script>

<div>
    <div class="w-full flex justify-between p-4">
        <h1 class="text-[28px] font-bold text-white">Your Campaigns</h1>
        {#if userType === 'merchant'}
            <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none shadow-md" on:click={async() => {await goto(`/app/campaigns/new`)}}>
                Create new Campaign
            </button>
        {/if}
    </div>
    {#if codes.length > 0}
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
    {:else}
        <div class="flex items-center justify-center w-full">
            <h1 class="text-[28px] text-white">
                Here you will be able to track your active and past campaigns data.
            </h1>
        </div>
    {/if}
</div>

