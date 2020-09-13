const wait = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 0)
  })

;(async () => {
  await wait()
})()
