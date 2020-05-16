import http from "../request/index"

export function createArticle(data) {
  return http({
    url: '/blog/createArticle',
    method: 'post',
    data
  })
}

export function findByArticleId(data) {
  return http({
    url: '/blog/findByArticleId',
    method: 'get',
    params:{...data}
  })
}

export function findArticle(data) {
  return http({
    url: '/blog/findArticle',
    method: 'get',
    params:{...data}
  })
}