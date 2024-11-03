//Loop
{
let k = 5;  // k soni
let n = 3;  // n soni (n > 0)

for (let i = 0; i < n; i++) {  // n marta aylanish
    console.log(k);
}
// bu yerda for sikli orqali n martta aylanish qilayotganda va har safar k chiqaradi.

}                             
//For2

{
let start = 2; 
let end = 6;  //(start < end)

for (let i = start; i <= end; i++) {  // star va end ni ham chiqarish uchun i <= end
    console.log(i);
}
// bu yerda for sikli orqali start dan end gacha har bir butun son chiqadi.

}
//For3
{
    let start = 2; 
    let end = 6;  // (start < end)
    
    for (let i = end; i >= start; i--) {  // end dan start ga qadar kamayib ketadi
        console.log(i);
    }
    //  end dan start ga qadar kamayib,  butun sonni chiqariladi.
    
}

//For4
{
    let price = 5000;  // 1 kg shkalat narxi

for (let kg = 1; kg <= 10; kg++) {  // 1 kg dan 10 kg gacha
    console.log(`${kg} kg shkalat narxi: ${price * kg}`);
}
// har safar kg ga kopaytirib natijani chiqaramiz.

}

//For5

{
    let price = 5000;  //  1 kg shkalt narxi

for (let kg = 1; kg <= 9; kg++) {  // 0.1 kg dan 0.9 kg gacha
    console.log(`${kg / 10} kg shkalat narxi: ${price * (kg / 10)}`);
}
//  1kg bolamiz 10 qilib 0.1 kg dan 0.9 kg gacha natijalarni chiqaramiz.

}

//For6
{
    let price = 5000;  //1 kg shkalat narxi

    for (let kg = 12; kg <= 20; kg += 2) {  // 1.2 kg dan 2 kg gacha, har 0.2 kg
    console.log(`${kg / 10} kg shklat narxi: ${price * (kg / 10)}`);
}
//  1kg bolamiz 10 qilib 1.2 kg dan 2 kg gacha, har 0.2 kg oshganda natijani chiqaramiz.

}

//For7
{
    let start = 2; 
    let end = 6;  
    let sum = 0;
    
    for (let i = start; i <= end; i++) {  // start dan endgacha
        sum += i;
    }
    console.log("Yig'indi:", sum);
    // start dan end gacha har bir butun sonni yig'ib yig`indi yani sumga    ga qo'shamiz.
        
}

//For8
{
    let start = 2;
    let end = 6;  
    let product = 1;
    
    for (let i = start; i <= end; i++) { 
        product *= i;
    }
    console.log("Ko'paytma:", product);
    //  start dan end gacha har bir butun sonni ko'paytirib product ga yig`iladi.
    
}

//For9
{
    let start = 2;
    let end = 6;  
    let sum = 0;
    
    for (let i = start; i <= end; i++) {  
        sum += i * i;  // har bir sonning kvadratini qo'shiladia
    }
    console.log("Kvadratlar yig'indisi:", sum);
    // har bir sonning kvadratini olib sum ga qo'shialdi
    
}

//For10 
{
    let n = 5; 
    let S = 0;
    
    for (let i = 1; i <= n; i++) {  // 1 dan n gacha
        S += 1 / i;
    }
    console.log("Yig'indisi S:", S);
    // har aylanib kelhanida 1ni iga bolib ni qo'shib S ga qoshib boramiz boriladi
    
}