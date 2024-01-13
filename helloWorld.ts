function prettyPrintText(textShort, ms) {
    let text = textShort += "a"
    function checkChar(letter, char, length) {
        if (letter != char && output.length == length) {
            output = output.slice(0, -1);
        }
    }
    let output = "";
    let i = 0;
    while(output.length < textShort.length - 1) {
        let newLetter = getLetter()
        output += newLetter
        console.log(output);

        for (let j = 1; j < text.length; j++) {
            checkChar(newLetter, text[j - 1], j)
        }
        
        sleep(ms)
        i += output.length
    }
    function getLetter() {
        let result = '';
        const characters = ' !"æøå#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        const charactersLength = characters.length;
        return characters.charAt(Math.floor(Math.random() * charactersLength));
    
    }
    function sleep(ms) {
        const start = new Date().getTime();
        while (new Date().getTime() - start < ms) {
        }
      }
    
}

prettyPrintText("Andreas vekte meg ved p spille fifa høylytt ", 1)