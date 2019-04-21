<style>
.form {
    width: 300px;
    padding-top: 200px;
    margin: 0 auto;
}
</style>
<template>
  <div>
    <div style="position: fixed;width: 100%; height: 100%;">
      <vue-particles
      color="#dcdcdc"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
      </vue-particles>
    </div>
    <div  class="form" v-show="showLogin">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem label="用户名" prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
          <div>
            <span @click="handleLogin(false)">没有账号？马上注册</span>
          </div>
      </FormItem>
      </Form>
    </div>
    <div  class="form" v-show="!showLogin">
      <Form ref="formSign" :model="formInline" :rules="ruleInline">
      <FormItem label="用户名" prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwordCheck">
        <Input type="password" v-model="formInline.passwordCheck" placeholder="confirm">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit('formSign')">注册</Button>
          <div>
            <span @click="handleLogin(true)">已有账号？马上登陆</span>
          </div>
      </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'))
      } else if (value !== this.formInline.password) {
        callback(new Error('The two input passwords do not match!'))
      } else {
        callback()
      }
    }
    return {
      showLogin: true,
      formInline: {
        user: '',
        password: '',
        passwordCheck: ''
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur'
          }
        ],
        passwordCheck: [
          {
            validator: validatePassCheck,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        // console.log(this, 777)
        if (valid) {
          const router = this.$router
          const message = this.$Message
          const url = name === 'formSign' ? 'sign' : 'login'
          this.$store.dispatch('user/getUser', {data: {name: this.formInline.user, pwd: this.formInline.password}, url, router, message})
        } else {
          this.$Message.error('请求失败!')
        }
      })
    },
    handleLogin (status) {
      this.showLogin = !!status
    }
  }
}
</script>
