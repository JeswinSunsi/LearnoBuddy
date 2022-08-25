<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Trending Books</h1>
			<h2 class="subtitle">See All</h2>
		</div>
		<div class="scroll-container">
			<div class="scroll-padding"></div>
			<div class="scroll-item" v-for="item in items" :key="item">
				<img :src="item.image" alt="book-cover" class="book-cover" />
				<div class="text-content">
					<h3 class="author">{{ item.author }}</h3>
					<h4 class="name">{{ item.title }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	rem: { type: Number, default: 2.8 },
});

const items = ref([
	{ title: "Also a Poet", author: "Ada Calhoun", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1651001039-41D2mFqYFDL._SL500_.jpg" },
	{ title: "An Immense World", author: "Ed Yong", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1655409386-51opFv0yLCL._SL500_.jpg" },
	{ title: "Homesickness", author: "Colin Barrett", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1656424993-41EtVZfOd5L._SL500_.jpg" },
]);
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
	margin-right: 0.9rem;
	scroll-snap-align: start;
	scroll-snap-stop: always;
	border-radius: 0.8rem;
	min-width: 12.6rem;
	font-family: Poppins;
}

.book-cover {
	height: 15.5rem;
	border-radius: 0.8rem;
	min-width: 12.6rem;
	max-width: 12.6rem;
	margin-bottom: 0.5rem;
}

.author {
	font-size: 0.9rem;
	color: #a4a4a4;
	font-weight: 500;
	line-height: 1rem;
}

.name {
	font-size: 1.3rem;
	color: #5b5a5a;
	font-weight: 500;
	line-height: 1.8rem;
	display: inline;
}

.text-content {
	width: 11.2rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
