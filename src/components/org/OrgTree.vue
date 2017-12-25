<template>
  <div class="jOrgChart">
    <org-node :model='model' v-for='model in data.data' :key="model.key"></org-node>
  </div>
</template>
<script type="text/javascript">
import orgNode from "./OrgTreeNode.vue";

export default {
  name: "orgTree",
  components: {
    orgNode
  },
  data() {
    return {
      data: {
        data: [
          {
            id: 1,
            name: "某某公司",
            pid: null,
            childrens: [
              {
                id: 2,
                name: "研发中心",
                pid: 1,
                childrens: [
                  {
                    id: 5,
                    name: "APP开发部",
                    pid: 2,
                    childrens: [
                      {
                        id: 10,
                        name: "IOS小组",
                        pid: 5,
                        childrens: []
                      },
                      {
                        id: 11,
                        name: "Android小组",
                        pid: 5,
                        childrens: []
                      },
                      {
                        id: 12,
                        name: "H5小组",
                        pid: 5,
                        childrens: []
                      }
                    ]
                  },
                  {
                    id: 6,
                    name: "管理认证",
                    pid: 2,
                    childrens: [
                      {
                        id: 13,
                        name: "国际性管理认证",
                        pid: 6,
                        childrens: []
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "风控部",
                pid: 1,
                childrens: [
                  {
                    id: 7,
                    name: "催收部门",
                    pid: 3,
                    childrens: [
                      {
                        id: 14,
                        name: "外呼小组",
                        pid: 7,
                        childrens: []
                      }
                    ]
                  },
                  {
                    id: 8,
                    name: "信用评审部",
                    pid: 3,
                    childrens: [
                      {
                        id: 15,
                        name: "信用卡小组",
                        pid: 8,
                        childrens: []
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "运营部",
                pid: 1,
                childrens: [
                  {
                    id: 9,
                    name: "线上运营",
                    pid: 4,
                    childrens: [
                      {
                        id: 16,
                        name: "BD小组",
                        pid: 9,
                        childrens: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
<style>
.myOrgCharta {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}

#app {
  width: 100%;
  overflow: auto;
}

/* node cell */
.jOrgChart td {
  text-align: center;
  vertical-align: top;
  padding: 0;
}
/* The node */
.jOrgChart .node {
  background-color: #496eef;
  display: inline-block;
  width: 120px;
  height: 50px;
  line-height: 50px;
  z-index: 10;
  margin: 0 8px;
  border-radius: 4px;
}
.jOrgChart .left {
  border-right: 1px solid #496eef;
}
.jOrgChart .right {
  border-left: 1px solid #496eef;
}
.jOrgChart .top {
  border-top: 2px solid #496eef;
}
.jOrgChart .down {
  background-color: #496eef;
  margin: 0px auto;
}
.jOrgChart .line {
  height: 20px;
  width: 2px;
}
</style>
