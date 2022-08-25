<template>
	<div class="container">
		<SmallHeader :rem="1.8" type="questions" />
		<h1 class="filter"><span class="colored">Recently Asked</span> Questions</h1>
		<span class="flex-center">
			<QuestionBox />
		</span>
	</div>
</template>

<script setup>
import SmallHeader from "../components/Headers/Small.vue";
import QuestionBox from "../components/Questions/QuestionBox.vue";
</script>

<style scoped>
.container {
	color: #f4f4f4;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.flex-center {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.filter {
	font-family: Poppins;
	font-size: 1.1rem;
	color: #262626;
	margin-left: 0.8rem;
	margin-bottom: 1rem;
	font-weight: 500;
}

.colored {
	font-weight: 600;
	color: #0300a1;
}
</style>
