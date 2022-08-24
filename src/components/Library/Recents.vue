<template>
	<div :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Recent Titles</h1>
		</div>
		<div class="scroll-container">
			<div class="scroll-padding"></div>
			<div class="scroll-item" v-for="item in 2" :key="item">
				<img src="https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg" alt="" />
				<span>
					<div class="text-content">
						<h3 class="author">John Greene</h3>
						<h4 class="name">The Adventures of Tintin: Curse of the Pharaoh</h4>
					</div>
					<div class="like-wrapper">
						<img src="../../assets/library/likes.png" class="like-icon" />
						<h5 class="likes">38 People like this</h5>
					</div>
				</span>
			</div>
			<div class="scroll-padding"></div>
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
