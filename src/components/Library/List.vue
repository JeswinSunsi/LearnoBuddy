<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Trending Books</h1>
		</div>
		<div class="flex-cols">
			<div class="item" v-for="item in 6" :key="item">
				<img src="https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781912464234.jpg" />
				<div class="text-wrapper">
					<h4 class="author">Charles Dickens</h4>
					<h2 class="name">The Adventures Of Tom Sawyer</h2>
				</div>
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

.flex-cols {
	display: flex;
	flex-wrap: wrap;
	padding-left: 1.4rem;
	gap: 2.5rem;
}

.item {
	height: 4.8rem;
	display: flex;
	align-items: flex-start;
	font-family: Poppins;
	line-height: 1.2rem;
	font-weight: 500;
	margin-bottom: -1.5rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 41%;
}

.item img {
	height: 4.7rem;
	min-width: 4.7rem;
	max-width: 4.7rem;
	border-radius: 0.5rem;
	margin-right: 0.5rem;
}

.text-wrapper {
	padding-top: 0.7rem;
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.author {
	font-size: 0.9rem;
	color: #a6a6a6;
}

.name {
	font-size: 1.1rem;
	color: #494949;
	display: inline;
}
</style>
