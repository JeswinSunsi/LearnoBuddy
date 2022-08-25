import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
	state: () => ({
		value: 75,
	}),
	actions: {
		decreaseValue() {
			this.value = 60;
		},
	},
});
