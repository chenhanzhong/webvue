<style scoped>
  .ivu-layout-sider {
    z-index: 10;
  }
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
    .slide {
        /* position: fixed; */
        /* height: 100vh; */
        /* left: 0; */
        /* overflow: auto; */
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
      <Layout>
          <Sider breakpoint="sm" collapsible :collapsed-width="78"  class="slide" v-model="isCollapsed">
            <Menu :active-name="routePath" theme="dark" width="auto" :open-names="['/etable']" accordion :class="menuitemClasses">
                <template v-for="(menu, index) in menuList">
                    <template v-if='!menu.children'>
                        <MenuItem :name="menu.web_route" :key='index' :to="menu.web_route">
                            <Icon :key="index + 'icon'" type="ios-navigate"></Icon>
                            <span :key="index + 'name' ">{{menu.name}}</span>
                        </MenuItem>
                    </template>
                    <Submenu :name='menu.web_route' :key='index' v-else>
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>{{menu.name}}</span>
                        </template>
                        <MenuItem :name="menu.web_route" :key='itemMenu.id' v-for="itemMenu in menu.children" :to="itemMenu.web_route">
                            <span>{{itemMenu.name}}</span>
                        </MenuItem>
                    </Submenu>
                </template>
            </Menu>
            <div slot="trigger"></div>
        </Sider>
        <Layout :style="{minHeight: '100vh'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <BreadcrumbItem v-for='(item, index) in breadlist' :key='index'>
                    <router-link :key='index' :to="item.path===''?'/':item.path"><span :style="{color: '#999'}">{{item.name}}</span></router-link>
                </BreadcrumbItem>
                <template>
                    <a :style="{textAlign: 'center', marginLeft: '100px'}" @click="modal12 = true">...</a>
                    <Modal v-model="modal12" draggable scrollable title="Modal 1">
                        <template>
                            <Tree multiple :data="data2" show-checkbox></Tree>
                        </template>
                    </Modal>
                </template>
                <template>
                    <div :style="{float: 'right', cursor: 'pointer'}">
                        <Dropdown :style="{lineHeight: 0}">
                            <span>
                                <Icon type="md-person" />
                                <span href="javascript:void(0)">
                                    guest
                                </span>
                            </span>
                            <DropdownMenu slot="list">
                                <DropdownItem><a @click="RouterCheck"><span>退出登录</span></a></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </template>
            </Header>
            <Content :style="{margin: '16px'}">
                <!-- <Breadcrumb :style="{margin: '16px 0'}">
                </Breadcrumb> -->
                <Card>
                    <div style="height:100%">
                        <router-view/>
                    </div>
                </Card>
            </Content>
        </Layout>
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
      isCollapsed: false,
      data2: [
        {title: 'aaa', expan: true, children: [{title: 'bbb'}]}
      ]
    }
  },
  created: function () {
    this.getBread()
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    getBread () {
      console.log(this.$route, 8899)
      this.routePath = this.$route.path
      this.breadlist = this.$route.matched
    },
    RouterCheck () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      menuList: state => state.init.menuList,
      current: state => state.init.current
    }),
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  watch: {
    $route () {
      this.getBread()
    }
  }
}
</script>
