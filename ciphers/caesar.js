const encryptCaesar = (text, offset) => {
    let encrypted = "";
    for (let letter of text) {
        let index = (letter.charCodeAt(0) + offset) % 256;
        if (index > 126)
            index -= 95;
        encrypted += String.fromCharCode(index);
    }
    return encrypted;
};

const decryptCaesar = (text, offset) => {
    let decrypted = "";
    for (let letter of text) {
        let index = (letter.charCodeAt(0) - offset) % 256;
        if (index < 32)
            index += 95;
        decrypted += String.fromCharCode(index);
    }
    return decrypted;
};

const caesar = () => {
    let string = "Some message to Peter";
    console.log(string);
    string = encryptCaesar(string, 4);
    console.log(string);
    string = decryptCaesar(string, 4);
    console.log(string);
};

caesar();