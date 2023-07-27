
function typeRosto(nome, num) {
    if (num === 1) {
        return (`             
        =====             
      =========           
    ==[OO]==[OO]==        
   ===============        
   ====[ :{} ]====        
    =============         
      =========           
        =====             
  ${nome} esta Com Fome      
`)
    }else if (num === 2) {
        return (`             
        =====              
      =========            
    ==[!]===[!]==          
   ===============         
   =====[ :( ]=====        
    =============          
      =========            
        =====              
    ${nome} esta Triste       
`)
    }else if (num === 3) {
        return (`              
        =====               
      =========             
    ==[--]==[--]==          
   ===============          
   ====[     ]====          
    =============           
      =========             
        =====               
  ${nome} esta Com Sono        
`)
    }else if (num === 4) {
        return (`                        
        =====               
      =========             
    ===[]===[]===           
   ===============          
   =====[ :) ]=====         
    =============           
      =========             
        =====               
    ${nome} esta Feliz         
`)
    }
    if (num === 5) {
        return (`                  
        =====               
      =========             
    ===XX===XX===           
   ===============          
   =====.....=====          
    =============           
      =========             
        =====               
    ${nome} este Morto         
`)
    }
}



function verStatus(nome, fome, sono, felicidade) {
    if (fome < 50) {
        const rosto = typeRosto(nome, 1)
        return rosto
    }
    else if (felicidade < 50) {
        const rosto = typeRosto(nome, 2)
        return rosto
    }
    else if (sono < 50) {
        const rosto = typeRosto(nome, 3)
        return rosto
    }
    else if (fome < 15 || sono < 5) {
        const rosto = typeRosto(nome, 5)
        return rosto
    }
    else {
        const rosto = typeRosto(nome, 4)
        return rosto
    }
}

module.exports = verStatus