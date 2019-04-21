<template>
  <div style="width: 600px">
    <Form :model="formLeft" label-position="left" :label-width="100">
      <FormItem label="姓名">
        <Input v-model="formLeft.input1"></Input>
      </FormItem>
      <FormItem label="头像">
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
        <Modal title="View Image" v-model="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
        </Modal>
      </FormItem>
      <FormItem label="生日">
        <DatePicker type="date" placeholder="Select date" v-model="birthday"></DatePicker>
      </FormItem>
      <FormItem label="城市">
        <Input v-model="formRight.input3"></Input>
      </FormItem>
      <FormItem label="职位">
        <Input v-model="formLeft.input3"></Input>
      </FormItem>
    </Form>
    <Form :model="formRight" label-position="left" :label-width="100">
      <FormItem label="爱好">
        <Input v-model="formRight.input1"></Input>
      </FormItem>
      <FormItem label="座右铭">
        <Input v-model="formRight.input2"></Input>
      </FormItem>
      <FormItem label="介绍自己">
        <Input v-model="formRight.input2" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
    </Form>
    <Form>
      <Button type="primary" @click="handleSubmit('value')">提交</Button>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      birthday: new Date(),
      visible: false,
      defaultList: [
        {
          'name': 'a42bdcc1178e62b4694c830f028db5c0',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
        }
      ],
      formLeft: {
        input1: '',
        input2: '',
        input3: ''
      },
      formRight: {
        input1: '',
        input2: '',
        input3: ''
      },
      formTop: {
        input1: '',
        input2: '',
        input3: ''
      }
    }
  },
  methods: {
    handleSubmit (value) {
      console.log(value)
    },
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      })
    }
  }
}
</script>
