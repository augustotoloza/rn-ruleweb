export function EmailIsValid(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
}

export function isComplete(var1, var2){
    return (var1 && var2) != "" && var2.length >= 4;
}