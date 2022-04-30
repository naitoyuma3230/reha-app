<template>
	<v-app>
		<Header></Header>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import Header from "@/global/Header";
export default {
	name: "App",
	data: () => ({
		//
	}),
	components: { Header },
};
</script>
