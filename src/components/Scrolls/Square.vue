<template>
	<div :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Browse By Subject</h1>
			<h2 class="subtitle">See All</h2>
		</div>
		<div class="scroll-container">
			<div class="scroll-padding"></div>
			<div class="scroll-item" style="background-color: #eaf3f9" v-for="item in 9" :key="item">
				<img src="../../assets/tempr/money.png" alt="illustration" />
				<h3 class="description">Entrepreneurship</h3>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	rem: { type: Number, default: 2.8 },
});
</script>

<style scoped>
.subtitle {
	font-size: 1.2rem;
	font-weight: 400;
	color: #1919cb;
}

.scroll-container {
	scroll-padding: 3rem;
	display: flex;
	scroll-snap-points-x: repeat(300px);
	scroll-snap-type: x mandatory;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	scroll-behavior: smooth;
}

/* To hide scrollbar in Chromium */
.scroll-container::-webkit-scrollbar {
	display: none;
}

.scroll-padding {
	padding: 0.4rem;
	scroll-snap-align: start;
}

.scroll-item {
	margin-right: 0.6rem;
	scroll-snap-align: start;
	scroll-snap-stop: always;
	border-radius: 0.8rem;
	height: 8.6rem;
	min-width: 11rem;
	max-width: 11rem;
	display: flex;
	align-items: center;
	justify-content: start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.6rem 0 1.5rem 0;
	align-items: center;
	font-family: Poppins;
	color: #000000;
	font-size: 0.8rem;
	font-weight: 500;
	line-height: 1.5rem;
}

.scroll-item img {
	height: 3.5rem;
	width: 3.5rem;
	max-height: 3.5rem;
	max-width: 3.5rem;
	min-height: 3.5rem;
	min-width: 3.5rem;
}

.scroll-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.1rem;
	font-family: Poppins;
	padding: 0rem 1.2rem;
}

.title {
	font-size: 1.5rem;
	letter-spacing: -0.5%;
	font-weight: 600;
	color: #494949;
}

.subtitle {
	font-size: 1.2rem;
	font-weight: 400;
	color: #1919cb;
}
</style>
