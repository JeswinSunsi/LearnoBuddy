<template>
	<div class="wrapper" v-for="item in items">
		<h1 class="item-number">{{ item[0] }}</h1>
		<div class="right-col">
			<h1 class="title">{{ item[1] }}</h1>
			<h4 class="timestamp">{{ item[2] }}</h4>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
	["1", "Current Electricity Class 12 OneShot", "01:31:04"],
	["2", "How Does An Electric Motor Work", "0:10:06"],
	["3", "Numericals - Current Electricity", "01:30:48"],
	["4", "Magnetic Effect Of Electric Current", "01:21:36"],
	["5", "Kirchoff's Laws", "0:47:06"],
	["6", "Current Density & Electron Drift", "02:27:08"],
]);
</script>

<style scoped>
.wrapper {
	height: 7rem;
	width: 95%;
	border-radius: 0.5rem;
	background-color: #f6f7f6;
	margin-left: 0.8rem;
	margin-bottom: 0.6rem;
	display: flex;
	align-items: center;
	padding: 0rem 2rem;
	font-family: Poppins;
}

.right-col {
	display: flex;
	flex-direction: column;
}

.item-number {
	font-size: 3.05rem;
	color: #ff6b29;
	font-weight: 600;
	margin-right: 1rem;
}

.title {
	font-size: 1.3rem;
	color: #3c3c3c;
	font-weight: 500;
	margin-bottom: 0.5rem;
}

.timestamp {
	color: #727272;
	font-size: 0.9rem;
	font-weight: 500;
}
</style>
