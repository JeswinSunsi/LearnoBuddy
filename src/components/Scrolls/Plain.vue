<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-padding"></div>
		<div class="item">All Subjects</div>
		<div class="item">Chemistry</div>
		<div class="item">Mathematics</div>
		<div class="item">Physics</div>
		<div class="item">English</div>
		<div class="item">Computer Science</div>
		<div class="item">Physics</div>
		<div class="item">Chemistry</div>
	</div>
</template>

<script setup>
const props = defineProps({
	rem: { type: Number, default: 1.8 },
});
</script>

<style scoped>
.wrapper {
	width: 100%;
	scroll-padding: 12rem;
	display: flex;
	scroll-snap-points-x: repeat(10px);
	scroll-snap-type: x proximity;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	scroll-behavior: smooth;
	font-family: Poppins;
}

.scroll-padding {
	padding: 0.4rem;
	scroll-snap-align: start;
}

.item {
	height: 3rem;
	width: max-content;
	white-space: nowrap;
	color: #a1a1a1;
	background-color: #e9e9e9;
	font-size: 1rem;
	border-radius: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0rem 1.5rem;
	margin-right: 0.5rem;
	scroll-snap-align: start;
	scroll-snap-stop: always;
}
</style>
