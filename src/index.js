module.exports = function reverse(n) {
    let str = Math.abs(n).toString();
    let i = str.length - 1;

    let result = '';
    while (i >= 0) {

        result = `${result}${str[i]}`;

        i = i - 1;
    }

    return new Number(result);
}