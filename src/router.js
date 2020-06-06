import Vue from 'vue'
import VueRouter from 'vue-router';
import UserIndex from './components/User/UserIndex';
import UserAdd from './components/User/UserAdd';
import UserDetail from './components/User/UserDetail';
import BarangIndex from './components/Barang/BarangIndex';
import BarangAdd from './components/Barang/BarangAdd';
import BarangDetail from './components/Barang/BarangDetail';
import GudangIndex from './components/Gudang/GudangIndex';
import GudangAdd from './components/Gudang/GudangAdd';
import GudangDetail from './components/Gudang/GudangDetail';
import InventarisIndex from './components/Inventaris/InventarisIndex';
import InventarisAdd from './components/Inventaris/InventarisAdd';
import InventarisDetail from './components/Inventaris/InventarisDetail';
import LogIndex from './components/Log/LogIndex';
import LogAdd from './components/Log/LogAdd';
import LogDetail from './components/Log/LogDetail';
import AuthLogin from './components/Auth/Login';
import AuthRegister from './components/Auth/Register';

Vue.use(VueRouter);
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
        {
            path: "/barang",
            component: BarangIndex,
        },
        {
            path: "/barang/add",
            component: BarangAdd
        },
        {
            path: "/barang/:id",
            component: BarangDetail
        },
        {
            path: "/gudang",
            component: GudangIndex,
        },
        {
            path: "/gudang/add",
            component: GudangAdd
        },
        {
            path: "/gudang/:id",
            component: GudangDetail
        },
        {
            path: "/inventaris",
            component: InventarisIndex,
        },
        {
            path: "/inventaris/add",
            component: InventarisAdd
        },
        {
            path: "/inventaris/:id",
            component: InventarisDetail
        },
        {
            path: "/log",
            component: LogIndex,
        },
        {
            path: "/log/add",
            component: LogAdd
        },
        {
            path: "/log/:id",
            component: LogDetail
        },
    ]
})