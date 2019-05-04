//Funcion para encontrar links en el archivo que leyó
const parseLinks = (data) => {
    const regExp = /\[(.+)\]\((.+)\)/g;
    const matchLinks = data.match(regExp);
    return matchLinks;
};
// Funcion que crea el objeto con texto y los enlaces
const extactData = (mdLink) => {
    const regExp = /\[(.+)\]\((.+)\)/g;
    const obj = {};
    const groups = regExp.exec(mdLink);  // matching groups 
    // 0 [Node.js](https://nodejs.org/en/)'
    // 1 Node.js
    // 2 https://nodejs.org/en/

    obj.text = groups[1].substring(0, 50);
    obj.link = groups[2];
    return obj;
};
module.exports = {parseLinks, extactData};