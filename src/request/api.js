import request from './request'

export const GetArticleListApi = (params) => request.get('/my-blog/interface/article/getArticleList', {params})
export const GetArticleInfoApi = (params) => request.get('/my-blog/interface/article/getArticleInfo', {params})

