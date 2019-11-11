export const cart = (data) =>{
     console.log(data)
     return (
          {
               type:'Add_to_Cart',
               payload:data
          }
     )
}