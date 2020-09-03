function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
}

(async () => {
  await wait();
})();
