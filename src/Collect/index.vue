<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <Table border :columns="columns6" :loading="loading" :data="list"></Table>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Collect',
  data () {
    return {
      columns6: [
        {title: '考勤ID', key: 'attendance_no'},
        {title: '姓名', key: 'name'},
        {title: '部门', key: 'department_name'},
        {title: '日期', key: 'dates'},
        {title: '最早打卡时间', key: 'start_time'},
        {title: '最晚打卡时间', key: 'end_time'}
      ]
    }
  },
  created: function () {
    console.log(111111111111)
    this.$store.dispatch('collect/getList')
  },
  computed: {
    ...mapState({
      list: state => state.collect.list,
      loading: state => state.collect.loading
    })
  }
}
</script>
