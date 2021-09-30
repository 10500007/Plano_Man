     ////////////////////-----COLUNA 1 --------/////////////////
     var n0c1 = document.querySelector('.col_1__lin_2').textContent
     var n1c1 = document.querySelector('.col_1__lin_3').textContent
     var n2c1 = document.querySelector('.col_1__lin_4').textContent
     var n3c1 = document.querySelector('.col_1__lin_5').textContent
     var n4c1 = document.querySelector('.col_1__lin_6').textContent
 
 
     var array_c1 = [n1c1,n2c1,n3c1,n4c1];
     
     var maior_c1 = Math.max.apply(null, array_c1);
     var menor_c1 = Math.min.apply(null, array_c1);
     console.log(maior_c1);
     console.log(menor_c1);
 
 //-----------------------------//
 if(maior_c1 == menor_c1){
    document.querySelector('.col_1__lin_2').classList.add('igual');
    }else{

            if(n1c1 == maior_c1){
            document.querySelector('.col_1__lin_3').classList.add('maior');
    
            }else if(n2c1 == maior_c1){
            document.querySelector('.col_1__lin_4').classList.add('maior')  
    
            }else if(n3c1 == maior_c1){
            document.querySelector('.col_1__lin_5').classList.add('maior')
    
            }else if(n4c1 == maior_c1){
            document.querySelector('.col_1__lin_6').classList.add('maior')
    
            }
    
            //-----------------------------//
            if (n1c1 == menor_c1){
            document.querySelector('.col_1__lin_3').classList.add('menor')  
    
            }else if(n2c1 == menor_c1){
            document.querySelector('.col_1__lin_4').classList.add('menor')  
    
            }else if(n3c1 == menor_c1){
            document.querySelector('.col_1__lin_5').classList.add('menor')
    
            }else if(n4c1 == menor_c1){
            document.querySelector('.col_1__lin_6').classList.add('menor')
    
            }
   }


 ////////////////////-----COLUNA 2 --------/////////////////
     var n0c2 = document.querySelector('.col_2__lin_2').textContent
     var n1c2 = document.querySelector('.col_2__lin_3').textContent
     var n2c2 = document.querySelector('.col_2__lin_4').textContent
     var n3c2 = document.querySelector('.col_2__lin_5').textContent
     var n4c2 = document.querySelector('.col_2__lin_6').textContent
 
 
     var array_c2 = [n1c2,n2c2,n3c2,n4c2];
     
     var maior_c2 = Math.max.apply(null, array_c2);
     var menor_c2 = Math.min.apply(null, array_c2);
     console.log(maior_c2);
     console.log(menor_c2);
 
 //-----------------------------//
 if(maior_c2 == menor_c2){
    document.querySelector('.col_2__lin_2').classList.add('igual');
    }else{

            if(n1c2 == maior_c2){
            document.querySelector('.col_2__lin_3').classList.add('maior');
    
            }else if(n2c2 == maior_c2){
            document.querySelector('.col_2__lin_4').classList.add('maior')  
    
            }else if(n3c2 == maior_c2){
            document.querySelector('.col_2__lin_5').classList.add('maior')
    
            }else if(n4c2 == maior_c2){
            document.querySelector('.col_2__lin_6').classList.add('maior')
    
            }
    
            //-----------------------------//
            if (n1c2 == menor_c2){
            document.querySelector('.col_2__lin_3').classList.add('menor')  
    
            }else if(n2c2 == menor_c2){
            document.querySelector('.col_2__lin_4').classList.add('menor')  
    
            }else if(n3c2 == menor_c2){
            document.querySelector('.col_2__lin_5').classList.add('menor')
    
            }else if(n4c2 == menor_c2){
            document.querySelector('.col_2__lin_6').classList.add('menor')
    
            }
   }    
    

 //----------------------------------------------------------------------------//
    
    ////////////////////-----COLUNA 3 --------/////////////////
    var n0c3 = document.querySelector('.col_3__lin_2').textContent
    var n1c3 = document.querySelector('.col_3__lin_3').textContent
    var n2c3 = document.querySelector('.col_3__lin_4').textContent
    var n3c3 = document.querySelector('.col_3__lin_5').textContent
    var n4c3 = document.querySelector('.col_3__lin_6').textContent


    var array_c3 = [n1c3,n2c3,n3c3,n4c3];
    
    var maior_c3 = Math.max.apply(null, array_c3);
    var menor_c3 = Math.min.apply(null, array_c3);
    console.log(maior_c3);
    console.log(menor_c3);

