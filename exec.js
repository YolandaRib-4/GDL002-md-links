const mdLinks = require('./index');

const filePath = process.argv[2];

const promise = mdLinks(filePath, null);

promise.then(
    (data)=> { // On Success
        console.log(data);
    },
    (err)=> { // On Error
        console.error(err);
    }
);
