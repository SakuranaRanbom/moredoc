import service from '~/utils/request'

export const updateAttachment = (data) => {
  return service({
    url: '/api/v1/attachment',
    method: 'put',
    data,
  })
}

export const deleteAttachment = (params) => {
  return service({
    url: '/api/v1/attachment',
    method: 'delete',
    params,
  })
}

export const getAttachment = (params) => {
  return service({
    url: '/api/v1/attachment',
    method: 'get',
    params,
  })
}

export const listAttachment = (params) => {
  return service({
    url: '/api/v1/attachment/list',
    method: 'get',
    params,
  })
}


