<template>
	<div :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Popular Courses</h1>
			<h2 class="subtitle">See All</h2>
		</div>
		<div class="scroll-container">
			<div class="scroll-padding"></div>

			<div class="scroll-item" v-for="item in props.items" :key="item" :style="`background-image: url(${item}) `" @click="$router.push('Course')"></div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	rem: { type: Number, default: 2.8 },
	items: { type: Array },
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
	margin-right: 0.8rem;
	scroll-snap-align: start;
	scroll-snap-stop: always;
	border-radius: 0.8rem;
	height: 9rem;
	min-width: 20.9rem;
	display: flex;
	align-items: center;
	justify-content: start;
	padding-left: 1.7rem;
	background-size: cover;
	background-repeat: no-repeat;
}

.scroll-item img {
	margin-right: 0.9rem;
}

.course-subtitle {
	font-weight: 500;
	font-size: 0.8rem;
	line-height: 0rem;
	color: #f3f3f3;
	line-height: 1.2rem;
	margin: 0;
}

.course-title {
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 0rem;
	color: #ffffff;
	line-height: 1.2rem;
	margin: 0;
	margin-top: 0.1rem;
}

.flex-col {
	display: flex;
	flex-direction: column;
	font-family: Poppins;
}
</style>
