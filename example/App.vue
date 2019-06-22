<template>
  <div style="margin: 100px auto;max-width: 1200px;">
    <h1 style="text-align: center">vue-ele-editable</h1>
    <h2>类型演示:</h2>
    <el-table
      :data="tableData"
      border
      stripe
    >
      <el-table-column
        label="类型"
        prop="type"
        width="160"
      ></el-table-column>
      <el-table-column
        label="含义"
        prop="desc"
        width="400"
      ></el-table-column>
      <el-table-column
        label="演示(popover模式)"
        prop="popover"
      >
        <template slot-scope="scope">
          <ele-editable
            :custom-attrs="scope.row.popover.customAttrs"
            :field="scope.row.type"
            :isNoWrapper="scope.row.popover.isNoWrapper"
            :options="scope.row.popover.options"
            :request-fn="handleChange"
            :title="scope.row.type"
            :type="scope.row.type"
            v-model="scope.row.popover.data"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="演示(inline模式)"
        prop="inline"
      >
        <template slot-scope="scope">
          <ele-editable
            :custom-attrs="scope.row.inline.customAttrs"
            :field="scope.row.type"
            :inline="true"
            :isNoWrapper="scope.row.inline.isNoWrapper"
            :options="scope.row.inline.options"
            :request-fn="handleChange"
            :title="scope.row.type"
            :type="scope.row.type"
            v-model="scope.row.inline.data"
          />
        </template>
      </el-table-column>
    </el-table>

    <h2>案例:</h2>
    <el-table
      :data="exampleData"
      border
      stripe
    >
      <el-table-column
        :key="field"
        :label="column.label"
        :prop="field"
        :width="column.width"
        v-for="(column, field) of exampleDesc"
      >
        <template slot-scope="scope">
          <ele-editable
            :custom-attrs="column.customAttrs"
            :custom-data="{
              id: scope.row.id
            }"
            :default-value="column.defaultValue"
            :display-formatter="column.displayFormatter"
            :empty-text="column.emptyText"
            :field="field"
            :inline="column.inline"
            :options="column.options"
            :request-fn="handleChange"
            :rules="column.rules"
            :title="column.label"
            :type="column.type"
            :value-formatter="column.valueFormatter"
            v-model="scope.row[field]"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tableDesc: {
        type: {
          label: '类型'
        },
        desc: {
          label: '含义'
        },
        popover: {
          label: '演示(popover模式)'
        },
        inline: {
          label: '演示(inline模式)'
        }
      },
      tableData: [
        {
          type: 'text',
          desc: '静态文本',
          popover: {
            data: '我是静态文本'
          },
          inline: {
            data: '我是静态文本'
          }
        },
        {
          type: 'input',
          desc: '可编辑的单行文本',
          popover: {
            data: '我是可编辑的单行文本'
          },
          inline: {
            data: '我是可编辑的单行文本'
          }
        },
        {
          type: 'textarea',
          desc: '可编辑的多行文本',
          popover: {
            data: '我是可编辑的多行文本'
          },
          inline: {
            data: '我是可编辑的多行文本'
          }
        },
        {
          type: 'select',
          desc: '下拉框',
          popover: {
            data: 'beijing',
            options: [
              { text: '北京', value: 'beijing' },
              { text: '上海', value: 'shanghai' },
              { text: '深圳', value: 'shenzhen' }
            ]
          },
          inline: {
            data: 'beijing',
            options: [
              { text: '北京', value: 'beijing' },
              { text: '上海', value: 'shanghai' },
              { text: '深圳', value: 'shenzhen' }
            ]
          }
        },
        {
          type: 'number',
          desc: '可编辑数字',
          popover: {
            data: 10
          },
          inline: {
            data: 10
          }
        },
        {
          type: 'radio',
          desc: '单选',
          popover: {
            data: 1,
            options: [
              { text: '男', value: 0 },
              { text: '女', value: 1 }
            ]
          },
          inline: {
            data: 1,
            options: [
              { text: '男', value: 0 },
              { text: '女', value: 1 }
            ]
          }
        },
        {
          type: 'checkbox',
          desc: '多选',
          popover: {
            data: ['huawei', 'mi'],
            options: [
              { text: '华为', value: 'huawei' },
              { text: '小米', value: 'mi' },
              { text: '苹果', value: 'apple' }
            ]
          },
          inline: {
            data: ['huawei', 'mi'],
            options: [
              { text: '华为', value: 'huawei' },
              { text: '小米', value: 'mi' },
              { text: '苹果', value: 'apple' }
            ]
          }
        },
        {
          type: 'datetime',
          desc: '可编辑的日期时间 (可接受时间戳, 字符串, Date类型值)',
          popover: {
            data: new Date()
          },
          inline: {
            data: new Date()
          }
        },
        {
          type: 'datetime-text',
          desc: '不可编辑的日期时间 (接受值同上)',
          popover: {
            data: new Date()
          },
          inline: {
            data: new Date()
          }
        },
        {
          type: 'date',
          desc: '可编辑的日期 (接受值同上)',
          popover: {
            data: new Date()
          },
          inline: {
            data: new Date()
          }
        },
        {
          type: 'date-text',
          desc: '不可编辑的日期 (接受值同上)',
          popover: {
            data: new Date()
          },
          inline: {
            data: new Date()
          }
        },
        {
          type: 'time',
          desc: '可编辑的时间 (接受值同上)',
          popover: {
            data: new Date()
          },
          inline: {
            data: new Date()
          }
        },
        {
          type: 'time-text',
          desc: '不可编辑的时间 (接受值同上)',
          popover: {
            data: new Date()
          },
          inline: {
            data: new Date()
          }
        },
        {
          type: 'status',
          desc: '状态',
          popover: {
            data: 1,
            options: [
              { text: '审核失败', value: 0, type: 'danger' },
              { text: '审核通过', value: 1, type: 'success' },
              { text: '待审核', value: 2, type: 'primary' }
            ]
          },
          inline: {
            data: 1,
            options: [
              { text: '审核失败', value: 0, type: 'danger' },
              { text: '审核通过', value: 1, type: 'success' },
              { text: '待审核', value: 2, type: 'primary' }
            ]
          }
        },
        {
          type: 'switch',
          desc: '开关',
          popover: {
            data: 1
          },
          inline: {
            data: 1
          }
        },
        {
          type: 'image',
          desc: '单个图片/多张图片',
          popover: {
            data: ['https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/3.png', 'https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/4.png']
          },
          inline: {
            data: ['https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/3.png', 'https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/4.png']
          }
        },
        {
          type: 'upload-image',
          desc: '上传图片',
          popover: {
            data: null,
            customAttrs: {
              action: 'https://jsonplaceholder.typicode.com/posts/',
              responseFn: function (response, file) {
                return file.url
              }
            }
          },
          inline: {
            data: null,
            customAttrs: {
              action: 'https://jsonplaceholder.typicode.com/posts/',
              responseFn: function (response, file) {
                return file.url
              }
            }
          }
        },
        {
          type: 'url',
          desc: '链接',
          popover: {
            data: 'https://www.baidu.com'
          },
          inline: {
            data: 'https://www.baidu.com'
          }
        },
        {
          type: 'color',
          desc: '颜色',
          popover: {
            data: '#409EFF'
          },
          inline: {
            data: '#409EFF'
          }
        },
        {
          type: 'custom-rate',
          desc: '自定义扩展(评分组件)',
          popover: {
            data: 5,
            isNoWrapper: true
          },
          inline: {
            data: 2,
            isNoWrapper: true
          }
        },
        {
          type: 'custom-slider',
          desc: '自定义扩展(滑块组件)',
          popover: {
            data: 0
          },
          inline: {
            data: 50
          }
        }
      ],
      exampleDesc: {
        id: {
          label: 'ID',
          width: 50
        },
        avatar: {
          label: '头像',
          type: 'image',
          width: 150
        },
        name: {
          label: '姓名',
          type: 'input',
          rules: {
            required: true,
            message: '姓名必填'
          }
        },
        age: {
          label: '年龄',
          type: 'number',
          displayFormatter (value) {
            return value != null ? `${value} 岁` : null
          }
        },
        city: {
          label: '所属忍村',
          type: 'select',
          options: [
            { text: '木叶村', value: 'muyecun' },
            { text: '砂隐村', value: 'shayincun' },
            { text: '雾隐村', value: 'wurencun' },
            { text: '音隐村', value: 'yinyincun' }
          ]
        },
        gender: {
          label: '性别',
          type: 'radio',
          options: [
            { text: '男', value: 'male' },
            { text: '女', value: 'female' }
          ]
        },
        match: {
          label: '中忍比赛时间',
          type: 'datetime'
        },
        is_pass: {
          label: '审核结果',
          type: 'status',
          defaultValue: 0,
          options: [
            { text: '未处理', value: 0, type: 'info' },
            { text: '已通过', value: 1, type: 'success' },
            { text: '未通过', value: 2, type: 'danger' }
          ]
        },
        status: {
          label: '状态',
          type: 'switch'
        }
      },
      exampleData: [
        {
          id: 1,
          name: '旋涡鸣人',
          avatar: ['https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/3.png', 'https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/4.png'],
          age: 12,
          city: 'muyecun',
          match: '2019-10-20 10:20:30',
          gender: 'male',
          status: true,
          is_pass: 1
        },
        {
          id: 2,
          name: '日向雏田',
          avatar: ['https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/1.png', 'https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/2.png'],
          age: 12,
          city: 'muyecun',
          match: '2019-10-20 10:20:30',
          gender: 'male',
          status: true,
          is_pass: 1
        },
        {
          id: 3,
          name: '药师兜',
          avatar: 'https://raw.githubusercontent.com/dream2023/vue-ele-editable/master/public/img/5.png',
          age: 24,
          city: 'yinyincun',
          match: 1571536800,
          gender: 'male',
          status: false,
          is_pass: 2
        },
        {
          id: 4,
          name: null,
          avatar: null,
          age: null,
          city: null,
          match: null,
          gender: null,
          status: null,
          is_pass: null
        }
      ]
    }
  },
  methods: {
    handleChange (data) {
      console.log(data)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }
}
</script>
