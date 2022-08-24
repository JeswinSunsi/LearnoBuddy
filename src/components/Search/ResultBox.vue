<template>
	<div class="wrapper">
		<img src="https://images.theconversation.com/files/121885/original/image-20160510-20731-1pf8nwv.jpg" alt="" />
		<div class="flex-col">
			<h4 class="subject">CHEMISTRY G12</h4>
			<h2 class="course-title">Introduction - The Solid State</h2>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.wrapper {
	height: 7rem;
	width: 96%;
	background-color: #f2f2f2;
	display: flex;
	padding: 0rem 1.7rem 0rem 1.4rem;
	align-items: center;
	font-family: Poppins;
	border-radius: 0.8rem;
	margin-bottom: 0.5rem;
}

.wrapper img {
	height: 4.3rem;
	width: 4.3rem;
	margin-right: 1rem;
	border-radius: 0.5rem;
}

.flex-col {
	display: flex;
	flex-direction: column;
	width: 29rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.subject {
	font-size: 0.8rem;
	font-weight: 500;
	color: #8a8a8a;
	margin-bottom: 0.3rem;
}

.course-title {
	font-size: 1.4rem;
	font-weight: 500;
	color: #5f5f5f;
	line-height: 1.2rem;
	display: inline;
}
</style>
