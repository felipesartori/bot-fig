const wa = require('@open-wa/wa-automate');
const getCallVerification = require("./functions/getCallVerification.ts");
const getConvertToStick = require("./functions/getConvertToStick.ts");
const onStartup = require("./functions/onStartup.ts");
const onDeath = require("./functions/onDeath.ts");
process.setMaxListeners(15);

onStartup.onStartup();
onDeath.onDeath();
wa.create({
    sessionId: "bot-Fig",
    restartOnCrash: (client) => start(client),
    authTimeout: 60, //Tempo aguardado para se conectar ao whatsapp
    blockCrashLogs: true,
    disableSpins: true,
    useChrome: true,
    headless: true, //Caso true não irá mostrar a janela do chrome
    logConsole: false,
    popup: true,
    killProcessOnBrowserClose: true,
    chromiumArgs: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--aggressive-cache-discard",
        "--disable-cache",
        "--disable-application-cache",
        "--disable-offline-load-stale-cache",
        "--disk-cache-size=0",
    ],
    qrTimeout: 0, //qrTimeout = 0, o código QR não possuirá um tempo de vida
}).then((client) => start(client));

function start(client) {
    try {
        getCallVerification.getCallVerification(client)
        getConvertToStick.getConvertToStick(client)
    } catch (error) {
        console.log(error)
    }
}