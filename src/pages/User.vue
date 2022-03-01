<template>
  <div>
    <h1>担当ユーザーの個別情報</h1>
    <p>ID:{{ id }} Name:{{ name }} goal:{{ goal }}</p>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    id: Number,
    name: String,
    goal: String,
  },
  data() {
    return {
      users: "",
    };
  },
  // methods: {
  //   getUsers() {
  //     this.axios.get("http://localhost:3000/users").then((response) => {
  //       this.users = response.data;
  //     });
  //   },
  // },
};
</script>
