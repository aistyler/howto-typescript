import { bootstrap } from "./server";

test('# server', () => {
  expect(bootstrap()).toBeDefined();
});
