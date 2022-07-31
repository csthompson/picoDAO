<script>
    import TableHeader from "./TableHeader.svelte";

    export let table = [{}];
</script>

<table
    class="min-w-full leading-normal bg-brand-background-secondary p-5 border border-gray-400"
>
    <thead>
        <tr>
            {#each Object.keys(table[0]) as header}
                <TableHeader label={header} />
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each table as row, i}
            <tr class={i % 2 == 0 ? "" : "bg-gray-200"}>
                {#each Object.values(row) as col}
                    <td class="px-5 py-5 border-b border-gray-300 text-sm">
                        <p class="text-gray-600 whitespace-no-wrap">
                            {col}
                        </p>
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
