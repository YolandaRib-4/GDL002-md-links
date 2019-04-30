const mdLinks = require('./index');

const filePath = process.argv[2];

const resultReadFile  = mdLinks(filePath, null);

resultReadFile
    .then(
        (data)=> { 
            const linkArray = parseLinks(data); //modifiq aqui 
            const objArray = linkArray.map(extactData); // modifiq aquí 
            console.log(objArray);
        }
    ).catch(
        (err)=> { 
            console.error(err);
        }
    );

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

    obj.text = groups[1];
    obj.link = groups[2];
    return obj;
};

// Funcion que valida que la url sea un link valido
const validateLinks = (link) => {
   const regExp = /(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,5}/g
   const validLink = link.match(regExp);
   return validLink; 
}





