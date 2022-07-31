<script>
    import LoginForm from "../../components/Auth/LoginForm.svelte";

    import authSvc from "../../service/authService";

    let sent = false;

    async function loginOrCreate(event) {
        let req = event.detail;
        try {
            const resp = await authSvc.loginOrCreate(req);
            sent = true;
        } catch (e) {}
    }
</script>

<div class="flex flex-col w-full items-center pt-20 h-screen">
    <LoginForm {sent} on:submit={loginOrCreate} />
</div>
