import { v4 as uuidv4 } from 'uuid';

const SQUARE_KEY = "sandbox-sq0idb-dtGFSyIyG7X4i8WBg1Fivw"

var randomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function squareRedirect() {
    let nonce = localStorage.getItem('nonce');
    if (!nonce) {
        nonce = randomString(16)
        localStorage.setItem("nonce", nonce)
    }
    const scopes = [
        "ITEMS_READ",
        "ORDERS_READ",
        "ORDERS_WRITE",
        "PAYMENTS_WRITE",
        "PAYMENTS_READ",
        "PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS",

    ].join("+")
    return `https://connect.squareupsandbox.com/oauth2/authorize?client_id=${SQUARE_KEY}&scope=${scopes}&session=false&state=${nonce}`
}