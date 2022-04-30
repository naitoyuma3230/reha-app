<template>
	<div class="d-flex">
		<UserCalendar></UserCalendar>
		<AbilityChart :ability="user.ability" v-show="ability"></AbilityChart>
	</div>
</template>

<script>
import UserCalendar from "../userspage/UserCalendar.vue";
import AbilityChart from "../userspage/AbilityChart.vue";

export default {
	data() {
		return {
			user: this.getters.getUserById(1),
		};
	},
	components: {
		UserCalendar,
		AbilityChart,
	},
};
</script>

<style></style>
