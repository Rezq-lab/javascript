

let penumpang= ["Budi", undefined,  "Joni" , "Doni"];

let addPenumpang = function (namaPenumpang, penumpang) {
    
    if (penumpang.length == 0) {
        
        penumpang.push(namaPenumpang);

        return penumpang;
    }else{

        for (let index = 0; index < penumpang.length; index++) {
            
            if (penumpang[index] == undefined) {
                
                penumpang[index] = namaPenumpang;

                return penumpang;
            }else if(penumpang[index] == namaPenumpang){
                console.log(namaPenumpang + ' Sudah Berada dalam Angkot');
            }else if( index == penumpang.length -1){
                penumpang.push(namaPenumpang);

                return penumpang;
            }
        }
    }
}

var delPenumpang = function (namaPenumpang, penumpang) {
    
    if(penumpang.length == 0 ){
        console.log('Angkot masih kosong');

        return penumpang;
    }else{

        for (let index = 0; index < penumpang.length; index++) {
            if(penumpang[index] == namaPenumpang){
                penumpang[index] == undefined;

                return penumpang;
            }else if(index == penumpang.length - 1 ){
                console.log('Penumpang tidak ada');
                return penumpang;
            }
            
        }
    }
}
    
