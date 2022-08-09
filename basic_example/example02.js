function plus(p1, p2){
    return p1 + p2;
}

console.log(plus(3, 9));
//이 위와 같은 형식은 잘 안 쓸 예정

//arrow 함수
const arrowPlus = (p1, p2) => {
    return p1 + p2;
};

console.log(arrowPlus(3,9));

//prac01 : Arrow Func으로 minus 기능, mul 곱하기 기능, div 나누기 기능을 구현

const arrowMin = (p1, p2) => {
    return p1 - p2;
};
console.log(arrowMin(9,3));

const arrowMul = (p1, p2) => {
    return p1 * p2;
};
console.log(arrowMul(3,9));

const arrowDiv = (p1, p2) => {
    return p1/p2;
};
console.log(arrowDiv(9,3));