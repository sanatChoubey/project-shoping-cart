
export default function (state= null , {type, payload}){
     switch(type){
          case 'Add_to_Cart':
               return state?[...state,payload]:[payload]
          default : return state     
     }
}