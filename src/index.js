const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let z=expr.length/10;
    let b='';
    let t='';
    let c=0;
    let p='';
    let phr=[];
    for(let i=z;i>0;i-- ){  
        p='';
        b=expr.substring(c*10,++c*10);
        for(let j=0;j<5;j++){
            t=b.substring(j*2,++j*2);
            j--;
            if(t==='00'){
                p+='';
            } else if(t==='10'){
                p+='.';
            }else if(t==='11'){
                p+='-';
            }else if(t==='**'){
                p+=' ';
            }

         }
         if (p==='     '){
            phr.push(' ');
         }
         else {
         phr.push(MORSE_TABLE[p]);
         }
        
    }
    return phr.join("");
}

module.exports = {
    decode
}