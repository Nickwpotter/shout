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
        showPartnersModal = true;
    }

</script>

<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg shadow-lg w-full max-w-4xl">
      <div class="rounded-lg w-full bg-black p-6 overflow-auto">
        <div class="w-full flex justify-between p-4">
          <h1 class="text-[28px] font-bold text-white">Partnerships</h1>
        </div>
        <div class="overflow-x-auto">
          <table class="table text-white w-full">
            <!-- head -->
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
                  <td>{partner.phone}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>