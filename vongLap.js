// bài 1
function showMessage(message,n) {
    for(var i =0 ;i <= n ;i++) {
        console.log(i + " " + message)
    }
}

// bài 2
showMessage("Hôm nay trời đẹp quá",10)

// bài 3
var tong = 0 ;
function tongN(n){
    for(var i =1 ;i <= n ;i++) {
       tong = tong +i;
     }
     return tong;
}

// bài 4
console.log("tổng của số là " + tongN(100))
console.log("tổng của n số là " + tongN(500))

// bài 5
var tong1 =0 ;
function tongKhoang(i,n){
    for(j = i ; j <= n ; j++){
        tong1 = tong1 + j;
    }
    return tong1;
}

// bài 6
console.log("tổng của số là " + tongKhoang(1,100))
console.log("tổng của số là " + tongKhoang(20,76))

// bài 7
var tong2 =0 ;
function tongKhoangle(i,n){
    for(j = i ; j <= n ; j++){
        if(j %2 != 0){
             tong2 = tong2 + j;
        }
    }
    return tong2;
}

// bài 8
console.log("tổng của số là " + tongKhoangle(1,100))
console.log("tổng của số là " + tongKhoangle(20,76))

// bài 9
var dem =0;
function demn(a,n){
    for(j=0 ; j <= a ; j++){
        if(j %2 != 0){
            dem = dem +1
            if(dem <=n){
                console.log(j)
            }
        }
    }  
}

// bài 10
// demn(1000,100)

// bài 11
var dem =0;
function demNM(a,n,m){
    for(j=n ; j <= m ; j++){
        if(j %2 != 0){
            dem = dem +1
            if(dem <=a){
                console.log(j)
            }
        }
    }  
}

// bài 12
// demNM(57,1005,10000)

// bài 13 
function soNT(n){
    var flag = true;
    if(n<2){
       flag = false;
    }else{
        for(var i =2 ;i < n-1;i++){
            if(n % i ==0){
                flag = false;   
                break;
            }
        }
    }
    if(flag == true){
        console.log(n + " là số nguyên tố")
    }
    else{
        console.log(n + " không phải là số nguyên tố")
    }
   
}
soNT(49)

// bài 14
var demi =0;
function soNTnho(d){
    for(var n =0 ;n <=1000 ;n++){
        var flag = true;
        if(n<2){
           flag = false;
        }else{
            for(var i =2 ;i < n-1;i++){
                if(n % i ==0){
                    flag = false;   
                    break;
                }
            }
        }
        if(flag == true){
            demi = demi + 1;
           if(demi <= d){
               console.log(n)
           }
       
        }
       

    }
   
}
// bài 15 
// soNTnho(20)

// bài 16
var demt =0;
function soNT1(m,d){
    for(var n =m ;n <=10000 ;n++){
        var flag = true;
        if(n<2){
           flag = false;
        }else{
            for(var i =2 ;i < n-1;i++){
                if(n % i ==0){
                    flag = false;   
                    break;
                }
            }
        }
        if(flag == true){
            demt = demt + 1;
           if(demt <= d){
               console.log(n)
           }
       
        }
       

    }
   
}

//bai 17
soNT1(1000,20)





