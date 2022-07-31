import { v4 as uuidv4 } from 'uuid';

const shopify_key = "78091068d3c6b3c13ab17e73392fe54d"
let redirect_uri = new URL("/connect/shopify/oauth", window.location.href)

var randomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function shopifyRedirect(shop) {
    let nonce = localStorage.getItem('nonce');
    if (!nonce) {
        nonce = randomString(16)
        localStorage.setItem("nonce", nonce)
    }
    const scopes = [
        "unauthenticated_read_checkouts",
        "unauthenticated_write_checkouts",
        "unauthenticated_read_customers",
        "unauthenticated_write_customers",
        "unauthenticated_read_content",
        "unauthenticated_read_product_listings",
        "unauthenticated_read_product_tags",
        "unauthenticated_read_selling_plans"
    ].join(",")
    return `https://${shop}.myshopify.com/admin/oauth/authorize?client_id=${shopify_key}&scope=${scopes}&redirect_uri=${redirect_uri}&state=${nonce}&grant_options[]=value`
}