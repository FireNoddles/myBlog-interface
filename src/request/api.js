import request from './request'

export const GetArticleListApi = (params) => request.get('/my-blog/interface/article/getArticleList', {params})
export const GetArticleInfoApi = (params) => request.get('/my-blog/interface/article/getArticleInfo', {params})
export const GetCategoryListApi = (params) => request.get('/my-blog/interface/category/getCategory', {params})

