import {request} from "@/utils/request";

export function SurToWar(transDatas) {
  return request({
    url:"check/surUpload",
    params:{
      UploadDatas: transDatas,
    }
  })
}

export function showDatas() {
  return request({
    url:"check/showData",
  })
}

export function getProduces(){
  return request({
    url:"Created/getProduces",
  })
}