<template>
	<div class="container">
		<main-header :rem="0.9" />
		<plain-scroll :rem="1.8" />
		<normal-scroll :items="['https://i.imgur.com/sQHa5Vy.png', 'https://i.imgur.com/rWeWWRt.png', 'https://i.imgur.com/ZLYZKv9.png']" />
		<normal-banner />
		<square-scroll />
		<vertical-scroll />
		<normal-scroll :items="['https://i.imgur.com/R8ffeqN.png', 'https://i.imgur.com/GKE4KX6.png', 'https://i.imgur.com/RARd3MO.png']" />
		<square-text-scroll :rem="8" />
	</div>
</template>

<script setup>
import MainHeader from "../components/Headers/main.vue";
import PlainScroll from "../components/Scrolls/Plain.vue";
import NormalScroll from "../components/Scrolls/Normal.vue";
import NormalBanner from "../components/banners/Normal.vue";
import SquareScroll from "../components/Scrolls/Square.vue";
import VerticalScroll from "../components/Scrolls/Vertical.vue";
import SquareTextScroll from "../components/Scrolls/SquareText.vue";
</script>

<style scoped></style>
