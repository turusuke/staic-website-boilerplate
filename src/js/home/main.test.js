import { wait } from "./main";

test("wait", async () => {
  const res = await wait();
  return expect(res).toBe("done");
});
