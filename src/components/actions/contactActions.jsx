import axios from "axios"

 
export const getContacts = ()=> async dispatch => {
         
    try{
      const res= await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: 'GET_CONTACTS',
        payload : res.data 
      })
    } catch(err){
      console.log("cannot get Contacts")
    }
  
     }
  
export const deleteContat = (id)=>  dispatch => {
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          dispatch({
            type: 'DELETE_CONTACT',
            payload : id 
          })
        })
        .catch(err => console.log("connot delete contact "))

    }
    export const getContact = (id)=>  dispatch => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
              dispatch({
                type: 'GET_CONTACT',
                payload : res.data
              })
            })
            .catch(err => console.log("connot get contact "))
            
        }  
    export const editContat = (contact,id)=>  dispatch => {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,contact)
            .then(res => {
              dispatch({
                type: 'EDIT_CONTACT',
                payload : res.data
              })
            })
    
        }
        
    
export const addContact = (contact)=>async dispatch =>  {
  const res= await axios.post('https://jsonplaceholder.typicode.com/users',contact);
        dispatch (     {
          type: 'ADD_CONTACT',
          payload :res.data 
        })
 }

     