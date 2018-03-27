import gitClone from '../bin/gitClone'

const cloneRepo = async function (ctx) {
  await gitClone()
    .then(res => {
      ctx.body = {
        success: true,
        data: res
      }
    })
}

export default {
  cloneRepo
}