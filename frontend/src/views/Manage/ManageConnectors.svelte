<script>
    import { onMount } from "svelte";

    import authSvc from "../../service/authService";

    import Connector from "../../components/Manage/Connectors/Connector.svelte";
</script>

<div class="bg-white rounded-md w-10/12">
    <div class="flex items-center justify-between pb-6">
        <div>
            <h2 class="text-brand-text font-semibold text-xl">
                Connect an E-Commerce Platform
            </h2>
            <span class="text-xs text-brand-text">Available Platforms</span>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2 justify-center w-full">
        <Connector
            name="Shopify"
            connected={true}
            image="/assets/vendors/shopify.svg"
            link="/connect/shopify"
            description="Create a white-labelled store on top of your existing Shopify store! Manage all orders, fulfillment, and products through Shopify's rich UI."
        />
        <Connector
            name="Stripe"
            image="/assets/vendors/stripe.svg"
            description="Leverage Stripe's rich developer experience to build a custom storefront, while being able to use all of Stripe's API endpoints behind the scenes."
        />
        <Connector
            name="Square"
            image="/assets/vendors/square.svg"
            description="Whether it is a restaraunt or a pop-up shop, Shoppi can use Square as a backend for your white-labelled app."
        />
    </div>
</div>
