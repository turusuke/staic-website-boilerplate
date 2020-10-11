export const wait = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 0);
  });
(async () => {
  await wait();
})();
