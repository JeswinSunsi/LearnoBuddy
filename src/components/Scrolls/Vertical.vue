<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<div class="scroll-head">
			<h1 class="title">Limited Time Free Courses</h1>
			<h2 class="subtitle">See All</h2>
		</div>
		<span class="flex-wrapper">
			<div class="item" v-for="item in items" :key="item">
				<div class="left-content">
					<img :src="item.image" alt="free course" />
					<span class="flex-col">
						<h4 class="course-site">{{ item.site }}</h4>
						<h2 class="course-name">{{ item.title }}</h2>
						<h3 class="course-info">{{ item.duration }}</h3>
					</span>
				</div>
				<div class="right-content">
					<div class="get-button"><a :href="item.link">GET</a></div>
				</div>
			</div>
		</span>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	rem: { type: Number, default: 2.8 },
});

const items = ref([
	{ site: "udemy.com", link: "https://www.udemy.com/course/java-tutorial/", image: "https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg", title: "Java Tutorial For Beginners", duration: "16H 7M | 4.0 ✨" },
	{ site: "udemy.com", link: "https://www.udemy.com/course/microeconomics-1/", image: "https://previews.123rf.com/images/kentoh/kentoh1309/kentoh130900344/22270683-microeconomics-or-micro-economics-as-a-concept.jpg", title: "Micro Economics For Beginners", duration: "1H 9M | 4.7 ✨" },
	{ site: "udemy.com", link: "https://www.udemy.com/course/statistics-literacy-for-non-statisticians/", image: "https://online.stat.psu.edu/statprogram/sites/statprogram/files/2018-08/statistics-review.jpg", title: "Statistics & Data Literacy", duration: "1H 6M | 4.2 ✨" },
]);
</script>

<style scoped>
.wrapper {
	padding: 0rem 1rem;
}

.scroll-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.1rem;
	font-family: Poppins;
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

.flex-wrapper {
	display: flex;
	flex-direction: column;
}

.item {
	width: 100%;
	height: 8.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f9f9f9;
	padding: 0 1.9rem 0 1.2rem;
	font-family: Poppins;
	margin-bottom: 0.8rem;
}

.item img {
	height: 6rem;
	width: 6rem;
	border-radius: 0.4rem;
}

.left-content {
	display: flex;
	align-items: center;
}

.flex-col {
	margin-left: 0.8rem;
	line-height: 1.2rem;
	letter-spacing: -0.5%;
}

.course-site {
	color: #797979;
	font-size: 0.9rem;
	font-weight: 400;
	margin-bottom: 0.3rem;
}

.course-name {
	color: #434343;
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 1rem;
}

.course-info {
	color: #434343;
	font-size: 1.1rem;
	font-weight: 600;
}

.get-button {
	height: 3rem;
	width: 6.1rem;
	background-color: #e1e1e1;
	border-radius: 0.8rem;
	color: #646464;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 1.15rem;
	line-height: 1.2rem;
	letter-spacing: -0.5%;
}
</style>
