export function celciusReamur(masukanCelcius){
    if(typeof masukanCelcius !== "number"){
        throw new Error("Input harus berupa Number!");
    }
    try{
        const res = masukanCelcius + 273.15;
        return res; 
    }
    catch(err){
        console.log(`Terjadi kesalahan: ${err.message}`);
    }
}