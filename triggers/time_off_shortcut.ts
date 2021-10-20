import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { TimeOffWorkflow } from "../workflows/time_off_workflow.ts";

// Shortcut Definition
export const TimeOffShortcut = DefineTrigger("time_off_shortcut", {
  type: TriggerTypes.Shortcut,
  name: "Request time off",
  description: "Everyone deserves some rest and relaxation",
})
  .runs(TimeOffWorkflow)
  .withInputs((ctx) => ({
    date: "December 1",
    days: "1",
    category: "Paid Time Off",
    channel_id: ctx.data.channel_id,
    user_id: ctx.data.user_id,
  }));
