<template>
	<v-app-bar app>
		<!-- <div class="d-flex align-center"> -->
		<v-tabs>
			<v-tab to="/" tag="div">HOME</v-tab>
			<v-tab to="/users" tag="div">Users List</v-tab>
			<v-tab to="/individual" tag="div">Individual</v-tab>
		</v-tabs>
		<!-- </div> -->
		<LoginDaialog></LoginDaialog>
	</v-app-bar>
</template>
<script>
import LoginDaialog from "../components/LoginDialog";
export default {
	name: "Header",
	components: { LoginDaialog },
};
</script>
<style></style>
