export default [
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: { title: '首页' },
    children: [
      {
        path: '/about',
        component: () => import('@/views/About'),
        meta: { title: '关于我们' }
      },
      {
        path: '/user/list',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表' }
      },
      {
        path: '/user/edit',
        component: () => import('@/views/user/edit'),
        meta: { title: '信息修改' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: { title: '登录' }
  },
  {
    path: '*',
    component: () => import('@/views/Err404'),
    meta: { title: '404页面' }
  }
]
