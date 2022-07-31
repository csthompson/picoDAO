<script>
	import router from "page";

	import { isAuthenticated, isPrivate} from "./stores/app";
	import { governorContract, governorABI, tokenABI, tokenContract } from "./stores/chain";


	import authSvc from "./service/authService";
	import platformSvc from "./service/platformService";

	import Navigation from "./components/Navigation/Navigation/Navigation.svelte";

	// Contracts
	import GovernorABI from "./contracts/governorABI"
	import TokenABI from "./contracts/tokenABI"

	// Views
	import Login from "./views/Auth/Login.svelte";
	import ManageTokens from "./views/Manage/ManageTokens.svelte";
	import ManageConnectors from "./views/Manage/ManageConnectors.svelte";
	import ListProposals from "./views/Proposals/List/ListProposals.svelte";
	import ListMembers from "./views/Members/List/ListMembers.svelte";
	import { onMount } from "svelte";

	//Vendor flow utils
	import { shopifyRedirect } from "./utils/shopify";
	import { squareRedirect } from "./utils/square";
	

	// For routing
	let page;
	let params;


	onMount(async () => {
		if (window.ethereum) {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			window.web3 = new Web3(window.ethereum);
			governorABI.set(GovernorABI);
			tokenABI.set(TokenABI)
			let govContract = new web3.eth.Contract(GovernorABI, "0x021BE571F6De0A29D6913c967f0147bAd774DCC6");
			governorContract.set(govContract);
			let tokContract = new web3.eth.Contract(TokenABI, await govContract.methods.token().call())
			tokenContract.set(tokContract);
		} else {
			console.log("No wallet");
		}

	});

	// Routes
	router(
		"/proposals/list",
		(ctx, next) => {
			params = ctx.params;
			isPrivate.set(false);
			next();
		},
		() => (page = ListProposals)
	);

	router(
		"/members/list",
		(ctx, next) => {
			params = ctx.params;
			isPrivate.set(false);
			next();
		},
		() => (page = ListMembers)
	);

	router(
		"/manage/connectors",
		(ctx, next) => {
			params = ctx.params;
			isPrivate.set(false);
			next();
		},
		() => (page = ManageConnectors)
	);

	// Routes
	router(
		"/login",
		(ctx, next) => {
			params = ctx.params;
			isPrivate.set(false);
			next();
		},
		() => (page = Login)
	);

	// Routes
	router(
		"/authenticate",
		async (ctx, next) => {
			isPrivate.set(false);
			const { searchParams } = new URL(window.location);
			let token = searchParams.get("token");
			console.log(token);
			try {
				const authResp = await authSvc.authenticateToken(token);
				console.log(authResp);
			} catch (e) {
				console.log(e);
			}
		},
		() => (page = Stytch)
	);

	router(
		"/connect/shopify/",
		async (ctx, next) => {
			isPrivate.set(false);
			const { searchParams } = new URL(window.location);
			let shop = "shoppi-demo-store";
			let redirectUrl = shopifyRedirect(shop);
			window.location.href = redirectUrl;
		},
		() => (page = Stytch)
	);

	router(
		"/connect/square/",
		async (ctx, next) => {
			isPrivate.set(false);
			let redirectUrl = squareRedirect();
			window.location.href = redirectUrl;
		},
		() => (page = Stytch)
	);

	router(
		"/connect/shopify/oauth",
		async (ctx, next) => {
			isPrivate.set(false);
			try {
				await platformSvc.connectShopify({
					url: window.location.href,
				});
			} catch (e) {
				console.log(e);
			}
		},
		() => (page = Stytch)
	);

	router(
		"/connect/square/oauth",
		async (ctx, next) => {
			isPrivate.set(false);
			try {
				await platformSvc.connectSquare({
					url: window.location.href,
				});
			} catch (e) {
				console.log(e);
			}
		},
		() => (page = Stytch)
	);

	// Set up the router to start and actively watch for changes
	router.start();
</script>

<div class="relative min-h-screen md:flex">
	<Navigation />
	<!-- content -->
	<div class="flex-1 p-10"><svelte:component this={page} /></div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
