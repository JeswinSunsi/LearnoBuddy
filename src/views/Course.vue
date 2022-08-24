<template>
	<div class="container">
		<SmallHeader />
		<YoutubeEmbed />
		<CourseInfo />
		<CourseCard />
		<CourseCard />
		<CourseCard />
		<div class="margin"></div>
		<NormalScroll :rem="8" />
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
