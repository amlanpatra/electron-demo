const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      console.log("msg notification");
      ipcRenderer.send("notify", message);
    },
  },
});
