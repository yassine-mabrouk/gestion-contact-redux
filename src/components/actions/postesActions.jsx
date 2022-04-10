import axios from "axios"

export const getPostes =()=> dispatch =>  {
     axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(res => {
               console.log(res.data)
               dispatch({
                   type: 'GET_POSTES',
                   payload: res.data 
               })
           })
           .catch(err => console.log ("cannot get Postes !"))
  
}
export const addPoste =(poste)=> dispatch =>  {
    axios.poste('https://jsonplaceholder.typicode.com/posts', poste)
          .then(res => {
              console.log(res.data)
              dispatch({
                  type: 'ADD_POSTE',
                  payload: res.data 
              })
          })
          .catch(err => console.log ("cannot add Poste !"))
 
}

export const deletePoste =(id)=> {
    return {
        type : 'DELETE_POSTE',
        payload : id 
    }
}
