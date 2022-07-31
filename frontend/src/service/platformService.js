import Api from "../api/backend"

async function connectShopify(payload) {

    // Fetch the JSON result
    const data = await Api().post("platform/shopify/connect", payload)

    return data.data
}

async function connectSquare(payload) {

    // Fetch the JSON result
    const data = await Api().post("platform/square/connect", payload)

    return data.data
}


const platformSvc = {
    connectShopify,
    connectSquare,
}

export default platformSvc;