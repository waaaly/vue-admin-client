import http from "../request/index"

export function chatbyroomid(data) {
  return http({
    url: '/webchat/chatbyroomid',
    method: 'get',
    params:{...data}
  })
}

