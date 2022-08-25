<template>
	<div :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Recent Titles</h1>
		</div>
		<div class="scroll-container">
			<div class="scroll-padding"></div>
			<div class="scroll-item" v-for="item in items" :key="item">
				<img :src="item.image" alt="" />
				<span>
					<div class="text-content">
						<h3 class="author">{{ item.author }}</h3>
						<h4 class="name">{{ item.title }}</h4>
					</div>
					<div class="like-wrapper">
						<img src="../../assets/library/likes.png" class="like-icon" />
						<h5 class="likes">{{ item.people }}</h5>
					</div>
				</span>
			</div>
			<div class="scroll-padding"></div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	rem: { type: Number, default: 2.8 },
});

const items = ref([
	{ image: "https://pyxis.nymag.com/v1/imgs/493/35e/e355e06e2600e957ae69bc74b588e6393b-constructing-a-nervous-system.rdeep-vertical.w460.jpg", author: "Margo Jefferson", title: "Constructing a Nervous System", people: "38 People like this" },
	{ image: "https://cdn.waterstones.com/bookjackets/large/9780/8575/9780857528124.jpg", author: "Bonnie Garmus", title: "Lessons in Chemistry", people: "12 People like this" },
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

.scroll-item {
	min-width: 30.3rem;
	height: 9.2rem;
	background-color: #f9f9f9c3;
	border-radius: 0.8rem;
	scroll-snap-align: start;
	scroll-snap-stop: always;
	margin-right: 0.8rem;
	display: flex;
	align-items: center;
	padding: 0 0 0 1.3rem;
	font-family: Poppins;
}

.scroll-item img {
	height: 5.9rem;
	width: 4.8rem;
	border-radius: 0.5rem;
	margin-right: 1.3rem;
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

.text-content {
	width: 20rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.author {
	font-size: 0.9rem;
	font-weight: 500;
	line-height: 1.5rem;
	letter-spacing: 1%;
	color: #757575;
}

.name {
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 1.5rem;
	letter-spacing: -0.03rem;
	color: #595959;
	display: inline;
}

.likes {
	font-size: 0.8rem;
	font-weight: 500;
	line-height: 0.7rem;
	letter-spacing: 1%;
	color: #595959;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	margin-left: -0.9rem;
}

.like-icon {
	max-height: 1rem;
	max-width: 1rem;
	margin-top: -0.2rem;
}

.like-wrapper {
	display: flex;
	align-items: center;
	justify-content: start;
	margin-top: 1rem;
}
</style>
