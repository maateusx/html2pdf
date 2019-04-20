const fs = require('fs'),
      pdf = require('html-pdf'),
      html = fs.readFileSync(process.argv[2], 'utf8'),
      options = {
        border: '0.5in',
        format: 'A4',
      }

console.log(`> Arquivo de entrada: ${process.argv[2]}`)
pdf.create(html, options).toFile(`./output/${process.argv[2]}.pdf`, (err, res) => {
  if (err) return console.log(err)
  console.log(`> Arquivo PDF Gerado com sucesso: ${res.filename}`);
});

