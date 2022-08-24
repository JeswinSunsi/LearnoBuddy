<template>
	<div class="container top-shadow">
		<div class="button-wrapper" @click.prevent="navTo('Home')">
			<img :class="{ active: activeIcon == 'Home' }" :src="Home" />
		</div>

		<div class="button-wrapper" @click.prevent="navTo('Questions')">
			<img :class="{ active: activeIcon == 'Questions' }" :src="Questions" />
		</div>

		<div class="button-wrapper" @click.prevent="navTo('Library')">
			<img :class="{ active: activeIcon == 'Library' }" :src="List" />
		</div>

		<div class="button-wrapper" @click.prevent="navTo('Account')">
			<img :class="{ active: activeIcon == 'Account' }" :src="Account" />
		</div>
	</div>
</template>

<script setup>
// Imports
import Home1 from "../../assets/navigation/home1.png";
import Home2 from "../../assets/navigation/home2.png";
import Questions1 from "../../assets/navigation/search1.png";
import Questions2 from "../../assets/navigation/search2.png";
import List1 from "../../assets/navigation/list1.png";
import List2 from "../../assets/navigation/list2.png";
import Account1 from "../../assets/navigation/account1.png";
import Account2 from "../../assets/navigation/account2.png";

import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

let Home = ref(Home2);
let Questions = ref(Questions1);
let List = ref(List1);
let Account = ref(Account1);

// Navigation
const activeIcon = ref("Home");
function navTo(route) {
	router.push({ name: route });
	if (route == "Home") {
		Home.value = Home2;
		Questions.value = Questions1;
		List.value = List1;
		Account.value = Account1;
	} else if (route == "Questions") {
		Home.value = Home1;
		List.value = List1;
		Account.value = Account1;
		Questions.value = Questions2;
	} else if (route == "Library") {
		Home.value = Home1;
		Questions.value = Questions1;
		Account.value = Account1;
		List.value = List2;
	} else if (route == "Account") {
		Home.value = Home1;
		Questions.value = Questions1;
		List.value = List1;
		Account.value = Account2;
	}
}

// To hide BottomNavbar on routes like
const isEnabledRoute = ref(true);
const getCurrentRoute = () => route.name;

watch(getCurrentRoute, (value) => {
	isEnabledRoute.value = true;
	if (value === "Product") {
		isEnabledRoute.value = false;
		isHidden.value = false;
	}
	if (value != activeIcon.value) {
		// change bottom menu active icon dynamically
		activeIcon.value = value;
	}
});
</script>

<style scoped>
.container {
	width: 100%;
	height: 6rem;
	position: fixed;
	bottom: 0;
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.5rem;
}

.top-shadow {
	box-shadow: 0px -2px 4px rgba(122, 122, 127, 0.15);
}

.button-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #959495;
	width: calc(100% / 4);
	position: relative;
}

img {
	min-height: 2.2rem;
	min-width: 2.2rem;
	max-height: 2.2rem;
	max-width: 2.2rem;
}
</style>
