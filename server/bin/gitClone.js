module.exports = function () {
  return new Promise((res, rej) => {
    setTimeout(res, 1000, Math.random())
  })
}