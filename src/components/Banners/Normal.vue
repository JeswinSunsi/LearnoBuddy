<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<h1 class="title">Live Discussions</h1>
		<img class="banner" src="../../assets/tempr/live.png" alt="banner" />
	</div>
</template>

<script setup>
const props = defineProps({
	rem: { type: Number, default: 2.8 },
});
</script>

<style scoped>
.wrapper {
	height: max-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	font-family: Poppins;
	color: #494949;
	padding: 0 1.2rem;
	justify-content: flex-start;
}

.banner {
	height: 15.6rem;
	width: 100%;
}

.title {
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 0rem;
	color: #000;
	line-height: 1.2rem;
	letter-spacing: -0.5%;
	color: #494949;
	margin: 0;
	margin-bottom: 1.1rem;
}
</style>
