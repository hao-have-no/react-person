/*
 * @Author: fenghao
 * @Date: 20-10-24 下午6:19
 * @LastEditors: fenghao
 * @LastEditTime: 20-10-24 下午6:19
 * @Description: 
 */
import request from '@/utils/request';

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
  // return request('http://192.168.1.13:12138/record/slider');
}

export async function queryDetail(): Promise<any> {
  return request('/api/getUserDetail');
}

export async function fakeAccountLogout(): Promise<any> {
  return request('/api/logout');
}
