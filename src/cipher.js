/* creando el objeto global cipher,  window.cipher */


window.cipher = {

  encode: (offset, string) => {
  let codificar = "";
  let offsetNumero = parseInt(offset,10);
  
  for (let i = 0; i < string.length; i++){
  //console.log(string[i]);
  //string.charCodeAt(0);
  //console.log(string.charCodeAt(0));
  //console.log(string.charCodeAt(i));
  let valorAssci = string.charCodeAt(i);
  
   codificar += String.fromCharCode((valorAssci- 65 + offsetNumero) % 26 + 65);
  
  
  }
  return (codificar);
  
  },
  
  decode: (offset, string) => {
      let decodificar = "";
      let offsetNumero2 = parseInt(offset,10);
      
      for (let i = 0; i < string.length; i++){
      //console.log(string[i]);
      //string.charCodeAt(0);
      //console.log(string.charCodeAt(0));
      
      //console.log(string.charCodeAt(i));
      let valorAssci2 = string.charCodeAt(i);
      
       decodificar += String.fromCharCode((valorAssci2- offsetNumero2+ 65) % 26 + 65);
      
      
      }
      return (decodificar);
      
  }
  }
