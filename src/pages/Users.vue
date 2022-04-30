<template>
	<v-container>
		<v-row>
			<v-col>
				<v-btn class="mr-4" @click="setUsersAction()">Axios</v-btn>
				<v-btn color="primary" class="mr-4" @click="userAdd = true">
					ユーザー追加
				</v-btn>
				<v-btn class="mr-4"> test </v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<UsersToolBar @setSearchPattern="setSearchPattern"></UsersToolBar>
			</v-col>
		</v-row>
		<v-row>
			<v-scroll-x-reverse-transition>
				<v-col cols="12" sm="6" lg="4" v-show="userAdd">
					<PostUserCard @cancel="userAdd = false"></PostUserCard>
				</v-col>
			</v-scroll-x-reverse-transition>
			<v-col cols="12" sm="6" lg="4" v-for="user in getUsers" :key="user.id">
				<v-scroll-x-reverse-transition>
					<!-- v-bind:prop = "prop" を v-bind="prop"  に省略可) -->
					<!-- v-bind="object" で指定したオブジェクトのプロパティをまとめてカスタムデータとしてバインド -->
					<!-- この場合 user.nmae user.id user.titleが各カスタム属性名で子コンポーネントに渡される -->
					<UserCard v-bind="user"></UserCard>
				</v-scroll-x-reverse-transition>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import UserCard from "../userspage/UserCard";
import PostUserCard from "../userspage/PostUserCard";
import UsersToolBar from "../userspage/UsersToolBar";

export default {
	data() {
		return {
			userAdd: false,
			searchPattern: "",
			users: "",
		};
	},
	methods: {
		setSearchPattern(pattern) {
			this.searchPattern = pattern;
		},
	},
	computed: {
		getUsers() {
			let users = "";
			users = this.$store.getters.getUsers.filter((user) => {
				return (
					(user.kana.indexOf(this.searchPattern) != -1) |
					(user.name.indexOf(this.searchPattern) != -1)
				);
			});
			return users;
		},
	},
	components: {
		UserCard,
		PostUserCard,
		UsersToolBar,
	},
};
</script>
