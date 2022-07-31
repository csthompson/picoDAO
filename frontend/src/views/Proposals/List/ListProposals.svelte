<script>
    import { onMount } from "svelte";
    import {governorContract} from "../../../stores/chain"

    import Proposal from "../../../components/Proposals/Proposal.svelte";
    import { get } from "svelte/store";
    import ProposalVoteModal from "../../../components/Proposals/ProposalVoteModal.svelte";

    let proposalsDisplay = [];

    const enumerateProposalState = (state) => {
      const proposalStates = ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed'];
      return proposalStates[state];
    };

    governorContract.subscribe(async gov => {
        if(gov.getPastEvents) {
            const proposalGets = [];
            const proposalStateGets = [];
            const proposalVotesGets = [];

            const proposalCreatedEvents = await gov.getPastEvents('ProposalCreated', {
                fromBlock: 0,
                toBlock: 'latest'
            });

            console.log(await gov.getPastEvents('VoteCast', {
                fromBlock: 0,
                toBlock: 'latest'
            }))
            
            proposalCreatedEvents.forEach(event => {
                let { proposalId } = event.returnValues;
                proposalStateGets.push(gov.methods.state(proposalId).call());
                proposalVotesGets.push(gov.methods.proposalVotes(proposalId).call());
            })

            const proposalStates = await Promise.all(proposalStateGets);
            const proposalVotes = await Promise.all(proposalVotesGets);

            proposalVotes.reverse();
            proposalStates.reverse();
            proposalCreatedEvents.reverse();

            console.log(proposalVotes)

            proposalCreatedEvents.forEach((p, i) => {
                const { description, proposalId } = proposalCreatedEvents[i].returnValues;
                p.title = description;
                p.description = description;
                p.proposalId = proposalId;
                p.state = enumerateProposalState(proposalStates[i]);
                console.log(parseFloat(proposalVotes[i].forVotes))
                p.forVotes = parseFloat(proposalVotes[i].forVotes);
                p.againstVotes = parseFloat(proposalVotes[i].againstVotes);
            });
        
            proposalsDisplay = proposalCreatedEvents;
        }
    })
</script>

<div class="rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
        <div>
            <h2 class="text-brand-text font-semibold text-xl">Proposals</h2>
            <span class="text-xs text-brand-text" />
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2 justify-center w-full">
        {#each proposalsDisplay as proposal}
            <Proposal
                proposalId={proposal.proposalId}
                description={proposal.description}
                state={proposal.state}
                forVotes={proposal.forVotes}
                againstVotes={proposal.againstVotes}
            />
        {/each}
        <div
            class="flex flex-col justify-center items-center p-8 space-y-3 border-2 border-brand-primary dark:border-blue-300 rounded-xl h-72 bg-gray-200 shadow-xl"
        >
            <div class="text-brand-primary text-xl font-bold">
                Add New Proposal
            </div>
            <a
                class="mx-auto my-auto inline-flex py-2 px-3 text-white capitalize transition-colors duration-200 transform bg-brand-primary rounded-full hover:text-blue-600 dark:hover:text-blue-500 font-bold px-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        fill="currentColor"
                        d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z"
                    />
                </svg>
            </a>
        </div>
    </div>
    <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
                class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
                <div
                    class="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between          "
                >
                    <span class="text-xs xs:text-sm text-gray-900">
                        Showing 1 to 4 of 50 Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                        <button
                            class="text-sm text-indigo-50 transition duration-150 hover:bg-brand-hover bg-brand-primary font-semibold py-2 px-4 rounded-l"
                        >
                            Prev
                        </button>
                        &nbsp; &nbsp;
                        <button
                            class="text-sm text-indigo-50 transition duration-150 hover:bg-brand-hover bg-brand-primary font-semibold py-2 px-4 rounded-r"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
