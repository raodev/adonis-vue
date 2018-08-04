import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Job from '@/components/Job'
import SaveJobs from '@/components/SaveJobs'
import ApplyJobs from '@/components/ApplyJobs'
import DashBoard from '@/components/DashBoard'
import ResumeAdd from '@/components/ResumeAdd'
import ResumeList from '@/components/ResumeList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/job/:alias',
      name: 'JobDetail',
      component: Job
    
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
      children:[
        {
          path: 'my-resume',
          name: 'MyResume',
          component: ResumeList
        
        },
        {
          path: 'create-resume',
          name: 'CreateResume',
          component: ResumeAdd
        
        },
        {
          path: 'save-jobs',
          name: 'SaveJobs',
          component: SaveJobs
        
        },
        {
          path: 'applied-jobs',
          name: 'AppliedJobs',
          component: ApplyJobs
        
        },
      ]
    
    }
  ],
  mode : 'history'
})
