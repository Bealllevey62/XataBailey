import makeWASocket from "./Socket/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./Defaults/index.js";
export * from "./WAUSync/index.js";
export * from "./Types/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./KeyDB/index.js";
export * from "./WAM/index.js";
export { makeWASocket };
const BANNER_TEXT = process.env.BAILEYS_BANNER || "XATANICAL BAILEYS"
const ASCII = `
██╗  ██╗ █████╗ ████████╗ █████╗ ███╗   ██╗██╗ ██████╗ █████╗ ██╗     
██║ ██╔╝██╔══██╗╚══██╔══╝██╔══██╗████╗  ██║██║██╔════╝██╔══██╗██║     
█████╔╝ ███████║   ██║   ███████║██╔██╗ ██║██║██║     ███████║██║     
██╔═██╗ ██╔══██║   ██║   ██╔══██║██║╚██╗██║██║██║     ██╔══██║██║     
██║  ██╗██║  ██║   ██║   ██║  ██║██║ ╚████║██║╚██████╗██║  ██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝
`
console.log("\x1b[31m" + ASCII + "\x1b[0m")
console.log(`\x1b[1m\x1b[31m${BANNER_TEXT}\x1b[0m\n`)


export default makeWASocket;