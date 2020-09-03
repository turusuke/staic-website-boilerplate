const wait = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });

(async () => {
  await wait();
})();
