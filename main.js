window.addEventListener('keydown',(event)=>{
  let aaudio = new Audio('assest_A_clap.wav');
  let saudio = new Audio('assest_S_hithat.wav');
  let daudio =new Audio('assest_D_kick.wav');
  let faudio = new Audio('assest_F_openhat.wav');
  let gaudio = new Audio('assest_G_boom.wav');
  let haudio = new Audio('assest_H_ride.wav');
  let jaudio = new Audio('assest_J_snare.wav');
  let kaudio =new Audio('assest_K_tom.wav');
  let laudio = new Audio('assest_L_tink.wav');
  laudio.play();
  
  switch(event.key){
    case 'a':
      aaudio.play();
      break;
      
       case 's':
       saudio.play();
       break;
       
        case 'd':
        daudio.play();
        break;
        
         case 'f':
         faudio.play();
         break;
         
          case 'g':
          gaudio.play();
          break;
          
           case 'h':
           haudio.play();
           break;
           
            case 'j':
            jaudio.play();
            break;
            
             case 'k':
             kaudio.play();
             break;
             
              case 'l':
              laudio.play();
              break;
  }
});