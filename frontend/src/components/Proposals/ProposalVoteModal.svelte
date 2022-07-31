<script>
    import { castVoteVisible } from "../../stores/modals";
    import {governor} from "../../stores/app";

    import Modal from "../../components/common/Modal/Modal.svelte"
    import { get } from "svelte/store";

    // Modal inputs
    export let proposalId;
    export let description;
    export let voteChoice;

    async function castVote() {
        let gov = await get(governor);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // enable ethereum
        await gov.methods.castVote(proposalId, voteChoice).send({ from: accounts[0] });
    }
</script>

<Modal
    title="Vote"
    visible={$castVoteVisible}
    confirmColor="bg-green-500"
    confirmLabel="Create"
    on:close={() => {
        castVoteVisible.set(false);
    }}
    on:confirm={castVote}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="24"
        height="24"
        slot="icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        ><path
            d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
        /></svg
    >
    <div slot="body">
        <div class="flex items-center">
            <input
                bind:group={voteChoice}
                type="radio"
                value="0"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Aginst</label
            >
        </div>
        <div class="flex items-center">
            <input
                bind:group={voteChoice}
                id="default-radio-2"
                type="radio"
                value="1"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >For</label
            >
        </div>
        <div class="flex items-center">
            <input
                bind:group={voteChoice}
                id="default-radio-2"
                type="radio"
                value="2"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Abstain</label
            >
        </div>
    </div>
</Modal>
