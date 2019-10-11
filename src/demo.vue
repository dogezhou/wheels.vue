<template>
  <div style="margin: 50px 100px">
    <z-cascader
      :source.sync="source1"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></z-cascader>
    <!-- <z-cascader
      :source.sync="source2"
      popover-height="200px"
      :selected.sync="selected"
    ></z-cascader> -->
  </div>
</template>

<script>
import Cascader from './cascader'
import db from './db'

const ajax = (parentId=0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = db.filter(item => item.parent_id == parentId)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300);
  })
}

export default {
  name: 'demo',
  components: {
    'z-cascader': Cascader
  },
  data() {
    return {
      selected: [],
      source1: [],
      source2: [
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                {
                  name: '西湖'
                }
              ]
            },
          ],
        },
        {
          name: '江苏',
          children: [
            {
              name: '南京',
              children: [
                {
                  name: '江宁区'
                }
              ]
            },
          ],
        }
      ],
    }
  },
  created () {
    ajax(0).then(result => {
      this.source1 = result
    })
  },
  methods: {
    loadData (node, callback) {
      const { id } = node
      ajax(id).then((result) => {
        callback(result)
      })
    },
  }
}
</script>

<style lang="scss">
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
</style>
