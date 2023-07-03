import { defineConfig } from "cypress";
import { addXrayResultUpload, configureXrayPlugin } from "cypress-xray-plugin/plugin";
export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await configureXrayPlugin({
          jira: {
              projectKey: "TD"
          },
          xray: {
              uploadResults: true
          }
      });
      await addXrayResultUpload(on);
  },
  },
});
