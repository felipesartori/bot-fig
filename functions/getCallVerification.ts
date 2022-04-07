export const getCallVerification = (client) => {
  client.onIncomingCall(async (call) => {
    if (!call.isGroup) {
      await client
        .sendText(call.peerJid, `⛔ Não recebemos ligação, para evitar novas ligações, você foi bloqueado!`)
        .then(async () => {
          client.contactBlock(call.peerJid);
        });
    }
  });
};
