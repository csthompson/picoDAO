import { writable } from "svelte/store";

// Triggers for displaying various modals
export const addProject = writable(false);
export const castVoteVisible = writable(false);