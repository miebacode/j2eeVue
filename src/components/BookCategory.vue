<template>
  <section class="book-category-container">
    <h3 class="title">图书分类</h3>
    <ul class="book-categories">
      <li 
        class="book-category"
        v-for="{name, title} of
        categories" :key="name"
        >
        <router-link 
          :to="{name: 'Category', params:{category: name}}">
          {{ title }} 
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'BookCategory',
    computed: {
      ...mapGetters([
        'categories'
      ])
    }
  }
</script>

<style lang="scss" scoped>
%list-item {
  padding: .4rem 0 .4rem 1rem;
  color: inherit;
  display: block;
  text-align: left;
}
%odd-line {
  background: #f4f2ef;
}
%even-line {
  background: #e7e2dd;
}

.book-category-container {
    width: 18%;
}

.title {
  @extend %list-item;
  background: #e7e2dd;
}

.book-categories {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

}

.book-category {
  width: 100%;
  background: #f4f2ef;
  &:hover{
    background: #92c3c7;
  }
  &:nth-child(odd) {
    border-right: 1px solid #dbd6d2;
  }
  &:nth-child(2n),
  &:nth-child(2n-2) {
    @extend %even-line;
  }
  &:nth-child(2n-1),
  &:nth-child(2n-3) {
    @extend %odd-line;
  }
  a {
    @extend %list-item;
    font-size: 1rem;
  }

}
</style>
