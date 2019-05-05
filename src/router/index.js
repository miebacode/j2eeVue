import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Topic from '@/pages/topic/Topic'
import Category from '@/pages/category/Category'
import Cart from '@/pages/cart/Cart'
import Book from '@/pages/book/Book'
import Manage from '@/pages/manage/Manage'

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topic/:topicName',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/book/:id',
      name: 'Book',
      component: Book
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
  ]
})
