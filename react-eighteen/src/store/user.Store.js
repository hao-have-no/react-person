import { makeAutoObservable } from "mobx"
import { http } from '@/utils'

// 用户模块
class UserStore{
    userInfo = {};

    constructor(){
        makeAutoObservable(this);
    }

    async getUserInfo(){
        const res = await http.get('/user/profile');
        this.userInfo = res.data.data
    }
}

export default UserStore
