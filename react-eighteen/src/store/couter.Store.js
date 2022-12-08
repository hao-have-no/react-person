import {computed, makeAutoObservable} from 'mobx'
class CounterStore{
    count = 0; //数据定义
    list = [1,2,3,4,5,6]
    constructor(){
        //数据响应式
        makeAutoObservable(this,{
            filterList:computed
        })
    }

    // 定义action函数(修改数据)
    addCount=()=>{
        this.count++;
        console.log(this.count);
    }

    changeList=()=>{
        this.list.push(10,11,12);
    }

    get filterList(){
        return this.list.filter(item=>item>4)
    }
}

export default CounterStore
