import Vue from 'vue'
import VueRouter from 'vue-router';
import UserIndex from './components/User/UserIndex';
import UserAdd from './components/User/UserAdd';
import UserDetail from './components/User/UserDetail';
import AuthLogin from './components/Auth/Login';
import AuthRegister from './components/Auth/Register';

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/login",
            component: AuthLogin
        },
        {
            path: "/register",
            component: AuthRegister
        },
        {
            path: "/user",
            component: UserIndex,
        },
        {
            path: "/user/add",
            component: UserAdd
        },
        {
            path: "/user/:id",
            component: UserDetail
        },
    ]
})