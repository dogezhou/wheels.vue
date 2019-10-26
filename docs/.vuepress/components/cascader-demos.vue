<template>
    <div>
      <ul>
        <li>基础用法</li>
      </ul>
      <z-cascader
        :source.sync="source2"
        popover-height="200px"
        :selected.sync="selected2"
      ></z-cascader>
        <pre><code>
          {{code1}}
        </code></pre>      
      <li>动态加载数据</li>
      <z-cascader
        :source.sync="source1"
        popover-height="200px"
        :selected.sync="selected1"
        :load-data="loadData"
      ></z-cascader>
        <pre><code>
          {{code2}}
        </code></pre>      
    </div>
</template>
<script>
  import Cascader from '../../../src/cascader'
  import db from '../../../src/db'

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
    components: {
      'z-cascader': Cascader
    },
    data() {
      return {
        selected1: [],
        selected2: [],
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
        code1: `
          <z-cascader
            :source.sync="source2"
            popover-height="200px"
            :selected.sync="selected2"
          ></z-cascader>
          ···
          selected2: [],
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
        `.trim(),
        code2: `
          <z-cascader
            :source.sync="source1"
            popover-height="200px"
            :selected.sync="selected1"
            :load-data="loadData"
          ></z-cascader>
          ···
          selected1: [],
          source1: [],          
          ···
          loadData (node, callback) {
            const { id } = node
            ajax(id).then((result) => {
              callback(result)
            })
          },          
        `.trim()
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