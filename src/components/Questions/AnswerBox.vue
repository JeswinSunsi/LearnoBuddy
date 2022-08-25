<template>
	<div class="wrapper">
		<div class="top-information">
			<span class="flex-wrapper">
				<img src="https://ui-avatars.com/api/?background=random&name=j" alt="icon" />
				<h3 class="username">Luke Deepu</h3>
				<h4 class="time">&nbsp;· Sometime Back</h4>
			</span>
			<h1 class="menu">...</h1>
		</div>
		<h1 class="question">You can run a for-loop and .append() to a current list</h1>
	</div>
</template>

<script setup></script>

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
