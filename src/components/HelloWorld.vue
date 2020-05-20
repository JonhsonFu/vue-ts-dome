<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button
        v-for="item in menuList"
        :key="item.title"
        @click="goTo(item.route)"
        :type="item.type"
      >{{item.title}}</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private menuList: any[] = [
    { title: "在线视频", type: "primary", icon: "", route: "/onlineVideo" },
    { title: "成功按钮", type: "success", icon: "", route: "/onlineVideo" },
    { title: "信息按钮", type: "info", icon: "", route: "/onlineVideo" },
    { title: "警告按钮", type: "warning", icon: "", route: "/onlineVideo" },
    { title: "危险按钮", type: "danger", icon: "", route: "/onlineVideo" }
  ];

  goTo(route: string) {
    this.$router.push(route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
