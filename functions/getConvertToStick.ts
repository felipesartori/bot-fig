import { decryptMedia } from '@open-wa/wa-automate';

export const getConvertToStick = (client) => {
  client.onMessage(async (message) => {
    try {
      if (message.mimetype) {
        const mediaData = await decryptMedia(message);
        const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString('base64')}`
        const metadata = { author: 'chatbot-fig', pack: 'chatbot-fig', keepScale: true, square: '512' }

        if (message.type === "image") {
          client.sendImageAsSticker(message.from, imageBase64, metadata)
        }
        if (message.type === "video") {
          await client.sendMp4AsSticker(message.from, mediaData, metadata);
        }
      }
    } catch (error) {
      await client.sendText(message.from, `Não foi possível transformar em figurinha!`)
    }
  });
};
