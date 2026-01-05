export function celciusFarenheit(masukanCelcius){
    if(typeof masukanCelcius !== "number"){
        throw new Error("Input harus berupa Number!");
    }
    try{
        const res = (masukanCelcius * (9/5)) + 32;
        return res; 
    }
    catch(err){
        console.log(`Terjadi kesalahan: ${err.message}`);
    }
}