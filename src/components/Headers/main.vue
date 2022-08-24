<template>
	<div class="wrapper" :style="{ 'margin-bottom': props.rem + 'rem' }">
		<span class="flex-row">
			<span>
				<h3 class="greeting">Welcome</h3>
				<h1 class="username">Jeswin Sunsi</h1>
			</span>
			<div class="notif">
				<img src="../../assets/header/bell.png" alt="bell" />
			</div>
		</span>
		<div class="searchbar" @click="$router.push('search')">
			<img src="../../assets/header/search.png" alt="search" class="searchbar-icon" />
			<h1 class="searchbar-text">Search for concepts, chapters and more</h1>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	rem: { type: Number, default: 1.8 },
});
</script>

<style scoped>
.wrapper {
	height: 18.1rem;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: Poppins;
	border-radius: 0 0 4rem 4rem;
	border-radius: 0px 0px 30px 30px;
	background-image: url(../../assets/header/mainheaderbg.svg);
	padding: 2.8rem 1.4rem 1.5rem 1.4rem;
}

.flex-row {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.greeting,
.username {
	margin: 0;
	color: #ffffff;
	line-height: 1.9rem;
}

.greeting {
	font-weight: 400;
	font-size: 1.2rem;
}

.username {
	font-weight: 600;
	font-size: 1.9rem;
}

.notif {
	background-color: #ffffff;
	height: 3.3rem;
	width: 3.3rem;
	border-radius: 50%;
	background-color: #977ef9;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 0.2rem;
}

.notif img {
	max-height: 2.5rem;
	max-width: 2.5rem;
}

.searchbar {
	height: 5rem;
	width: 100%;
	border-radius: 2rem;
	background-color: #fff;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 1rem 0 1.4rem;
}

.searchbar-icon {
	height: 1rem;
	width: 2.2rem;
	height: 2.2rem;
	margin-right: 0.9rem;
}

.searchbar-text {
	font-weight: 400;
	color: #b0b0b0;
	font-size: 1.2rem;
	line-height: 1.9;
}
</style>
