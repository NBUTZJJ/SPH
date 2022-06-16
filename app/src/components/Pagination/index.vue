<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="sendPageNoLast">上一页</button>
    <button v-if="startAndendNum.start > 1" @click="sendPageNo1">1</button>
    <button v-if="startAndendNum.start > 2">···</button>

    <!-- 中间元素 -->
    <button
      v-for="(page, index) in startAndendNum.end"
      :key="index"
      v-if="page >= startAndendNum.start"
      @click="sendPageNo(page)"
    :class="{active: pageNo==page}"
    >
      {{ page }}
    </button>

    <button v-if="startAndendNum.end < totalPage - 1">···</button>
    <button v-if="startAndendNum.end < totalPage" @click="sendPageNoEnd">
      {{ totalPage }}
    </button>
    <button :disabled="pageNo == totalPage" @click="sendPageNoNext">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //总共多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    //起始页码结束页码
    startAndendNum() {
      let start = 0,
        end = 0;
      if (this.totalPage < this.continues) {
        start = 1;
        end = this.totalPage;
      } else {
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        if (end > this.totalPage) {
          end = this.totalPage;
          start = this.totalPage - this.continues + 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    sendPageNoLast() {
      this.$emit("getPageNo", this.pageNo - 1);
    },
    sendPageNo1() {
      this.$emit("getPageNo", 1);
    },
    sendPageNo(page) {
      this.$emit("getPageNo", page);
    },
    sendPageNoEnd() {
      this.$emit("getPageNo", this.totalPage);
    },
    sendPageNoNext() {
      this.$emit("getPageNo", this.pageNo + 1);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #f56f08;
      color: #fff;
    }
  }
}
</style>
