import gitClone from '../bin/gitClone'
import N from '../../config'
const cloneRepo = async function (ctx) {
  let start = new Date()
  await gitClone(ctx, N)
    .then(res => {
      let ms = new Date() - start
      ctx.body = {
        success: true,
        data: `已克隆完成，用时${ms/1000}秒`
      }
    })
}

export default {
  cloneRepo
}