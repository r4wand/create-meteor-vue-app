<template>
  <div>
    index view. links: <router-link to="/about">Index page</router-link>

    <hr />
    component:
    <hello :name="name" />
  </div>
</template>

<script>
import hello from "../components/helloWorld";
export default {
  name: "index",
  components: { hello },
  data() {
    return {
      name: "hello world",
    };
  },
};
</script>

<style></style>
