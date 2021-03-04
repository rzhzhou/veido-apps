import qs from 'qs';
import { fetch } from '../utils/axios';

// // 首页
// export function Dashboard(params) {
//   return fetch({
//     url: '/dashboard',
//     method: 'get',
//     params,
//   });
// }

// 单一事件
export function VideoSource(params, id) {
    return fetch({
      url: `videosource/${id}/`,
      method: 'get',
      params,
    });
  }