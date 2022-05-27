import Vue from 'vue'
import VueRouter from 'vue-router'

// router : 메뉴달기
Vue.use(VueRouter)

const routes = [
  // /, /tutorials 메뉴를 클릭하면 TutorialsList.vue 로딩
  // Tutorial 목록 화면
  {
    path: '/',
    alias: "/tutorials",
    name: 'tutorials',
    component: () => import('@/components/TutorialList')
  },
  // // Tutorial 상세 화면
  // {
  //   path: '/tutorials/:id',
  //   name: 'tutorial-details',
  //   component: () => import('@/components/Tutorial')
  // },
  // Tutorial 목록 추가 화면
  {
    path: '/add',
    name: 'add',
    component: () => import('@/components/AddTutorial')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
