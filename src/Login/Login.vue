<template>
  <div class="Login">
    <div
      class="loading"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    ></div>
    <div class="form-container" v-if="!loading">
      <h2>登录</h2>
      <div class="username">
        <span>用户名</span>
        <el-input
          prefix-icon="el-icon-user"
          @focus="hasUserName=false"
          :suffix-icon="hasUserName?'el-icon-warning':''"
          v-model="userName"
          placeholder="请输入用户名"
        ></el-input>
        <!-- <el-progress :percentage="0" status="success"></el-progress> -->
      </div>
      <div class="password">
        <span>密码</span>
        <el-input
          prefix-icon="el-icon-lock"
          @focus="hasPassWord=false"
          :suffix-icon="hasPassWord?'el-icon-warning':''"
          show-password
          v-model="passWord"
          placeholder="请输入密码"
        ></el-input>
        <!-- <el-progress :percentage="0"></el-progress> -->
      </div>
      <div class="forget-psw">
        <a target="_blank" href="https://www.baidu.com">忘记密码？</a>
      </div>
      <div>
        <el-button v-if="isLogin" class="login-btn" @click="login" type="primary" round>登录</el-button>
        <el-button v-else class="login-btn" @click="register" type="primary" round>注册</el-button>
      </div>
      <div>
        <span>第三方登录</span>
        <ul class="third-part-ul">
          <li class="third-part-li">
            <a target="_blank" href="https://www.baidu.com">
              <img src="../assets/thirdPartLogo/weChat02.jpg" />
            </a>
          </li>
          <li class="third-part-li">
            <a target="_blank" href="https://www.baidu.com">
              <img src="../assets/thirdPartLogo/QQ.jpg" />
            </a>
          </li>
          <li class="third-part-li">
            <a target="_blank" href="https://www.baidu.com">
              <img src="../assets/thirdPartLogo/weibo.jpg" />
            </a>
          </li>
        </ul>
      </div>
      <div class="register-right-now">
        <a target="_blank" @click="toRegister">立即注册</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Loading } from "element-ui";
import { getUserList } from "@/api/user";

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;

  private loading: boolean = false;
  // 初始化用户名
  private userName: string = "";
  private passWord: string = "";
  private hasUserName: boolean = false;
  private hasPassWord: boolean = false;
  private isLogin: boolean = true;
  private registerInfo: any = {
    userName: "",
    passWord: ""
  };

  created() {
    this.getUserLists()
  }
  // 获取用户列表
  getUserLists() {
    getUserList().then(res => {
      console.log("res", res);
    });
  }
  // 登录
  private login() {
    if (!this.userName) {
      this.hasUserName = true;
      if (!this.passWord) {
        this.hasPassWord = true;
        this.$notify.error({
          title: "提示",
          message: "请输入您的用户名与密码！",
          duration: 2000
        });
      } else {
        this.$notify.error({
          title: "输入账号",
          message: "请您输入正确的用户名",
          duration: 2000
        });
      }
    } else if (!this.passWord) {
      this.hasPassWord = true;
      this.$notify.error({
        title: "输入密码",
        message: "请您输入正确的密码",
        duration: 2000
      });
    } else {
      this.getLoginInfo(this.userName, this.passWord);
      // 此处调用登录接口，得到返回结果
    }
  }
  private register() {
    if (!this.userName) {
      this.hasUserName = true;
      if (!this.passWord) {
        this.hasPassWord = true;
        this.$notify.error({
          title: "提示",
          message: "请输入您的用户名与密码！",
          duration: 2000
        });
      } else {
        this.$notify.error({
          title: "输入账号",
          message: "请您输入正确的用户名",
          duration: 2000
        });
      }
    } else if (!this.passWord) {
      this.hasPassWord = true;
      this.$notify.error({
        title: "输入密码",
        message: "请您输入正确的密码",
        duration: 2000
      });
    } else {
      this.setReigsterInfo();
      // 此处调用登录接口，得到返回结果
    }
  }
  // 提交登录信息
  private getLoginInfo(u: string, p: string) {
    if (u && p) {
      this.$notify.success({
        title: "登录成功",
        message: "欢迎进入"
      });
      if (u === "fushaoshuai" && p != null) {
        setTimeout(() => {
          this.$router.push("/Home");
        }, 1000);
      } else {
        this.$notify.error({
          title: "账号不存在",
          message: "请输入正确的账号密码"
        });
      }
    }
  }
  // 跳转至注册
  private toRegister() {
    this.isLogin = false;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  // 提交注册信息
  private setReigsterInfo() {
    this.$notify.success({
      title: "提示",
      message: "注册成功",
      duration: 2000
    });
    this.isLogin = true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>
<style scoped lang="scss">
.loading {
  height: 100vh;
  margin: 0 auto;
}
div {
  margin: 4% 0;
}
.Login {
  margin: 0;
  padding: 0;
  border: none;
}

span {
  font-size: 14px;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

i {
  cursor: pointer;
}

.flex {
  display: flex;
}

.fl-jy-bt {
  justify-content: space-between;
}

.Login {
  height: 100vh;
  width: 100%;
  background-color: red; /* 不支持线性的时候显示 */
  background-image: linear-gradient(to right, #00dbde, #fc00ff);
  position: relative;
}

.form-container {
  width: 30%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.username,
.password {
  padding: 0 15%;
  text-align: left;
}

.el-icon-warning {
  color: #c80000;
}

.login-btn {
  width: 70%;
  background-image: linear-gradient(to right, #00dbde, #fc00ff);
  border: none;
  &:hover {
    background-image: linear-gradient(to right, #fc00ff, #00dbde);
  }
}

.third-part-ul {
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-around;
  .third-part-li {
    &:hover {
      cursor: pointer;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }
}

.register-right-now,
.forget-psw {
  cursor: pointer;
}
.forget-psw {
  padding-right: 15%;
  text-align: right;
  font-size: 14px;
  &:hover {
    color: #00dbde;
  }
}
</style>
