import http from "../request/index"

export function login(data) {
  return http({
    url: '/login',
    method: 'get',
    params:{...data}
  })
}

export function signin(data) {
  return http({
    url: '/signin',
    method: 'post',
    data
  })
}