const mdLinks = require('../index.js');
const { parseLinks, extactData } = require('../functions.js');

describe('mdLinks', () => {
  it('mdLink should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLink should be defined', () => {
    expect(mdLinks).toBeDefined();
  });
});

describe('parseLinks Function', () => {
  let mockData = `
  Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
  ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
  interactuar con el sistema en sí, archivos, redes,
  [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
  ligero muy popular entre developers.
  [Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
  el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)  
  `;

  let result = [
    '[Markdown](https://es.wikipedia.org/wiki/Markdown)',
    '[Node.js](https://nodejs.org/es/)',
    '[motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)',
  ];

  it('should be defined', () => {
    expect(parseLinks).toBeDefined();
  });

  it('Should be a Function', () => {
    expect(typeof parseLinks).toBe('function');
  });

  it('should find links in text', () => {
    expect(parseLinks(mockData)).toEqual(result);
  });
});

const TEXT_NO_LINKS = '[text] with (no) links';
const TEXT_ONE_LINK = '[google](http://www.google.com)';

describe('Parse text to extract links', () => {
  it('Should return null when there is no links', () => {
    const result = parseLinks(TEXT_NO_LINKS);
    expect(result).toBe(null);
  });

  it('Should return an array with one link when there is one', () => {
    const result = parseLinks(TEXT_ONE_LINK);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(1);
  });

  it('Should return an object with link information', () => {
    const result = extactData(TEXT_ONE_LINK);
    expect(result).toEqual({
      link: 'http://www.google.com',
      text: 'google',
    });
  });
});
