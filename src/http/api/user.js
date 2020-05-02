import http from "../request/index.js"

export function login(data) {
  return request({
    url: '/login',
    method: 'get',
    params:{data}
  })
}

export function signin(data) {
  return request({
    url: '/signin',
    method: 'post',
    data
  })
}