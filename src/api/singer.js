import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    pagesize: 100,
    pagenum: 1,
    g_tk: 1664029744,
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url,data,options)
}
