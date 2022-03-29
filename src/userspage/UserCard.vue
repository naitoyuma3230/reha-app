<template>
	<v-card class="mx-auto" max-width="500" elevation="2">
		<v-toolbar elevation="0">
			<v-menu
				v-model="menu"
				:close-on-content-click="false"
				offset-x
				:nudge-width="100"
				right
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon color="secondary" v-bind="attrs" v-on="on">
						<v-icon dark> mdi-dots-vertical </v-icon>
					</v-btn>
				</template>
				<v-card>
					<v-card-actions class="align-center">
						<v-spacer></v-spacer>
						<v-btn class="mx-2" fab dark x-small elevation="1" color="error">
							<font-awesome-icon
								class="icons-style"
								icon="fa-solid fa-trash-can"
								@click="deleteUserById(id)"
							/>
						</v-btn>
						<v-btn class="mx-2" fab dark x-small elevation="1" color="primary">
							<font-awesome-icon class="icons-style" icon="fa-solid fa-pen" />
						</v-btn>
						<v-btn
							class="mx-2"
							fab
							dark
							x-small
							elevation="1"
							color="secondary"
						>
							<font-awesome-icon icon="fa-solid fa-gear" class="icons-style" />
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-menu>
		</v-toolbar>

		<v-card-text class="d-flex justify-space-between">
			<div class="d-flex flex-column">
				<p class="text-subtitle mb-0">ID: {{ id }}</p>
				<p class="text-h5 my-1">{{ name }}</p>
				<p>{{ kana }}</p>
			</div>
			<div class="">
				<v-avatar color="indigo" size="70">
					<v-icon dark size="60"> mdi-account-circle </v-icon>
				</v-avatar>
			</div>
		</v-card-text>
		<v-card-text> {{ goal }} </v-card-text>
		<v-tabs show-arrows v-model="tab">
			<v-tab>メニュー</v-tab>
			<v-tab>記録</v-tab>
			<v-tab>スケジュール</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tab">
			<v-tab-item>
				<BaseMenu :baseMenu="baseMenu"></BaseMenu>
			</v-tab-item>
			<v-tab-item>
				<AbilityChart :ability="ability" v-show="ability"></AbilityChart>
			</v-tab-item>
			<v-tab-item>
				<UserCalendar></UserCalendar>
			</v-tab-item>
		</v-tabs-items>
	</v-card>
</template>

<script>
import AbilityChart from "./AbilityChart";
import UserCalendar from "./UserCalendar";
import BaseMenu from "./BaseMenu";
export default {
	name: "usercard",
	data() {
		return {
			tab: null,
			menu: null,
		};
	},
	props: {
		id: Number,
		name: String,
		kana: String,
		goal: String,
		baseMenu: Array,
		comment: String,
		ability: Object,
	},
	components: {
		AbilityChart,
		UserCalendar,
		BaseMenu,
	},
	methods: {
		deleteUserById(id) {
			this.$store.dispatch("deleteUserByIdAction", { id });
		},
		postUser() {
			this.$store.dispatch("postUserAction", this.newUser);
		},
	},
};
</script>

<style>
.v-menu__content {
	box-shadow: none;
}
.icons-style {
	font-size: 18px;
}
</style>
