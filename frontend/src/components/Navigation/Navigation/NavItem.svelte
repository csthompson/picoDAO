<script>
    import { createEventDispatcher } from "svelte";

    export let label;
    export let link;
    export let color;
    export let isActive;
    export let background;

    const dispatch = createEventDispatcher();

    function open() {
        dispatch("open");
    }
</script>

<li class={"cursor-pointer " + background}>
    <a
        href={link}
        on:click={open}
        class={"flex flex-col py-2 items-center w-full focus:outline-none text-nav-foreground hover:text-brand-hover border-l-8 border-transparent ml-1" +
            (isActive ? " text-white" : "")}
    >
        <div class="flex inline w-full font-medium text-md break-normal">
            <slot name="inactive-icon" />
            {label}
        </div>
    </a>
</li>
