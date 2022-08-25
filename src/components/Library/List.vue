<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Trending Books</h1>
		</div>
		<div class="flex-cols">
			<div class="item" v-for="item in items" :key="item">
				<img :src="item[2]" />
				<div class="text-wrapper">
					<a href="https://cloudflare-ipfs.com/ipfs/bafykbzacecagm7ewe7djx4ycntxurnzdsdaxivhzax3gbx2iuogt76ndenjt4?filename=%28History%20philosophy%20and%20theory%20of%20the%20life%20sciences%20%28Print%29%29%20Barker%2C%20Gillian_Desjardins%2C%20Eric_Pearce%2C%20Trevor%20-%20Entangled%20life_%20organism%20and%20environment%20in%20the%20biological%20and%20social%20sciences-Springer%20%28.pdf">
						<h4 class="author">{{ item[0] }}</h4>
						<h2 class="name">{{ item[1] }}</h2>
					</a>
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
	["Entangled Life: How Fungi Make Our Worlds, Change Our Minds & Shape Our Futures", "Merlin Sheldrake", "https://www.sciencefriday.com/wp-content/uploads/2020/12/entangled-life-e1607470958704.png"],
	["The Apocalypse Factory: Plutonium and the Making of the Atomic Age", "Steve Olson", "https://www.sciencefriday.com/wp-content/uploads/2020/12/apocalypse-factory.png"],
	["Clean: The New Science of Skin", "James Hamblin", "https://www.sciencefriday.com/wp-content/uploads/2020/08/9780525538318.jpeg"],
	["Race After Technology: Abolitionist Tools for the New Jim Code, Change Our Minds & Shape Our Futures", "Ruha Benjamin", "https://www.sciencefriday.com/wp-content/uploads/2020/12/entangled-life-e1607470958704.png"],
	["Black Hole Survival Guide", "Janna Levin", "https://www.sciencefriday.com/wp-content/uploads/2020/12/black-hole-survival.jpg?resize=188,300"],
	["Future Earth: A Radical Vision for What’s Possible in the Age of Warming", "Eric Holthaus ", "https://www.sciencefriday.com/wp-content/uploads/2020/12/race-after-technology.jpg"],
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
