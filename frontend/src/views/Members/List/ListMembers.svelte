<script>
    import {tokenContract} from "../../../stores/chain"

    import Table from "../../../components/common/Table/Table.svelte";

    let table = [
        {
            name: "",
        },
    ];

    tokenContract.subscribe(async tok => {
        if(tok.getPastEvents) {
            const tokenTransfers = await tok.getPastEvents('Transfer', {
                fromBlock: 0,
                toBlock: 'latest'
            });

            console.log(tokenTransfers)
            
        }
    })
</script>

<div class="rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
        <div>
            <h2 class="text-brand-text font-semibold text-xl">Token Holders</h2>
            <span class="text-xs text-brand-text"
                >Current members of the DAO</span
            >
        </div>
    </div>
    <Table {table} />
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
