import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
// import { DinoFunction } from "../functions/dino.ts";

// Workflow Definition
export const TimeOffWorkflow = DefineWorkflow("time_off_workflow", {
  title: "Request Time Off",
  description: "Everyone deserves some rest and relaxation",
  input_parameters: {
    date: {
      type: Schema.types.string,
      description: "What is the starting date?",
    },
    days: {
      type: Schema.types.number,
      description: "How many days?",
    },
    category: {
      type: Schema.types.string,
      description: "Which time-off category?",
    },
    comments: {
      type: Schema.types.string,
      description: "Additional comments",
    },
    channel: {
      type: Schema.slack.types.channel_id,
      description: "Channel to send time-off request",
    },
  },
});

// Workflow Step 1
// const step1 = TimeOffWorkflow.addStep(DinoFunction, {
//   name: TimeOffWorkflow.inputs.date,
// });

// Workflow Step 2
TimeOffWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TimeOffWorkflow.inputs.channel,
  message:
    `You have a new *${TimeOffWorkflow.inputs.category}* request from *@Someone* starting *${TimeOffWorkflow.inputs.date}* for *${TimeOffWorkflow.inputs.days} days*.\n_${TimeOffWorkflow.inputs.comments}_`,
});
