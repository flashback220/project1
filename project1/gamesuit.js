

// pilihan komputer

function getPilihanKomputer (){
    var comp = Math.random();

    if( comp <= 0.33 ) return  'kertas';
    if( comp > 0.33 && comp < 0.67) return  'batu';
    return  'gunting';
    
}
// aturan bermain
function getHasil (comp, player){
        
    if( player == comp ) return  'SERI!';
    if( player == 'kertas' ) return  ( comp == 'batu' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'batu' ) return ( comp == 'kertas' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
     
}
        



//membuat DOM event untuk player yang memilih kertas


// var pKertas = document.querySelector('.kertas')
// pKertas.addEventListener('click',function(){
//     var pilihanKomputer = getPilihanKomputer()
//     var pilihanPlayer   = pKertas.className  // nama class nya sama dengan img
//     var hasil = getHasil (pilihanKomputer,pilihanPlayer) // masukan ke parameter

//     var imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src',  pilihanKomputer +'.jpg') // manipulasi attributnya

//     console.log('comp : ' + pilihanKomputer)
//     console.log('player: '+ pilihanPlayer)
//     console.log('hasil : ' + hasil)
    
//     var info = document.querySelector('.info')
//     info.innerHTML = hasil
// })




// untuk animasi memutar pilihan komputer
function putar (){
    var imgKomputer = document.querySelector('.img-komputer')
    var gambar = ['kertas','gunting','batu']
    var x = 0
    var waktuMulai = new Date().getTime()    // method untuk mengambil waktu saat di klik
    setInterval(function(){    // fungsi setInterval untuk melakukan sesuatu secara berulang selama waktu tertentu
        if(new Date().getTime()- waktuMulai>1000){    // selisih saat di klik  sampai 1 detik  , clearinterval untuk mematikan
            clearInterval
            return   
        }
        imgKomputer.setAttribute('src' , gambar[x++]+'.jpg') // x increment  , jpg . ektensi file nya
        if (x==gambar.length) {   // jika gambar sampai pada gambar.length
            x = 0
        }
    },100) // 100 = 0.1 detik ganti2 gambar
}





// untuk tidak mengulang menulis code tombol player  yang sudah di buat di atas . lakukan loop

var pilihan = document.querySelectorAll('li img')

pilihan.forEach(function(i){     // untuk setiap image dalam var pilihan , i = parameter image
    // console.log(i)
    i.addEventListener('click',function(){     // hanya mengambil gambar yang di klik
    var pilihanKomputer = getPilihanKomputer()
    var pilihanPlayer   = i.className
    var hasil = getHasil (pilihanKomputer,pilihanPlayer) // masukan ke parameter
    
    putar()  // lakukan setelah fungsi putar beres

    setTimeout(function(){                  // method  ketika fungsi putar jalan selama 1 detik lakukan function
    var imgKomputer = document.querySelector('.img-komputer')
    imgKomputer.setAttribute('src',  pilihanKomputer +'.jpg')

    console.log('comp : ' + pilihanKomputer)
    console.log('player: '+ pilihanPlayer)
    console.log('hasil : ' + hasil)
    
    var info = document.querySelector('.info')
    info.innerHTML = hasil

    },1000)  // 1 detik
    
   
    })
})



