<script>
    export let name;
    export let description;
    export let image;
    export let connected = false;
    export let link;
</script>

<div
    class="relative p-8 space-y-3 border-2 border-brand-primary dark:border-blue-300 rounded-xl h-72"
>
    <span class="inline-block text-blue-500 dark:text-blue-400">
        <img class="h-8" src={image} alt={name} />
    </span>

    <p class="text-brand-text dark:text-gray-300">
        {description}
    </p>

    {#if !connected}
        <a
            href={link}
            class="absolute bottom-5 inline-flex py-2 px-3 text-brand-primary capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 font-bold px-2"
        >
            Connect
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
    {:else}
        <a
            href={link}
            class="absolute bottom-5 inline-flex py-2 px-3 text-green-500 capitalize transition-colors duration-200 transform bg-green-100 rounded-full font-bold px-2"
        >
            Connected
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    fill="currentColor"
                    d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
                />
            </svg>
        </a>
    {/if}
</div>
