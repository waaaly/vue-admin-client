import http from "../request/index"

export function login(data) {
  return http({
    url: '/v1/login',
    method: 'get',
    params:{...data}
  })
}

export function signin(data) {
  return http({
    url: '/v1/signin',
    method: 'post',
    data
  })
}