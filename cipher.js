let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    let secretChars = ("acegikmoqsuwy".split(""));
    let sWord = word.split("");
    let cypheredWord = "";

    sWord.forEach((char) => {
        let i = alphabet.indexOf(char);

        if (i+s > alphabet.length-1) {
            let pos = (i+s) % alphabet.length;
            cypheredWord += alphabet[pos];
        } else if (i === alphabet.length-1) {
            cypheredWord += alphabet[s-1];
        } else {
            cypheredWord += alphabet[i+s];
        }

        if (secretChars.includes(char)){
            s++;
        } else if (!secretChars.includes(char)){
            s--;
        }
    })
    console.log(cypheredWord);