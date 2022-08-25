<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="searchbar" :class="{ short: props.type != 'default' }">
			<img src="../../assets/header/search.png" alt="search" class="searchbar-icon" />
			<h1 class="searchbar-text">{{ placeholderText }}</h1>
		</div>
		<div class="fill-spot" v-if="props.type == 'library' || props.type == 'questions'">
			<div class="coin" v-if="props.type == 'library'">75</div>
			<div class="add" v-if="props.type == 'questions'">+</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	rem: { type: Number, default: 1.8 },
	type: { type: String, default: "default" },
});

const placeholderText = ref("Search for concepts, chapters and more");
if (props.type == "library") {
	placeholderText.value = "Find novels, guides, & more";
}
</script>

<style scoped>
.wrapper {
	height: 7.5rem;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-family: Poppins;
	border-radius: 0 0 4rem 4rem;
	border-radius: 0px 0px 30px 30px;
	background-image: url(../../assets/header/mainheaderbg.svg);
	padding: 1.3rem 1.5rem;
}

.searchbar {
	height: 5rem;
	width: 100%;
	border-radius: 2rem;
	background-color: #fff;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 1rem 0 1.4rem;
}

.short {
	width: 83%;
}

.fill-spot {
	height: 5rem;
	width: 15%;
	border-radius: 2rem;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

.searchbar-icon {
	height: 1rem;
	width: 2.2rem;
	height: 2.2rem;
	margin-right: 0.9rem;
}

.searchbar-text {
	font-weight: 400;
	color: #b0b0b0;
	font-size: 1.2rem;
	line-height: 1.9;
}

.coin {
	background-image: url(../../assets/header/coin.png);
	height: 3.5rem;
	width: 3.5rem;
	background-size: contain;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Poppins;
	color: #ffe53c;
	font-weight: 600;
	font-size: 1.2rem;
}

.add {
	font-size: 2.5rem;
	color: #5c5c5c;
	font-weight: 500;
}
</style>
