import { Client } from '@open-wa/wa-automate';
const ON_DEATH = (fn) => process.on("exit", fn);
let globalClient: Client;

export const onDeath = () => {
  ON_DEATH(async function () {
    console.log("killing session");
    if (globalClient) await globalClient.kill();
  });
};
