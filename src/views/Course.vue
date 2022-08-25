<template>
	<div class="container">
		<SmallHeader />
		<YoutubeEmbed />
		<CourseInfo />
		<CourseCard />
		<div class="margin"></div>
		<NormalScroll :rem="8" :items="['https://i.imgur.com/sQHa5Vy.png', 'https://i.imgur.com/rWeWWRt.png', 'https://i.imgur.com/ZLYZKv9.png']" />
	</div>
</template>

<script setup>
import SmallHeader from "../components/Headers/Small.vue";
import YoutubeEmbed from "../components/Course/YoutubeEmbed.vue";
import CourseInfo from "../components/Course/CourseInfo.vue";
import CourseCard from "../components/Course/CourseCard.vue";
import NormalScroll from "../components/Scrolls/Normal.vue";
</script>

<style scoped>
.margin {
	margin-bottom: 2.8rem;
}
</style>
