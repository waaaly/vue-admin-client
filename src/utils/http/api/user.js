import http from "../request/index"

export function login(data) {
  return http({
    url: '/admin/login',
    method: 'get',
    params:{...data}
  })
}

export function signin(data) {
  return http({
    url: '/admin/signin',
    method: 'post',
    data
  })
}