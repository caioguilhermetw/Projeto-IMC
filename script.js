
function calcular(){
    let nom = document.getElementById('nome').value;
    let ida = document.getElementById('idade').value;
    let pes = document.getElementById('peso').value;
    let altu= document.getElementById('alt').value;
    
    
 
    if(nom =="" || ida==0 || pes==0 || altu ==0 ){
        window.alert('[ERRO]Preencha os dados corretamente!')

    }else {
        let i = Number(ida)
        let p = Number (pes)
        let a = Number(altu)
        
        let imc = p/(a*a)

        if (imc<17 ){
            ris.innerHTML = `${nom} você tem ${i} anos e seu <strong>imc é de ${imc.toFixed(2)},<strong> você está com magreza grave`;
            document.body.style.background = '#eaf738';

        }else if(imc>=17 && imc<=18.5 ) {
            ris.innerHTML = `${nom} você tem ${i} e seu <strong>imc é de ${imc.toFixed(2)},</strong> você está com magreza leve`;
            document.body.style.background = '#eaf738';

        }else if(imc>=18.6 && imc<=24.9) {
            ris.innerHTML =`${nom} você tem ${i} anos e seu <strong>imc é de ${imc.toFixed(2)},</strong> você está com o peso normal (eutrofico)`;
            document.body.style.background = '#48f738';
        
        }else if(imc>=25 && imc<=29.9){
            ris.innerHTML =`${nom} você tem ${i} anos e seu <strong>imc é de ${imc.toFixed(2)},</strong> você está acima do peso`;
            document.body.style.background = '#fe9502';

        }else if(imc>=30 && imc<=34.9) {
            ris.innerHTML =`${nom} você tem ${i} anos e seu <strong>imc é de ${imc.toFixed(2)},</strong> você está com obesidade nível 1`;
            document.body.style.background = '#fe9502';

        }else if(imc>=35 && imc<=39.9) {
            ris.innerHTML =`${nom} você tem ${i} anos e seu <strong>imc é de ${imc.toFixed(2)},</strong> você está com obesidade nível 2`;
            document.body.style.background = '#f74e38';

        }else if (imc>=40) {
            ris.innerHTML =`${nom} você tem ${i} anos e seu <strong> imc é de ${imc.toFixed(2)},</strong> você está com obesidade morbida nível 3`;
            document.body.style.background = '#ff0000';
        }

    }
       
}









/*function calcular() { 
    let nom = document.getElementById('nome').value; 
    let ida = document.getElementById('idade').value; 
    let pes = document.getElementById('peso').value; 
    let altu = document.getElementById('alt').value; 
    let ris = document.getElementById('resultado'); 
   
    if (nom.length == 0 || ida.length == 0 || pes.length == 0 || altu.length == 0) { 
      window.alert('[ERRO] Preencha os dados corretamente!'); 
    } else { 
      let i = Number(ida); 
      let p = Number(pes); 
      let a = Number(altu); 
      let imc = p / (a * a); 
      if (imc < 17) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está com magreza grave; `
      } else if (imc >= 17 && imc <= 18.5) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está com magreza leve;` 
      } else if (imc > 18.5 && imc <= 24.9) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está com o peso normal (eutrófico);` 
      } else if (imc > 25 && imc <= 29.9) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está acima do peso;`
      } else if (imc > 30 && imc <= 34.9) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está com obesidade nível 1;`
      } else if (imc > 35 && imc <= 39.9) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está com obesidade nível 2;`
      } else if (imc >= 40) { 
        ris.innerHTML = `${nom}, você tem ${i} anos e seu IMC é de ${imc.toFixed(2)}, você está com obesidade mórbida nível 3;`
      } 
    } 
  }
  */
