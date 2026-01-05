import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

import { celciusFarenheit } from "./fitur/celciusFarenheit.js";
import { celciusKelvin } from "./fitur/celciusKelvin.js";
import { celciusReamur } from "./fitur/celciusReamur.js";

const rl = createInterface({ input, output });

try{
    const masukanSuhu = await rl.question("Masukan suhu dalam Celcius: ")
    const celcius = Number(masukanSuhu)
    
    if(isNaN(celcius)){
        console.log("Input tidak valid! Input harus angka")
    }
    else{
        console.log("Hasil Konversi: ")
        console.log(`Farenheit: ${celciusFarenheit(celcius)}`)
        console.log(`Kelvin: ${celciusKelvin(celcius)}`)
        console.log(`Reamur: ${celciusReamur(celcius)}`)
    }
}finally{
    rl.close()
}
