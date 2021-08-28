function menghitungTinggiBadan(){
    const namaSiswa = "romeo";
    const tinggiBadan = 190;
    const katagori1 =180;
    const katagori2 = 160;
    if (tinggiBadan >= katagori1){
        console.log(`tinggi badan ${namaSiswa} ${tinggiBadan} Cm dikatagorikan TINGGI`)
    } else if(tinggiBadan < katagori1 && tinggiBadan > katagori2){
        console.log(`tinggi badan ${namaSiswa} ${tinggiBadan} Cm Maka dikatagorikan SEDANG`)
    } else{
        console.log(`Tinggi Badan ${namaSiswa} ${tinggiBadan} Cm Maka dikatagorikan PENDEK`)
    }
}

menghitungTinggiBadan()