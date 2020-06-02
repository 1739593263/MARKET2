import {request} from "@/utils/request"

export function testApi(username,password){
  return request({
    url:'login/data',
    params:{
      username,
      password
    }
  })
}

export function formAction(username,password) {
  return request({
    url: "login/action",
    params: {
      username,
      password
    }
  })
}