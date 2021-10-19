import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { TimeOffSaveFunction } from "../functions/time_off_save.ts";

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
      type: Schema.types.string,
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
    user_id: {
      type: Schema.slack.types.user_id,
      description: "Who is requesting time off?",
    },
  },
});

// Workflow Step 1 - Save data to a table
TimeOffWorkflow.addStep(TimeOffSaveFunction, {
  date: TimeOffWorkflow.inputs.date,
  days: TimeOffWorkflow.inputs.days,
  category: TimeOffWorkflow.inputs.category,
  comments: TimeOffWorkflow.inputs.comments,
  channel: TimeOffWorkflow.inputs.channel,
  user_id: TimeOffWorkflow.inputs.user_id,
});

// Workflow Step 2 - Send message for approval
TimeOffWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TimeOffWorkflow.inputs.channel,
  message:
    `You have a new *${TimeOffWorkflow.inputs.category}* request from *<@${TimeOffWorkflow.inputs.user_id}>* starting *${TimeOffWorkflow.inputs.date}* for *${TimeOffWorkflow.inputs.days} days*.\n_${TimeOffWorkflow.inputs.comments}_`,
});
