import content from './content.vue'
import giangDuong from '../giangduong/components/list-giang-duong.vue'
import nav from './navbar.vue'
export default [
  {
    path: '/nav',
    component: nav,
    children: [{
      path: '/content',
      component: content
    },
    {
      path:'/giangduong',
      component: giangDuong
    }
  ]
  }
]