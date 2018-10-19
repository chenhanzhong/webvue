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
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                <template v-for="(menu, index) in menuList" v-if='!menu.children'>
                    <MenuItem :name='index' :key='index' :to="menu.web_route">
                        <Icon :key='index' type="ios-navigate"></Icon>
                        {{menu.name}}
                    </MenuItem>
                </template>
                <Submenu :name='index' :key='index' v-else>
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{menu.name}}
                    </template>
                    <MenuItem :name="index-itemMenu.id" :key='itemMenu.id' v-for="itemMenu in menu.children" :to="itemMenu.web_route">
                        {{itemMenu.name}}
                    </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <BreadcrumbItem v-for='(item, index) in breadlist' :key='index'>
                    <router-link :key='index' :to='item.path'>{{item.name}}</router-link>
                </BreadcrumbItem>
                <template>
                    <a :style="{textAlign: 'center'}" @click="modal12 = true">{{current.department_name}}...</a>
                    <Modal v-model="modal12" draggable scrollable title="Modal 1">
                        <template>
                            <Tree multiple :data="data2" show-checkbox></Tree>
                        </template>
                    </Modal>
                </template>
                <Dropdown :style="{float: 'right', cursor: 'pointer'}">
                    <div>
                    <Icon type="md-person" />
                    <span href="javascript:void(0)">
                        {{current.name}}
                    </span>
                    </div>
                    <DropdownMenu slot="list">
                        <DropdownItem>退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                </Breadcrumb>
                <Card>
                    <div style="height: calc(100vh - 135px)">
                        <router-view/>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      name: 123,
      breadlist: [],
      modal12: false,
      data2: [
        {title: 'xong', expan: true, children: []}
      ]
    }
  },
  created: function () {
    this.$store.dispatch('products/getAllProducts')
    this.getBread()
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    getBread () {
      console.log(this.$route.matched, 8899)
      this.breadlist = this.$route.matched
    }
  },
  computed: {
    ...mapState({
      menuList: state => state.products.menuList,
      current: state => state.products.current
    })
  },
  watch: {
    $route () {
      this.getBread()
    }
  }
}
</script>
