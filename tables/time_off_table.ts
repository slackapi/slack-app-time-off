import { DefineTable, Schema } from "slack-cloud-sdk/mod.ts";

// Table Definition
export const TimeOffTable = DefineTable("time-off", {
  primary_key: "id",
  columns: {
    id: {
      type: Schema.types.number,
    },
    date: {
      type: Schema.types.string,
    },
    days: {
      type: Schema.types.string,
    },
    category: {
      type: Schema.types.string,
    },
    comments: {
      type: Schema.types.string,
    },
    channel_id: {
      type: Schema.slack.types.channel_id,
    },
    user_id: {
      type: Schema.slack.types.user_id,
    },
  },
});
