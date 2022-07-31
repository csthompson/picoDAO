<script>
    import storeFrontService from "../../../../service/storeFrontService";

    import { addProject } from "../../../../stores/modals";

    import Modal from "../../../common/Modal/Modal.svelte";
    import TextInput from "../../../common/Form/TextInput/TextInput.svelte";

    // Modal inputs
    let projectName;

    async function createStoreFront() {
        await storeFrontService.createStoreFront({
            name: projectName,
        });
        addProject.set(false);
    }
</script>

<Modal
    title="Add new Project"
    visible={$addProject}
    confirmColor="bg-green-500"
    confirmLabel="Create"
    on:close={() => {
        addProject.set(false);
    }}
    on:confirm={createStoreFront}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="24"
        height="24"
        slot="icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        ><path
            d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
        /></svg
    >
    <div slot="body">
        <TextInput
            bind:value={projectName}
            label="Project Name"
            placeholder="Cool Crypto"
            required="{true};"
            id="project-name"
        />
    </div>
</Modal>
