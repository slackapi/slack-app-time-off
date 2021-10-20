import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

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
      channel_id: {
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
  async ({ inputs }) => {
    // Output to activity logs
    console.log("functions › time-off-save › inputs:", JSON.stringify(inputs));

    // TODO - Store the input data into a table

    return await {
      outputs: {
        ok: true,
      },
    };
  },
);
