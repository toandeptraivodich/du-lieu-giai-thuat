  
// bài 1
function tong(a,b){
    return a+b;
}

function hieu(a,b){
    return a-b;
}
// bài 2
let tongHaiSo = tong(2,2);
console.log("tong hai số là " + tongHaiSo)

let hieuHaiSo = hieu(2,2);  
console.log("hiệu hai số là " + hieuHaiSo);

// bài 3
function tich(a,b){
    return a*b;
}

// bài 4
let n1 = 6 
let n2 = 2
let hienthi = tich(n1,n2);
console.log("tích hai số là " + hienthi)

// bài 5
function thuong(a,b){
    return a/b;
}
// bài 6
let thuongHaiSo = thuong(4,0);
console.log("thương hai số là " + thuongHaiSo);

// bài 7
let thuongHaiSo1 = thuong(0,4);
console.log("thương hai số là " + thuongHaiSo1);

// bài 8
function binhPhuong(a){
    return a*a;
}

// bài 9
let binhPhuongn1 = binhPhuong(n1)
console.log("bình phương n1 là " + binhPhuongn1)

let binhPhuongn2 = binhPhuong(n2)
console.log("bình phương n2 là " + binhPhuongn2)

// bài 10

function max(a,b){
    if(a >b){
        console.log(a + " là số lớn nhất")
    }else{
        console.log(b + " là số lớn nhất ")
    }
}

// bài 11
max(n1,n2)

// bài 12
function min(a,b){
    if(a < b){
        console.log(a + " là số bé nhất")
    }else{
        console.log(b + " là số bé nhất ")
    }
}

// bài 13
min(n1,n2)

// bài 14
function trungBinhCong(a,b){
    return (a+b)/2;
}

// bài 15
let tbc = trungBinhCong(n1,n2)
console.log("trung binh cộng n1 và n2 là " + tbc)

// bài 16
function chiaLayDu(a,b){
    return a % b ;
}

// bài 17
let cld = chiaLayDu(n1,n2)
console.log("n1 chia n2 lấy phần dư là " + cld)

// bài 18
let cld1 = chiaLayDu(n2,n1)
console.log("n2 chia n1 lấy phần dư là " + cld1)

// bài 19
function KiemTra(a,b){
    if(a % b == 0){
        console.log(a + " chia hết cho " + b)
    }
    else{
        console.log(a + " không chia hết cho " + b)

    }
}

// bài 20
KiemTra(n1,n2)

// bài 21
KiemTra(n2,n1)

// bài 22
function chuViHCN(a,b){
    return (a+b)*2;
}

// bài 23
function dienTichHCN(a,b){
    return a*b;
}

// bài 24
console.log("chi vi hình chữ nhật à " + chuViHCN(n1,n2))
console.log("diện tích hình chữ nhật là " + dienTichHCN(n1,n2))

// bài 25

function chuVichHT(r ){
    return  2 * 3.14 *  r;
}
// bài 26
function dienTichHT(r ,pi){
    return 3.14 * ( r * r) ;
}

// bài 27
console.log("chu vi hình tròn có bán kính n1 = "+ n1 + " là " + chuVichHT(n1));
console.log("chu vi hình tròn có bán kính n2 = "+ n2 + " là " + chuVichHT(n2));

// bài 28 
console.log("diện tích hình tròn có bán kính n1 = "+ n1 + " là " + dienTichHT(n1));
console.log("diện tích hình tròn có bán kính n2 = "+ n2 + " là " + dienTichHT(n2));









