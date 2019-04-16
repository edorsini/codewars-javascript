function XO(str) {
    let re_1 = new RegExp("o", "gi");
    let o_count = 0;
    let x_count = 0;

    if (str.match(re_1)) {
        o_count = str.match(re_1).length;
    }

    let re_2 = new RegExp("x", "gi");
    if (str.match(re_2)) {
        x_count = str.match(re_2).length;
    }

    if (o_count === x_count) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    XO: XO
}
