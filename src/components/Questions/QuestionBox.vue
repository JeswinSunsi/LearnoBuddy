<template>
	<div class="wrapper" v-for="item in items" @click="$router.push('Answer')">
		<div class="top-information">
			<span class="flex-wrapper">
				<img :src="`https://ui-avatars.com/api/?background=random&name=${item[0]}`" alt="icon" />
				<h3 class="username">{{ item[0] }}</h3>
				<h4 class="time">&nbsp;· Right Now</h4>
			</span>
			<h1 class="menu">...</h1>
		</div>
		<h1 class="question">{{ item[1] }}</h1>
		<div class="subject">{{ item[2] }}</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
	["Jeswin Sunsi", "How to create nested lists in Python automatically", "Computer Science"],
	["Ayaan Mahta", "How is total internal reflection used to make Fiber Optics?", "Physics"],
	["Sri Rajkavin", "Aldehyde Reduction Notes", "Chemistry"],
	["Charan Singh", "What are the metal strips in Meter Bridge used for?", "Physics"],
	["Aditya Giri", "The Road Not Taken - poetic devices", "English"],
	["Sanket Nathani", "Carcinogens Notes", "Physics"],
]);
</script>

<style scoped>
.wrapper {
	width: 96%;
	height: max-content;
	background-color: #f4f4f4;
	padding: 1.1rem 1.5rem 0.9rem 1.6rem;
	font-family: Poppins;
	display: flex;
	flex-direction: column;
	border-radius: 0.4rem;
	margin-bottom: 0.5rem;
}

.top-information {
	display: flex;
	justify-content: space-between;
}

.top-information img {
	min-height: 2.1rem;
	min-width: 2.1rem;
	max-height: 2.1rem;
	max-width: 2.1rem;
	margin-right: 0.6rem;
	border-radius: 50%;
}

.flex-wrapper {
	display: flex;
	align-items: center;
}

.username {
	font-weight: 400;
	font-size: 1rem;
	line-height: 1rem;
	letter-spacing: -0.5%;
	color: #393939;
	margin-top: 0.2rem;
}

.time {
	font-weight: 400;
	font-size: 0.8rem;
	line-height: 1rem;
	letter-spacing: -0.5%;
	color: #8a8a8a;
	margin-top: 0.2rem;
}

.menu {
	font-size: 2rem;
	color: #393939;
}

.question {
	margin-top: 1rem;
	font-size: 1.2rem;
	letter-spacing: -0.6%;
	line-height: 1.8rem;
	color: #262626;
	padding-right: 4.4rem;
}

.subject {
	margin-top: 1.4rem;
	font-size: 0.7rem;
	color: #909090;
	padding: 0.7rem;
	background-color: #fff;
	width: max-content;
	border-radius: 0.4rem;
}
</style>
