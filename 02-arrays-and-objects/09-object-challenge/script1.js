const library = [];

const sethSpeaks = {
    title: 'Seth Speaks',
    author: 'Jane Roberts',
    status: {
        own: true,
        reading: false,
        read: false
    }
}
const huntForZero = {
    title: 'Hunt for Zero Point',
    author: 'Nick Cook',
    status: {
        own: true,
        reading: false,
        read: false
    }
}

const april = {
    title: 'April and the Seven Sisters',
    author: 'Sigrid Mortensen',
    status: {
        own: true,
        reading: false,
        read: false
    }
}
library.push(sethSpeaks);
library.push(huntForZero);
library.push(april)

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library) 

const {title: firstBook} = library[0];

console.log(firstBook)

const str = JSON.stringify(library);
console.log(str)