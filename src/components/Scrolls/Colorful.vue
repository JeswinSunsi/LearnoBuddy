<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Popular Genres</h1>
		</div>
		<div class="scroll">
			<div class="flex-row">
				<div class="scroll-padding"></div>
				<div class="item">🦄 &ensp; Community Favourites</div>
				<div class="item">🚀 &ensp; Astronomy</div>
				<div class="item">💲 &ensp; Money & Finance</div>
				<div class="scroll-padding"></div>
			</div>
			<div class="flex-row">
				<div class="scroll-padding"></div>
				<div class="item">🐉 &ensp; Fantasy & Fiction</div>
				<div class="item">🌹 &ensp; Health</div>
				<div class="item">💪 &ensp; Motivation</div>
				<div class="item">✒ &ensp; Biography & Non-Fiction</div>
				<div class="scroll-padding"></div>
			</div>
			<div class="flex-row">
				<div class="scroll-padding"></div>
				<div class="item">✍ &ensp; Classical</div>
				<div class="item">♠ &ensp; True Crime & Mystery</div>
				<div class="item">🎈 &ensp; Science Fiction Fantasy</div>
				<div class="scroll-padding"></div>
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

.scroll {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: max-content;
	overflow-x: scroll;
	font-family: Poppins;
}

.item {
	height: 3.7rem;
	padding: 1.2rem 1.8rem;
	width: max-content;
	border-radius: 0.8rem;
	background-color: #edf9ea;
	display: flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	margin-right: 0.5rem;
}

.flex-row {
	margin-bottom: 0.5rem;
	display: flex;
}

.scroll-padding {
	padding: 0.5rem;
}
</style>
