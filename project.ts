import { Project } from "slack-cloud-sdk/mod.ts";
import { TimeOffSaveFunction } from "./functions/time_off_save.ts";
import { TimeOffWorkflow } from "./workflows/time_off_workflow.ts";
import { TimeOffShortcut } from "./triggers/time_off_shortcut.ts";

Project({
  name: "Time-off Request TEST",
  description: "A very basic time-off request app",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [TimeOffSaveFunction],
  workflows: [TimeOffWorkflow],
  triggers: [TimeOffShortcut],
  outgoingDomains: [],
});
