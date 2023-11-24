const fs = require('fs');
const handlebars = require('handlebars');

const templates = ['index', 'signin', 'signup', 'new-house', 'edit-house', 'mine-houses', 'houses'];

const layoutSource = fs.readFileSync('./views/layout.hbs', 'utf-8');
const layoutTemplate = handlebars.compile(layoutSource);

const outputDir = './public';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

for (const templateName of templates) {
  const source = fs.readFileSync(`./views/${templateName}.hbs`, 'utf-8');
  const template = handlebars.compile(source);
  const html = layoutTemplate({ body: template({}) });
  fs.writeFileSync(`${outputDir}/${templateName}.html`, html);
}
