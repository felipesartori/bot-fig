import { ev } from '@open-wa/wa-automate';
import fs from "fs";

export const onStartup = () => {
  ev.on("STARTUP.**", async (data, sessionId) => {
    if (data === "SUCCESS") console.log(`${sessionId} started!`);
  });
  ev.on("qr.**", async (qrcode, sessionId) => {
    const imageBuffer = Buffer.from(
      qrcode.replace("data:image/png;base64,", ""),
      "base64"
    );
    fs.writeFileSync(
      `qr_code${sessionId ? "_" + sessionId : ""}.png`,
      imageBuffer
    );
  });
};
