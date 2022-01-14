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
  data: () => ({
    post: {
      userId: 1,
      id: 2,
      title:
        "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
    },
  }),
};
</script>
<style scoped lang="scss">
.post-card {
  width: 280px;
  margin: 20px auto;
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
