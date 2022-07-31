import { writable } from "svelte/store";

import authService from "../service/authService"

// Application-wide stores
export const loading = writable(true);

export const isAuthenticated = writable(false);
export const isPrivate = writable(false);
export const user = writable({});
export const accessToken = writable("");

export const navOpen = writable(false);

export const governorAddress = writable("0x9F02C29F113e6E3641190d80810385202f6DD96A")
export const governorABI = writable({});
export const governor = writable({});