<template>
	<div class="container">
		<SmallHeader :rem="1" />
		<QuestionBox />
		<div class="input">
			<input type="text" placeholder="Add Answer" />
			<img src="../assets/arrows/right.png" alt="" />
		</div>
		<div class="line"></div>
		<AnswerBox />
	</div>
</template>

<script setup>
import SmallHeader from "../components/Headers/Small.vue";
import QuestionBox from "../components/Questions/AnswerQuestion.vue";
import AnswerBox from "../components/Questions/AnswerBox.vue";
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.input {
	display: flex;
	margin-top: 3rem;
	width: 100%;
	margin-left: 0.8rem;
	justify-content: start;
}

input {
	border: 0px;
	font-size: 1.2rem;
	width: 89%;
}

input:focus {
	outline: none;
}

img {
	height: 2.5rem;
	width: 2.5rem;
}

.line {
	width: 95%;
	margin-bottom: 1rem;
	border-bottom: 1px rgb(191, 191, 191) solid;
}
</style>
