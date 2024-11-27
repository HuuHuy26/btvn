/**function  checkAge(){
    if(age >= 18){
        console.log("Người lớn");
    }else{
        console.log("Vị thành niên");
    }
}
checkAge();*/

/**function checkEvenOdd(){
    if(a % 2 == 0){
        console.log("Số Chẵn");
    }else{
        console.log("số lẻ");
    }
}
checkEvenOdd();*/

/**function compareNumbers(){
     if(a > b){
        
console.log("số thứ nhất lớn hơn số thứ 2");
    }else if(a < b){
        
         console.log("số thứ 2 lớn hơn số thứ nhất");
     }else{
         console.log("hai số bằng nhau");
     }
 }
 compareNumbers();*/

/** function checkInteger(){
    if(a >= 0 || a < 0 ){
        console.log("số này là số nguyên");
     }
    else{
         console.log("số này không phải số nguyên");
     }
          }
 checkInteger(a=-6);*/ 

/**function convertNumberToMonth(){
    if (monthNumber === 1) {
         console.log("Tháng 1"); 
        } else if (monthNumber === 2) { 
            console.log("Tháng 2");
         } else if (monthNumber === 3) { 
            console.log("Tháng 3");
        } else if (monthNumber === 4) { 
            console.log("Tháng 4");
         } else if (monthNumber === 5) {
             console.log("Tháng 5");
             } else if (monthNumber === 6) { 
                console.log("Tháng 6");
             } else if (monthNumber === 7) { 
                console.log("Tháng 7"); 
            } else if (monthNumber === 8) { 
                console.log("Tháng 8"); 
            } else if (monthNumber === 9) { 
                console.log("Tháng 9"); 
            } else if (monthNumber === 10) { 
                console.log("Tháng 10"); 
            } else if (monthNumber === 11) { 
                console.log("Tháng 11"); 
            } else if (monthNumber === 12) { 
                console.log("Tháng 12"); 
            } else {
                console.log("Số không hợp lệ!!!");
            }
}
convertNumberToMonth();*/

/**function calculateShipping(a){
const phicodinh = 7000; 
const sotienthem = 2000;
 const quangdgcodinh = 5; 
if (a <= quangdgcodinh) { 
    console.log(phicodinh); 

    } else { 
        let sotienship = phicodinh + (a - quangdgcodinh) * sotienthem;
         console.log(sotienship);
}
}
calculateShipping(3)*/

function gradeExam(score) { 
    if (score >= 90) {
     console.log("Xuất sắc"); 
    } else if (score >= 80) { 
        console.log("Giỏi");
     } else if (score >= 70) { 
        console.log("Khá"); 
    } else if (score >= 60) { 
        console.log("Trung bình"); 

} else { console.log("Yếu"); }
 }
 gradeExam();
