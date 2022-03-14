// bài 1
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// bài 2
var soThich = ["bóng đá ","bóng chuyền"]
// bài 3 
console.log(arr);
// bài 4
console.log(soThich);
// bài 5
soThich.push("cầu lông","bơi lội")
console.log(soThich);
// bài 6
soThich[1] = "BÓNG CHUYỀN"
console.log(soThich)
// bài 7
soThich.splice(1, 2)
console.log(soThich)
// bài 8
function getLessThan(n){
    let mang=[]
    for(let i=0 ; i<n; i++){
        mang.push(i)
    }
    return mang ;
}
// bài 9
// console.log(getLessThan(10));

// bài 10
function getOddlessThan(n){
    let mang =[];
    for(let i =0 ;i<n ;i++){
        if(i%2 != 0){
            mang.push(i)
        }
    }
    return mang;
}
// bài11
console.log(getOddlessThan(10));