module.exports = function reverse(n) {
    let str = String(n);
    let array = str.split('');
    if (array[0] == '-') {
        array.shift();
        let b = array.reverse();
        let newN = b.join('');
        return Number(newN);
    } else {
        let reverseArray = array.reverse();
        let newN = reverseArray.join('');
        return Number(newN);
    };

}
