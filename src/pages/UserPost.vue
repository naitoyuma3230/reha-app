<template>
	<div>
		<h1>ユーザーの登録ページ</h1>
		<v-form>
			<v-container>
				<v-row>
					<v-col cols="12" md="4">
						<v-text-field v-model="user.name" label="お名前"></v-text-field>
					</v-col>

					<v-col cols="12" md="4">
						<v-text-field v-model="user.kana" label="ひらがな"></v-text-field>
					</v-col>

					<v-col cols="12" md="4">
						<v-text-field v-model="user.goal" label="目標"></v-text-field>
					</v-col>

					<v-col cols="12" md="4">
						<v-text-field
							v-model="user.comment"
							label="意気込み"
							required
						></v-text-field>
					</v-col>
				</v-row>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="postUser">Post</v-btn>
			</v-container>
		</v-form>
	</div>
</template>

<script>
export default {
	name: "userPost",
	data() {
		return {
			user: {
				name: "",
				goal: "",
				comment: "",
				kana: "",
			},
		};
	},
	methods: {
		postUser() {
			this.$store.dispatch("postUserAction", this.user);
			this.user = [];
		},
	},
};
</script>
