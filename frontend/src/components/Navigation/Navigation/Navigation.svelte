<script>
    import { onDestroy } from "svelte";
    import { get } from "svelte/store";

    import { navOpen } from "../../../stores/app";
    import ProjectSelect from "./ProjectSelect/ProjectSelect.svelte";

    import NavItem from "./NavItem.svelte";
    import AddProjectModal from "./ProjectSelect/AddProjectModal.svelte";

    async function openNavigation() {
        let navOpen_ = await get(navOpen);
        console.log(navOpen_);
        navOpen.set(!navOpen_);
    }
</script>

<!-- mobile menu bar -->
<div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
    <!-- logo -->
    <a href="#" class="block p-4 text-white font-bold"
        ><img class="h-16" src="/assets/img/logos/logo.svg" alt="logo" /></a
    >

    <!-- mobile menu button -->
    <button
        on:click={openNavigation}
        class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
    >
        <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>
</div>

<!-- sidebar -->
<div
    class={"sidebar bg-nav-background border-nav-border border-r-8 rounded-xl text-nav-foreground w-64 space-y-6 py-7 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out " +
        (!$navOpen ? "-translate-x-full" : "")}
>
    <!-- logo -->
    <a href="#" class="text-white flex items-center space-x-2 px-4">
        <img class="h-16 mx-auto" src="/assets/img/logos/logo.svg" alt="logo" />
    </a>

    <!-- nav -->
    <nav>
        <ul class="flex flex-col space-y-1 w-full">
            <NavItem label="Members" link="/members/list" color="purple-600">
                <svg
                    class="w-5 h-5 mr-1"
                    fill="currentColor"
                    slot="inactive-icon"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"
                    /></svg
                >
            </NavItem>
            <NavItem
                label="Delegate"
                link="/manage/delegate"
                color="purple-600"
            >
                <svg
                    class="w-5 h-5 mr-1"
                    fill="currentColor"
                    slot="inactive-icon"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z"
                    /></svg
                >
            </NavItem>
            <NavItem
                label="Proposals"
                link="/proposals/list"
                color="purple-600"
            >
                <svg
                    class="w-5 h-5 mr-1"
                    fill="currentColor"
                    slot="inactive-icon"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M18,13H17.32L15.32,15H17.23L19,17H5L6.78,15H8.83L6.83,13H6L3,16V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V16L18,13M17,7.95L12.05,12.9L8.5,9.36L13.46,4.41L17,7.95M12.76,2.29L6.39,8.66C6,9.05 6,9.68 6.39,10.07L11.34,15C11.73,15.41 12.36,15.41 12.75,15L19.11,8.66C19.5,8.27 19.5,7.64 19.11,7.25L14.16,2.3C13.78,1.9 13.15,1.9 12.76,2.29Z"
                    /></svg
                >
            </NavItem>
            <NavItem
                label="Treasury"
                link="/manage/connectors"
                color="purple-600"
            >
                <svg
                    class="w-5 h-5 mr-1"
                    fill="currentColor"
                    slot="inactive-icon"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"
                    /></svg
                >
            </NavItem>
        </ul>
        <div class="mt-10 mb-5 border-b border-gray-600 w-11/12 mx-auto" />
        <ProjectSelect />
    </nav>
</div>

<AddProjectModal />
