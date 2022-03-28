import { getCookie, expireTime, clearInterVal } from "@/utils/commonFunction"

const userStoreModule = {
    namespaced: true,
    state: () => ({
        token: getCookie('ZhongTai'),
        userInfo: getCookie('user_login_info') ? JSON.parse(getCookie('user_login_info')) : {},
        userMenuAuth: getCookie('userMenuAuth') ? JSON.parse(getCookie('userMenuAuth')) : [],//当前用户Menu的权限
        userButtonAuth: getCookie('userButtonAuth') ? JSON.parse(getCookie('userButtonAuth')) : [],//当前用户Button的权限
        userApiAuth: getCookie('userApiAuth') ? JSON.parse(getCookie('userApiAuth')) : [],//当前用户Api的权限
        certType: ''
    }),
    mutations: {
        getToken(state, data){
            state.token = data
        },
        logOut(){
            expireTime('ZhongTai')
            expireTime('refreshToken')
            expireTime('user_login_info')
            expireTime('expires_in')
            expireTime('login_time')
            expireTime('isMaintText')
            getCookie('isMaint') && expireTime('isMaint')
            clearInterVal()
            window.location.href = `${import.meta.env.VITE_APP_JUMPURL}/#/login?fromUrl=${encodeURIComponent(window.location.href)}`
        }
    }
}

export default userStoreModule