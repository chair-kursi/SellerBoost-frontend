import validator from 'validator'


const isAlphaNumeric = (str) => {
    for (let i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (!(c > 47 && c < 58) && // numeric (0-9)
            !(c > 64 && c < 91) && // upper alpha (A-Z)
            !(c > 96 && c < 123) // lower alpha (a-z) ) { 
        ) {
            return false;
        }
    }
    return true;
}

export const styleCodeValidator = (code) => {
    if (code.match(' ') || code.length > 20)
        return false;
    else {
        //DONNO WHY IT'S NOT WORKING ( without '!' in line 7 )
        // for(let i=0;i<code.length;i++){
        //     if(code[i] === "-" || code[i]===':' || !code[i].match(/[^0-9a-zA-Z]/gi))
        //     {
        //         //everything is fine
        //     } 
        //     else return false;
        // }
        for (let i = 0; i < code.length; i++) {
            var c = code.charCodeAt(i);
            if (!(c > 47 && c < 58) &&
                !(c > 64 && c < 91) && 
                code[i] !== '-' &&
                code[i] !== ':') {
                return false;
            }
        }
    }
    return true
}

export const nameValidator = (name) => {
    if (name.length > 30)
        return false;
    for (let i = 0; i < name.length; i++) {
        if (name[i] !== '-' && name[i] !== ' ' && name[i] !== ':' && !isAlphaNumeric(name[i]))
            return false;
    }
    return true;
}


export function urlValidator(str) {
    return validator.isURL(str)
}

export function sizeCodeValidator(str){
    if(str.length<3 || str.length>10)
    return false;
    for(let i=0;i<str.length;i++)
    {
        if(!validator.isAlphanumeric(str[i]) &&  str[i]!==':' &&str[i]!=='-' && str[i]!=='_')
        return false 
    }
    return true;
}

export function sizeNameValidator(s){
    if(s.length>50 || s.length<5)
    return false;
    for(let i=0;i<s.length;i++)
    {
        if(!validator.isAlphanumeric(s[i]) && s[i]!=='-' && s[i]!==':' && s[i]!=='-' && s[i]!=='_' && s[i]!=='.' && s[i]!==']' && s[i]!=='[' && s[i]!=='}' && s[i]!=='{' && s[i]!==')' && s[i]!=='(')
        return false
    }
    return true;
}