
export default [
  {
    url: '/api/getList',
    method: 'get',
    response: () => {
      return {
          code: 0,
          message: 'ok',
          data: ['aa', 'bb']
      }
    }
  },
]
