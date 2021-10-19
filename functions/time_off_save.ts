import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";
import { TimeOffTable } from "../tables/time_off_table.ts";

// Function Definition
export const TimeOffSaveFunction = DefineFunction(
  "time-off-save",
  {
    title: "Save a time-off request",
    description: "Save a time-off request into a table",
    input_parameters: {
      date: {
        type: Schema.types.string,
        description: "Starting date",
      },
      days: {
        type: Schema.types.string,
        description: "Number of days",
      },
      category: {
        type: Schema.types.string,
        description: "Category of time-off",
      },
      comments: {
        type: Schema.types.string,
        description: "Additional comments",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to send time-off request",
      },
      user_id: {
        type: Schema.slack.types.user_id,
        description: "Person requesting time off",
      },
    },
    output_parameters: {
      ok: {
        type: Schema.types.boolean,
        description: "True when data saved to table successfully",
      },
    },
  },
  async ({ inputs, client }) => {
    const table = TimeOffTable.api(client);
    const uniqueId = (new Date()).getTime();

    // Save data to a table with result:
    // - Success: {"ok": true, "table": "name", "row": {"date": "value", ... }}
    // - Error:   {"ok": false, "error": "reason"}
    const result = await table.put({
      id: uniqueId,
      date: inputs.date,
      days: inputs.days,
      category: inputs.category,
      comments: inputs.comments,
      channel: inputs.channel,
      user_id: inputs.user_id,
    });

    // Output to activity logs
    console.log("time-off-save › result:", JSON.stringify(result));

    return await {
      outputs: {
        ok: result.ok,
      },
    };
  },
);
