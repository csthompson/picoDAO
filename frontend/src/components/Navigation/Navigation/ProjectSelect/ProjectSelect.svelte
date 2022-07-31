<script>
    import { onMount } from "svelte";
    import { addProject } from "../../../../stores/modals";
    import { user } from "../../../../stores/app";

    let isOpen = false;

    let selector;

    let addProjectModalVisible = false;

    let projects = ["OrangeDAO"];

    let activeProjectName = "";

    onMount(async () => {
        window.addEventListener("mouseup", function (e) {
            var isClickInside = selector.contains(e.target);
            if (!isClickInside) {
                isOpen = false;
            }
        });
    });

    async function changeActiveProject(id) {
        await authService.updateUserSettings({
            activeProjectId: id,
        });
        isOpen = false;
    }
</script>

<div bind:this={selector} class="w-11/12 mx-auto">
    <label
        id="listbox-label"
        class="block text-brand-text font-medium text-gray-700"
    >
        Governance Contract
    </label>
    <div class="mt-1 relative">
        <button
            on:click={() => {
                isOpen = !isOpen;
            }}
            type="button"
            class="relative w-full text-brand-text border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
        >
            <span class="flex items-center">
                <span class="block truncate">OrangeDAO</span>
            </span>
            <span
                class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
                <!-- Heroicon name: solid/selector -->
                <svg
                    class="h-5 w-5 text-brand-text"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </span>
        </button>
        {#if isOpen}
            <ul
                class="absolute z-10 mt-1 w-full bg-brand-background-primary shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
            >
                {#each projects as project}
                    <li
                        class="text-brand-text cursor-pointer select-none relative py-2 pl-3 pr-9"
                        id="listbox-option-0"
                        role="option"
                        on:click={() => {
                            changeActiveProject(project.ref["@ref"].id);
                        }}
                    >
                        <div class="flex">
                            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                            <span class="font-normal block truncate">
                                {project.data.name}
                            </span>
                        </div>

                        <span
                            class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                        />
                    </li>
                {/each}
                <li
                    class="text-brand-text cursor-pointer select-none relative py-2 pl-3 pr-9"
                    id="listbox-option-0"
                    role="option"
                    on:click={() => {
                        addProject.set(true);
                    }}
                >
                    <div class="flex">
                        <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                        <span class="font-normal block truncate">
                            <span class="text-green-500 font-bold w-5">+</span> Add
                            Project
                        </span>
                    </div>
                </li>

                <!-- More items... -->
            </ul>
        {/if}
    </div>
</div>
