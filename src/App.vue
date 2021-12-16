<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Row, Col, Icon, Cell, CellGroup, Toast } from "vant";
import { getlist } from "./api/index";
Vue.use(Row, Col, Icon, Cell, CellGroup);
export default Vue.extend({
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  mounted() {
    getlist().then((res) => {
      console.log(res);
      if (res.code !== 200) {
        Toast(res.msg);
      }
    });
  },
});
</script>

<style lang="less">
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
