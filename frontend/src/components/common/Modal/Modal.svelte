<script>
    export let title;
    export let visible;
    export let confirmColor;
    export let confirmLabel;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function confirm() {
        dispatch("confirm", {});
    }

    function close() {
        dispatch("close", {});
    }
</script>

{#if visible}
    <div class="fixed top-0 left-0 right-0 z-50 inset-0 w-full h-full">
        <div
            class="flex items-center justify-center w-full h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />

            <div
                class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-brand-background-secondary"
            >
                <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                    <div class="sm:flex sm:items-start w-full ">
                        <div
                            class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-{confirmColor} sm:mx-0 sm:h-10 sm:w-10 text-gray-300"
                        >
                            <slot name="icon" />
                        </div>
                        <div
                            class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full "
                        >
                            <h3
                                class="text-lg leading-6 font-medium text-gray-300"
                                id="modal-title"
                            >
                                {title}
                            </h3>
                            <div class="mt-2 text-gray-300 w-full">
                                <slot name="body" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-brand-background"
                >
                    <button
                        type="button"
                        on:click={confirm}
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 {confirmColor} text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        {confirmLabel}
                    </button>
                    <button
                        type="button"
                        on:click={close}
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
