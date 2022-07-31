<script>
    import ProposalVoteModal from "./ProposalVoteModal.svelte";
    import {castVoteVisible} from "../../stores/modals"

    export let description;
    export let connected = false;
    export let link;
    export let state;
    export let proposalId;
    export let forVotes;
    export let againstVotes;


    function openVoteModal() {
        castVoteVisible.set(true);
    }
</script>

<ProposalVoteModal {proposalId} />
<div
    class="relative p-8 space-y-3 border-2 border-brand-primary dark:border-blue-300 rounded-xl h-72 shadow-xl"
>
    <p class="text-brand-text dark:text-gray-300">
        {description}
    </p>
    <span class="rounded-xl bg-gray-300 text-gray-700 py-1 px-2 my-8"
        >{state}</span
    >

    <div class="flex flex-row w-full text-brand-text dark:text-gray-300">
        <div
            class="flex items-center justify-center w-1/4 rounded-lg bg-green-300 text-white font-bold mr-2"
        >
            <svg class="w-5 h-5 mx-2 my-1" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
                />
            </svg>
            {forVotes}
        </div>
        <div
            class="flex items-center justify-center w-1/4 rounded-lg bg-red-300 text-white font-bold"
        >
            <svg class="w-5 h-5 mx-2 my-1" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"
                />
            </svg>
            {againstVotes}
        </div>
    </div>

    <a
        on:click={openVoteModal}
        class="absolute cursor-pointer bottom-5 inline-flex py-2 px-5 text-white capitalize transition-colors duration-200 transform bg-brand-primary rounded-lg hover:text-blue-600 dark:hover:text-blue-500 font-bold px-2"
    >
        Vote
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    </a>
</div>
