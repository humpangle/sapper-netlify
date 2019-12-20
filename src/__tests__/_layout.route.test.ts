/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, wait } from "@testing-library/svelte";
import Layout from "../routes/_layout.svelte";

it("renders layout", async () => {
  render(Layout, {
    segment: ""
  });

  await wait(() => true);
});
