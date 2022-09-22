/*
 * @Author: fenghao
 * @Date: 20-11-3 上午11:56
 * @LastEditors: fenghao
 * @LastEditTime: 20-11-3 上午11:56
 * @Description: 
 */

//标记model state类型
import { UserModelState } from '@/models/user';

export interface ConnectProps {
  location: Location & { state: { from: string } };
}

export interface ConnectState {
  user:UserModelState
}

export {UserModelState};
