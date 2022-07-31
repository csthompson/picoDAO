import Api from "../api/backend"

async function createStoreFront(payload) {

    // Fetch the JSON result
    const data = await Api().post("storefront", payload)

    return data.data
}

async function listStoreFronts() {

    // Fetch the JSON result
    const data = await Api().get("storefront")

    return data.data
}


const storeFrontSvc = {
    createStoreFront,
    listStoreFronts,
}

export default storeFrontSvc;