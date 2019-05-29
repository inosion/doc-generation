doc = `
Usage:
  mume-runner.js <document>
  mume-runner.js -h | --help | --version

`;

const {docopt} = require('docopt');
const mume = require("@shd101wyy/mume");

var arguments = docopt(doc, {
  version: '0.1.0'
});


async function mumeRunner(markdownFile) {
  await mume.init();

  const engine = new mume.MarkdownEngine({
    filePath: markdownFile,
    config: {
      previewTheme: "github-light.css",
      // revealjsTheme: "white.css"
      codeBlockTheme: "default.css",
      printBackground: true,
      enableScriptExecution: true, // <= for running code chunks
    },
  });

  // html export
  await engine.htmlExport({ executablePath: "./node_modules/puppeteer/.local-chromium/linux-662092/chrome-linux/chrome", offline: false, runAllCodeChunks: true });

  // chrome (puppeteer) export
  await engine.chromeExport({ executablePathe: "./node_modules/puppeteer/.local-chromium/linux-662092/chrome-linux/chrome", fileType: "pdf", runAllCodeChunks: true }); // fileType = 'pdf'|'png'|'jpeg'

  return process.exit();
}


console.log(arguments);
mumeRunner(arguments["<document>"]);
