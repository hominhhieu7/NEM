var rect = require('./rectangle');
var quadratic = require('./quadratic');
// var rect = {
//     perimeter = (x, y) => (2 * (x + y)),
//     area = (x, y) => (x * y)
// };
function solveRect(l, b) {
    console.log("Solving for rectangle with l= " + l + " and b= " + b);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message)
        }
        else {
            console.log("The area of the rectangle of dimensions l= " + l + "and b= " + b + " is: " + rectangle.area);
            console.log("The area of the rectangle of dimensions l= " + l + "and b= " + b + " is: " + rectangle.perimeter);
        }
    });
    console.log("This is statment is after the call rect()");
    // if (l <= 0 || b <= 0) {
    //     console.log("Rectangle dimensions should be greater than zero: l =" + l + ", b=" + b);
    // }
    // else {
    //     console.log("The area of the rectangle is: " + rect.area(l, b));
    //     console.log("The perimeter of the rectangle is: " + rect.perimeter(l, b));
    // }
}
function solveQua(a, b, c) {
    console.log("Solving for quadratic with a= " + a + ", b= " + b + " c= " + c);
    quadratic(a, b, c, (err, quadratic) => {
        if (err) {
            console.log("Error: ", err.message)
        }
        else {
            if (quadratic.kq1 == quadratic.kq2)
                console.log("voi a = " + a + ", b= " + b + ", c= " + c + " thi phuong trinh co 1 nghiem x1 = x2 =" + quadratic.kq1)
            else
                console.log("voi a = " + a + ", b= " + b + ", c= " + c + " thi phuong trinh co 2 nghiem x1 = " + quadratic.kq1 + ", x2 = " + quadratic.kq2);
        }
    });
}
//solveQua(2, -7, 3);
//solveQua(3, 2, 5);
// solveQua(1, -8, 16);
solveQua(2, 3, 1); 
// solveQua(3, 5, 2);