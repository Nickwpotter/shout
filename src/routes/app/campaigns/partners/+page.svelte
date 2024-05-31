<script>
    import { onMount } from "svelte";
    import {db} from "../../../../firebase";
    import { collection, getDocs, query, where } from "firebase/firestore";
    import { authStore } from '$lib/authStore';

    let partnerships = [];


    onMount(async () => {
        if ($authStore.userType) {
            await getPartners();
        }
    });

    async function getPartners(){
        let partnerSnapShot; 
        if (partnerships != []){
            if ($authStore.userType == "merchant"){
                const influencerQuery = query(collection(db, "users"), where('type', '==', "influencer"));
                partnerSnapShot = await getDocs(influencerQuery);
            }
            else if ($authStore.userType == "influencer"){
                const merchantQuery = query(collection(db, "users"), where('type', '==', "merchant"));
                partnerSnapShot = await getDocs(merchantQuery);
            }
            partnerships = partnerSnapShot?.docs.map((doc) => doc.data());
        }
    }

    function formatPhoneNumber(phoneNumber) {
        if (phoneNumber && phoneNumber.toString().length === 10) {
            const str = phoneNumber.toString();
            return `(${str.slice(0, 3)})${str.slice(3, 6)}-${str.slice(6)}`;
        }
        return phoneNumber;
    }

</script>

<div class="container mx-auto p-6">
    <div class="rounded-lg bg-black p-6 overflow-auto">
        <div class="w-full flex justify-between p-4">
            <h1 class="text-[28px] font-bold text-white">Partnerships</h1>
        </div>
        <div class="overflow-x-auto">
            <table class="table text-white w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="hidden lg:table-cell">Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {#each partnerships as partner}
                        <tr>
                            <td>{partner.name}</td>
                            <td class="hidden lg:table-cell">{partner.email}</td>
                            <td>{formatPhoneNumber(partner.phone)}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>