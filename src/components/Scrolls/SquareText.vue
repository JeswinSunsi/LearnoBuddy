<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Explore Higher Studies</h1>
			<h2 class="subtitle">See All</h2>
		</div>
		<div class="scroll-container">
			<div class="scroll-padding"></div>
			<div class="scroll-item" v-for="item in 9" :key="item">
				<h2 class="certification">SAT</h2>
				<h3 class="description">North America</h3>
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
	height: 6.8rem;
	min-width: 9.9rem;
	max-width: 9.9rem;
	display: flex;
	align-items: center;
	justify-content: start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2.3rem 0 2.2rem 0;
	align-items: center;
	font-family: Poppins;
	background-color: #ffe194;
}

.certification {
	font-weight: 600;
	font-size: 1.4rem;
	color: #4f4f4f;
	line-height: 1.1rem;
	letter-spacing: -5%;
}

.description {
	font-weight: 400;
	font-size: 0.9rem;
	color: #aa8e46;
	letter-spacing: -2%;
	line-height: 1rem;
}
</style>
