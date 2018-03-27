import gitClone from '../bin/gitClone'

const cloneRepo = async function (ctx) {
  await gitClone()
    .then(res => {
      ctx.body = res
    })
}

export default {
  cloneRepo
}