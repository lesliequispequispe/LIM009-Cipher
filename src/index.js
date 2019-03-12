
const encode = document.getElementById("encode");

const descifrar = document.getElementById("descifrar");

const text = document.getElementById("mensaje");

const displace = document.getElementById("displace");


encode.addEventListener("click",() => {

document.getElementById("result").innerHTML=cipher.encode(displace.value, text.value);

})

descifrar.addEventListener("click", () =>{
//console.log(decode);
document.getElementById("result").innerHTML=cipher.decode(displace.value, text.value);

})
