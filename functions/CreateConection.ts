const wa = require('@open-wa/wa-automate');

export const createConnection = () => {
  create({
    sessionId: "",
    authTimeout: 60, //Tempo aguardado para se conectar ao whatsapp
    blockCrashLogs: true,
    disableSpins: true,
    useChrome: true,
    headless: true, //Caso true não irá mostrar a janela do chrome
    hostNotificationLang: NotificationLanguage.PTBR,
    logConsole: false,
    popup: true,
    qrTimeout: 0, //timeFixedando 0, o código QR não possuirá um tempo de vida
  }).then((client) => start(client));
};
