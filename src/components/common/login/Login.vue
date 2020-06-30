<template>
    <div class="login">
      <a href="#" class="login-link">
        <div class="login-img">
          <img src="~assets/img/profile/avatar.svg" alt="">
        </div>
        <div class="login-info">
          <div>登录/注册</div>
          <div class="login-info-mobel">
            <span>
              <img src="~assets/img/profile/app.svg" alt="">
            </span>
            <div>
              暂无绑定手机号
            </div>
          </div>
        </div>
        <div class="login-button">
          <img src="~assets/img/profile/aa.svg" alt="">
        </div>
      </a>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  .login {
    background-color: #ff8198;
    padding: 13px;
    margin-top: -5px;
  }
  .login-link {
    display: flex;
  }
  .login-img img {
    flex: 1;
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
  .login-info {
    width: 100%;
    color: #eeeeee;
    padding-left: 10px;
    line-height: 25px;
  }
  .login-info img {
    height: 20px;
    width: 20px;
  }
  .login-info-mobel {
    display: flex;
    font-size: 13px;
  }
  .login-button {
    flex: 1;
    line-height: 50px;
  }
  .login-button img {
    height: 20px;
    width: 20px;
  }
</style>
