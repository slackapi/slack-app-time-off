import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPIClient } from "slack-cloud-sdk/mod.ts";
import { TimeOffSaveFunction } from "./time_off_save.ts";

const client = new SlackAPIClient("");

Deno.test("Time-off Save Function should fail because not authorized", async () => {
  const inputs = {
    date: "December 14",
    days: "5",
    category: "Paid Time Off",
    comments: "Holiday vacation",
    channel_id: "C02AL6F9XU9",
    user_id: "U029RM70G83",
  };
  const { outputs } = await TimeOffSaveFunction.run({
    inputs,
    client,
    env: {},
  });
  assertEquals(outputs?.ok, true);
});
