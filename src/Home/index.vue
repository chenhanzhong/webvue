<template>
    <div>
      <Card style="width: 100%">
        <div>
          <h2 style="margin-bottom: 20px;">Good Day!</h2>
          <span>web前端 |－某某某事业群－某某平台部－某某技术部</span>
        </div>
      </Card>
      <div>
        <Card style="width:320px;display: inline-block">
          <div style="text-align:center;display: inline-block">
              <div style="width: 90px"><img style="width: 100%" src="../assets/logo.png"></div>
              <span>活跃统计</span>
              <span>33000</span>
          </div>
        </Card>
        <Card style="width:320px;display: inline-block">
          <div style="text-align:center;display: inline-block">
              <div>
                <div style="width: 90px;float: left"><img style="width: 100%" src="../assets/logo.png"></div>
                <span>
                  <span>活跃统计</span>
                  <span>33000</span>
                </span>
              </div>
          </div>
        </Card>
      </div>
      <Card style="width:320px;display: inline-block">
          <div style="text-align:center;display: inline-block">
              <img src="../assets/logo.png">
              <h3>A high quality UI Toolkit based on Vue.js</h3>
          </div>
      </Card>
      <Card style="width:320px;display: inline-block">
          <div style="text-align:center;">
              <h3 style="margin-bottom: 30px">Ongoing project</h3>
              <template>
                <div style="display: flex;justify-content: space-between">
                  <div>
                    <i-circle :percent="80">
                      <span class="demo-Circle-inner" style="font-size:24px">react</span>
                    </i-circle>
                  </div>
                  <div>
                    <i-circle :percent="70">
                      <span class="demo-Circle-inner" style="font-size:24px">vue</span>
                    </i-circle>
                  </div>
                </div>
              </template>
          </div>
      </Card>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
