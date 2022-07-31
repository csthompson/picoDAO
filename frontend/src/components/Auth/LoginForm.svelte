<script>
    import { createEventDispatcher } from "svelte";
    import { fade, fly } from "svelte/transition";
    const dispatch = createEventDispatcher();

    export let sent;
    let email;

    function submit() {
        dispatch("submit", {
            email: email,
        });
    }
</script>

<div
    class="flex flex-col items-center max-w-md w-full space-y-4 justify-center shadow-2xl p-10 bg-gray-100 rounded-2xl border border-gray-300"
>
    <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-brand-primary">
            <img
                class="h-20 mx-auto"
                src="/assets/img/logos/logo.svg"
                alt="logo"
            />
        </h2>
        <h2 class="mt-6 text-center text-xl font-extrabold text-brand-primary">
            Sign up or login
        </h2>
        <p class="mt-2 text-center text-sm text-gray-700">
            No password required
        </p>
    </div>
    {#if !sent}
        <div class="rounded-md shadow-sm -space-y-px w-full">
            <label for="email-address" class="sr-only">Email address</label>
            <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                bind:value={email}
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
            />
        </div>

        <button
            on:click={submit}
            class="font-bold h-10 bg-brand-primary hover:bg-indigo-600 w-full flex justify-center py-2 px-4 text-md font-medium rounded-md text-white relative"
        >
            <span
                class="absolute left-0 inset-y-0 flex items-center pl-3 text-white"
            >
                <!-- Heroicon name: solid/lock-closed -->
                <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </span>
            <span class="my-auto">Sign in</span>
        </button>
    {:else}
        <div
            class="alert alert-success w-full inline"
            in:fly={{ y: 200, duration: 2000 }}
        >
            <div class="mx-auto inline w-full">
                <svg class="h-5 w-5" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                    />
                </svg>
                <label>Login link sent! Please check your email</label>
            </div>
        </div>
    {/if}
</div>
