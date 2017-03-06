<template>
<div class="pagination">
  <slot></slot>
</div>
</template>

<script>
import paginate from '../lib/pagination'

export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    perpage: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    },
    edge: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      current: this.page
    }
  },
  computed: {
    pagination() {
      return paginate({
        total: this.total,
        perpage: this.perpage,
        page: this.current,
        edge: this.edge,
      })
    }
  },
  methods: {
    select(num) {
      const totalPages = this.pagination.totalPages
      if (num && num > totalPages) {
        num = totalPages
      }
      if (num && num !== this.current) {
        this.current = num
        this.$emit('change', num)
      }
    }
  }
}
</script>
