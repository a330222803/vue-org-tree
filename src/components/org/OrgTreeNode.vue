<script type="text/javascript">
export default {
  name: 'orgTreeNode',
  props: ['model'],
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    haveChildren () {
      return this.model.childrens && this.model.childrens.length
    },
    colspanCount () {
      return this.model.childrens ? this.model.childrens.length * 2 : 0
    },
    lineClass () {
      let arr = []
      arr.push('line left')
      for (let i = 1; i < this.colspanCount / 2; i++) {
        arr.push('line right top')
        arr.push('line left top')
      }
      arr.push('line right')
      return arr.map((element, index) => { return {className: element, index: index} })
    }
  },
  methods: {
    toggle: function () {
      console.log('node toggle')
    },
    toggleNode: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<template>
  <table cellpadding="0" cellspacing="0" border="0">
    <tbody>
      <tr class="node-cells">
        <td class="node-cell" v-bind:colspan='colspanCount'>
          <div class="node" style="cursor: n-resize;" @click="toggleNode">
            <a class='myOrgCharta' href='javascript:void(0)'
                :title="'编码:'+model.id+'\n'+
                        '名称:'+model.name">
              {{model.name}}
            </a>
          </div>
        </td>
      </tr>
      <tr v-if="haveChildren" v-show="isShow">
          <td v-bind:colspan='colspanCount'>
            <div class="line down"></div>
          </td>
      </tr>
      <tr v-if="haveChildren" v-show="isShow">
        <td v-for="element in lineClass" :key="element.index" :class="element.className" >&nbsp;</td>
      </tr>
      <tr v-if="haveChildren" v-show="isShow">
        <td class="node-container" colspan="2" v-for="(element, index) in model.childrens" :key="index" >
          <org-tree-node :model='element'></org-tree-node>
        </td>
      </tr>
    </tbody>
  </table>
</template>
