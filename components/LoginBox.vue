<template>
  <div class="login_wrapper">
    <div class="switch_btn">
      <p @click="step = 'login'" :class="{ active: step == 'login' }">登入</p>
      <p @click="step = 'apply'" :class="{ active: step == 'apply' }">註冊</p>
    </div>
    <template v-if="step === 'login'">
      <Label
        type="text"
        name="account"
        txt="使用者帳號"
        placeholder="請輸入E-Mail"
      />
      <Label type="password" name="pw" txt="密碼" placeholder="請輸入密碼">
        <a href="#" class="link_underline">忘記密碼</a>
      </Label>
    </template>
    <template v-else>
      <Label type="text" name="name" txt="中文姓名" placeholder="請輸入姓名" />
      <Label
        type="text"
        name="account"
        txt="使用者帳號"
        placeholder="請輸入E-Mail"
      />
      <Label
        type="password"
        name="pw"
        txt="密碼"
        placeholder="請輸入英文及數字六位數密碼"
      />
      <Label
        type="password"
        name="re_pw"
        txt="密碼確認"
        placeholder="請再輸入一次密碼"
      />
      <div class="label label_select_3">
        <p>出生日期</p>
        <div class="select_wrap">
          <select>
            <option selected="selected" disabled>年份</option>
            <option value="">1988</option>
          </select>
        </div>
        <div class="select_wrap">
          <select>
            <option selected="selected" disabled>月份</option>
            <option value="">01</option>
          </select>
        </div>
        <div class="select_wrap">
          <select>
            <option selected="selected" disabled>日期</option>
            <option value="">01</option>
          </select>
        </div>
      </div>
      <Label
        type="tel"
        name="tel"
        txt="行動電話"
        placeholder="請輸入行動電話號碼"
      />
      <Label type="checkbox" name="areement" txt="同意個人資料運用告知聲明" />
    </template>

    <div class="btn_area">
      <p>
        <Btn>{{ step === "login" ? "我要登入" : "我要註冊" }}</Btn>
      </p>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";
import Btn from "./Btn.vue";

export default {
  name: "LoginBox",
  data() {
    return {
      step: "login",
    };
  },
  props: {
    isMember: Boolean,
    memberName: String,
  },
  computed: {
    title() {
      // console.log(this);
      switch (this.step) {
        case "login":
          return "登入ＨＥＲ ＣＡＦＥ 會員";
        case "apply":
          return "申請加入ＨＥＲ ＣＡＦＥ 會員";
        default:
          return "";
      }
    },
  },
  components: {
    Label,
    Btn,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login_wrapper {
  border-radius: 30px;
  background-color: #fff;
  max-width: 690px;
  padding: 60px 70px;
  margin: 60px auto 20px;
  @media (max-width: 599px) {
    padding: 30px 20px;
    margin: 30px auto 20px;
  }
}
h3 {
  margin: 0 0 60px;
  font-size: 24px;
  @media (max-width: 599px) {
    font-size: 18px;
  }
}
.btn_area {
  padding-top: 30px;
  text-align: center;
  @media (max-width: 599px) {
    padding-top: 20px;
  }
}
.link_underline {
  margin-left: 20px;
  padding-top: 11px;
}
</style>
