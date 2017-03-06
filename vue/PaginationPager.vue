<template>
<ul class="pagination_pager">
  <li v-if="prev" :class="{'Disabled': !pagination.prev}">
    <a @click="select(pagination.prev)" v-text="prev"></a>
  </li>
  <li :class="{'Current': current==1}"><a @click="select(1)">1</a></li>
  <li v-show="pagination.hasLeftEdge"><a @click="selectLeft">…</a></li>
  <li v-for="p in pagination.pageList" :class="{'Current': p==current}">
    <a @click="select(p)" v-text="p"></a>
  </li>
  <li v-show="pagination.hasRightEdge"><a @click="selectRight">…</a></li>
  <li :class="{'Current': current==totalPages}"><a @click="select(totalPages)" v-text="totalPages"></a></li>
  <li v-if="next" :class="{'Disabled': !pagination.next}">
    <a @click="select(pagination.next)" v-text="next"></a>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    prev: {
      type: String
    },
    next: {
      type: String
    }
  },
  computed: {
    current() {
      return this.$parent.current
    },
    pagination() {
      return this.$parent.pagination
    },
    totalPages() {
      return this.pagination.totalPages
    },
  },
  methods: {
    select(num) {
      this.$parent.select(num)
    },
    selectLeft() {
      this.select(this.current - this.edge)
    },
    selectRight() {
      this.select(this.current + this.edge)
    }
  }
}
</script>
