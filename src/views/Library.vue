<template>
	<div class="container">
		<SmallHeader :rem="1.8" type="library" />
		<Recents />
		<ColorfulScroll />
		<List :rem="4.2" />
		<BooksCarousal :rem="7.5" />
	</div>
</template>

<script setup>
import SmallHeader from "../components/Headers/Small.vue";
import Recents from "../components/Library/Recents.vue";
import ColorfulScroll from "../components/Scrolls/Colorful.vue";
import List from "../components/Library/List.vue";
import BooksCarousal from "../components/Library/Carousal.vue";
</script>

<style scoped></style>
