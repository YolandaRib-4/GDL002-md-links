const mdLinks = require('../mdLinks.js');

const markdown =  `
[Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)
`;

const markdownValited = [{
  link: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  status: '200 OK',
  text: 'Asíncronía en js'
},
{
  link: 'https://developers.google.com/v8/',
  status: '200 OK',
  text: 'motor de JavaScript V8 de Chrome'
}]

describe('mdLinks debería validar los links encontrados en los archivos markdown de un archivo', () => {
  it('-------', () => {
    expect(mdLinks(markdown)).toEqual(markdownValited);
  });