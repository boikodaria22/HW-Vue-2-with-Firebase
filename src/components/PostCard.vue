<template>
  <div class="post-card">
    <div class="short-post">
      <h2>{{ post.title }}</h2>
      <div>
        <p>{{ post.body.slice(0, 120) }}</p>
        <button class="button">Read more</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostCard",
  data: () => ({}),
  props: {
    post: {
      type: Object,
      default: function () {
        return {
          userId: 1,
          id: 1,
          title: "Some default title",
          body: "Some default body",
        };
      },
      required: true,
      validator: function (prop) {
        return prop.title.length && prop.body.length;
      },
    },
  },
};
</script>
<style scoped lang="scss">
.post-card {
  max-width:300px;
  margin:1% auto 3%;
  font-size: 18px;
  border: 1px solid rgb(193, 184, 195);
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.259);
  padding: 5% 1%;
}
.button {
  padding: 10px 20px;
  margin: 5px;
  border: 1px solid rgb(193, 184, 195);
  border-radius: 5px;
  background: rgb(178, 145, 185);
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgb(167, 93, 182);
  }
}
</style>
