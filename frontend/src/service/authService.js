import Api from "../api/backend"

async function authenticateToken(token) {

    console.log(token);

    // Fetch the JSON result
    const data = await Api().post("user/authenticateToken", { token: token })

    return data.data
}

async function loginOrCreate(req) {

    let callbackURL = new URL("/authenticate", window.location.href)

    req.login_magic_link_url = callbackURL
    req.signup_magic_link_url = callbackURL


    // Fetch the JSON result
    const data = await Api().post("user/loginOrCreate", req)

    return data.data
}

async function getUserObject() {

    // Fetch the JSON result
    const data = await Api().get("user")

    return data.data
}

async function updateUserSettings(payload) {

    // Fetch the JSON result
    const data = await Api().put("user/settings", payload)

    return data.data
}

const authSvc = {
    authenticateToken,
    loginOrCreate,
    getUserObject,
    updateUserSettings
}

export default authSvc;