//-----------------------------//
if(maior_c3 == menor_c3){
document.querySelector('.col_3__lin_2').classList.add('igual');
}else{
        if(n1c3 == maior_c3){
          document.querySelector('.col_3__lin_3').classList.add('maior');

        }else if(n2c3 == maior_c3){
          document.querySelector('.col_3__lin_4').classList.add('maior')  

        }else if(n3c3 == maior_c3){
          document.querySelector('.col_3__lin_5').classList.add('maior')

        }else if(n4c3 == maior_c3){
          document.querySelector('.col_3__lin_6').classList.add('maior')

        }

  //-----------------------------//
  if (n1c3 == menor_c3){
          document.querySelector('.col_3__lin_3').classList.add('menor')  

        }else if(n2c3 == menor_c3){
          document.querySelector('.col_3__lin_4').classList.add('menor')  

        }else if(n3c3 == menor_c3){
          document.querySelector('.col_3__lin_5').classList.add('menor')

        }else if(n4c3 == menor_c3){
          document.querySelector('.col_3__lin_6').classList.add('menor')

        }
  }



//----------------------------------------------------------------------------//

        ////////////////////-----COLUNA 4 --------/////////////////
    var n1c4 = document.querySelector('.col_4__lin_3').textContent
    var n2c4 = document.querySelector('.col_4__lin_4').textContent
    var n3c4 = document.querySelector('.col_4__lin_5').textContent
    var n4c4 = document.querySelector('.col_4__lin_6').textContent


    var array_c4 = [n1c4,n2c4,n3c4,n4c4];

    var maior_c4 = Math.max.apply(null, array_c4);
    var menor_c4 = Math.min.apply(null, array_c4);
    
//-----------------------------//
    if (n1c4 == maior_c4){
      document.querySelector('.col_4__lin_3').classList.add('maior')  

    }else if(n2c4 == maior_c4){
      document.querySelector('.col_4__lin_4').classList.add('maior')  

    }else if(n3c4 == maior_c4){
      document.querySelector('.col_4__lin_5').classList.add('maior')

    }else if(n4c4 == maior_c4){
      document.querySelector('.col_4__lin_6').classList.add('maior')

    }

//-----------------------------//
if (n1c4 == menor_c4){
      document.querySelector('.col_4__lin_3').classList.add('menor')  

    }else if(n2c4 == menor_c4){
      document.querySelector('.col_4__lin_4').classList.add('menor')  

    }else if(n3c4 == menor_c4){
      document.querySelector('.col_4__lin_5').classList.add('menor')

    }else if(n4c4 == menor_c4){
      document.querySelector('.col_4__lin_6').classList.add('menor')

    }
//----------------------------------------------------------------------------//

  ////////////////////-----COLUNA 5 --------/////////////////
  var n1c5 = document.querySelector('.col_5__lin_3').textContent
  var n2c5 = document.querySelector('.col_5__lin_4').textContent
  var n3c5 = document.querySelector('.col_5__lin_5').textContent
  var n4c5 = document.querySelector('.col_5__lin_6').textContent


  var array_c5 = [n1c5,n2c5,n3c5,n4c5];

  var maior_c5 = Math.max.apply(null, array_c5);
  var menor_c5 = Math.min.apply(null, array_c5);
  
//-----------------------------//
  if (n1c5 == maior_c5){
    document.querySelector('.col_5__lin_3').classList.add('maior')  

  }else if(n2c5 == maior_c5){
    document.querySelector('.col_5__lin_4').classList.add('maior')  

  }else if(n3c5 == maior_c5){
    document.querySelector('.col_5__lin_5').classList.add('maior')

  }else if(n4c5 == maior_c5){
    document.querySelector('.col_5__lin_6').classList.add('maior')

  }

//-----------------------------//
if (n1c5 == menor_c5){
    document.querySelector('.col_5__lin_3').classList.add('menor')  

  }else if(n2c5 == menor_c5){
    document.querySelector('.col_5__lin_4').classList.add('menor')  

  }else if(n3c5 == menor_c5){
    document.querySelector('.col_5__lin_5').classList.add('menor')

  }else if(n4c5 == menor_c5){
    document.querySelector('.col_5__lin_6').classList.add('menor')

  }


  //--------------------------------------------------//