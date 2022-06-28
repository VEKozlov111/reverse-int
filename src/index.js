module.exports = function reverse(n) {
    let str = String(n);
    let array = str.split('');
    if (array[0] == '-') {
        let a = array.shift();
        let b = a.reverse();
        let newN = b.join('');
        return Number(newN);
    } else {
        let reverseArray = array.reverse();
        let newN = reverseArray.join('');
        return Number(newN);
    };

}
