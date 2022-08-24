<template>
	<div class="container">
		<SmallHeader />
		<div class="flex-col">
			<ResultBox />
			<ResultBox />
			<ResultBox />
		</div>
	</div>
</template>

<script setup>
import SmallHeader from "../components/Headers/Small.vue";
import ResultBox from "../components/Search/ResultBox.vue";
</script>

<style scoped>
.flex-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
