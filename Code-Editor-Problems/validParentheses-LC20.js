var isValid = function(s) {
  
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    for (var c of cArr) {
        console.log(stack);
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;
};

console.log(isValid('{[({[]})]}'))