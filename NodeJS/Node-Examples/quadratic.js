module.exports = (a, b, c, callback) => {
    var denta = (b * b) - (4 * a * c);
    if (a == 0 && b == 0 && c == 0) {
        setTimeout(() =>
            callback(new Error("Cac he so khong duoc = 0"), null),
            2000
        );
    }
    else if (a == 0) {
        setTimeout(() =>
            callback(new Error("a nen khac 0"), null),
            2000
        );
    }
    else if (denta < 0) {
        setTimeout(() =>
            callback( null,{
                kq1: "Phuong trinh vo nghiem"
            }),
            2000
        );
    } else if (denta = 0) {
        setTimeout(() =>
            callback(null, {
                kq1: (-b) / (a + a),
                kq2: (-b) / (a + a)
            }),
            2000
        );
    } else if (denta > 0) {
        setTimeout(() =>
            callback(null, {
                kq1: (-b) + (sqrt(denta)) / (a + a),
                kq2: (-b) - (sqrt(denta)) / (a + a)
            }),
            2000
        );
    }
}