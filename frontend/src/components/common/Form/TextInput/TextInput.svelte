<script>
    export let value;
    export let label;
    export let placeholder;
    export let required;
    export let id;

    let isValid = true;
</script>

<div class="shadow-sm -space-y-px w-full">
    <label
        class="block uppercase tracking-wide text-brand-text text-xs mb-2"
        for={id}
    >
        {label}
    </label>
    <input
        class="appearance-none block w-full bg-transparent text-brand-text border border-brand-text rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
        {id}
        name={id}
        type="text"
        autocomplete="email"
        bind:value
        {placeholder}
        {required}
    />
    {#if !isValid}
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    {/if}
</div>
