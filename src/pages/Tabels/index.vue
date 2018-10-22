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
  <div>
    <Table border :columns="columns6" :loading="loading" :data="list" ref="table" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="30" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Collect',
  data () {
    return {
      columns6: [
        {type: 'selection', width: 60},
        {title: 'title', key: 'name', sortable: true},
        {
          title: 'number',
          key: 'number',
          sortable: true,
          filters: [
            {
              label: 'Greater than 30',
              value: 1
            },
            {
              label: 'Less than 30',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.show > 30
            } else if (value === 2) {
              return row.show < 30
            }
          }
        },
        {title: 'address', key: 'address', sortable: true},
        {title: 'email', key: 'email', sortable: true}
      ]
    }
  },
  created: function () {
    this.$store.dispatch('collect/getList')
  },
  computed: {
    ...mapState({
      list: state => state.collect.list.filter((item, index) => index < 10),
      loading: state => state.collect.loading
    })
  },
  methods: {
    exportData (type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        })
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: 'Sorting and filtering data',
          original: false
        })
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: 'Custom data',
          columns: this.columns6.filter((col, index) => index < 4),
          data: this.list.filter((data, index) => index < 4)
        })
      }
    },
    changePage (e) {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      // console.log(this, 77, e)
    }
  }
}
</script>
