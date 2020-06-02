import {request} from "@/utils/request"

export function testApi(config){
  return request({
    url:'login/data',
  })
}