<template>
  <div class="page-loagin-container">
    <h4>EDC临床研究电子数据采集系统</h4>
    <div class="login-form">
      <Form :model="loginForm" :rules="rules" ref="loginForm">
        <ul>
          <li
            v-for="item in loginTypeList"
            :key="item.type"
            v-text="item.label"
            :class="{ selectActive: item.type === currentType }"
            @click="selectLoginType(item.type)"
          />
        </ul>
        <!-- 密码登录 -->
        <div v-if="currentType === 'passwordLogin'">
          <Form-item prop="userName">
            <El-input v-model.trim="loginForm.userName" placeholder="请输入用户名/手机/邮箱">
              <i class="el-icon-user" slot="prepend"></i>
            </El-input>
          </Form-item>
          <Form-item prop="psd">
            <El-input v-model.trim="loginForm.psd" placeholder="请输入密码">
              <i class="el-icon-lock" slot="prepend"></i>
            </El-input>
          </Form-item>
        </div>
        <!-- 手机号登录 -->
        <div v-if="currentType === 'messageLogin'">
          <Form-item prop="mobile">
            <El-input v-model.trim="loginForm.mobile" placeholder="请输入手机号">
              <i class="el-icon-mobile-phone" slot="prepend"></i>
            </El-input>
          </Form-item>
          <Form-item prop="msgCode">
            <div class="get-msg">
              <El-input v-model.trim="loginForm.msgCode" placeholder="请输入短信验证码">
                <i class="el-icon-key" slot="prepend"></i>
              </El-input>
            </div>
          </Form-item>
        </div>
        <Form-item>
          <El-button type="primary" @click="loginIn" v-loading="loadingLogin">登 录</El-button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from 'element-ui'
import { loginTypeList } from './data'

export default {
  components: { Form, FormItem, ElInput: Input, ElButton: Button },
  data() {
    return {
      loginTypeList,
      currentType: 'passwordLogin',
      loadingLogin: false,
      loginForm: {
        userName: '',
        psd: '',
        mobile: '',
        msgCode: ''
      },
      rules: {
        psd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        mobile: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        msgCode: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.$message.success('登录')
  },
  methods: {
    selectLoginType(val) {
      this.currentType = val
    },
    loginIn() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          try {
            this.loadingLogin = true
            // TODO
            const path = this.$route.query.redirectUrl || '/home'
            this.$router.push({ path })
          } catch (err) {
            this.$message.error(err.messsage)
          } finally {
            this.loadingLogin = false
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-loagin-container {
  width: 100%;
  height: 100%;
  background: url('~assets/images/login_bg.png') center center no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  h4 {
    font-size: 18px;
    color: #fff;
    margin: 20px 0 0 20px;
  }
  .login-form {
    width: 400px;
    background-color: #fff;
    position: absolute;
    top: 40%;
    right: 200px;
    transform: translateY(-50%);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    padding: 40px;
    box-sizing: border-box;
    ul {
      display: flex;
      margin-bottom: 30px;
      li {
        margin-right: 30px;
        cursor: pointer;
        font-size: 16px;
      }
      .selectActive {
        color: #406bff;
        font-weight: 700;
      }
    }
    /deep/ .el-form {
      button {
        width: 100%;
        margin-top: 10px;
      }
      .el-form-item__error {
        left: 70px;
      }
    }
  }
}
</style>
