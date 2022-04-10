
const initialState = {
    postes : [

    ]
}

export default function (state=initialState, action){
    switch (action.type){
        case 'GET_POSTES': return {
            ...state,
            postes: action.payload
        }
        case 'DELETE_POSTE' : return {
            ...state ,
            postes : state.postes.filter(p => p.id !==action.payload)
        }
        case 'ADD_POSTE' : return {
            ...state ,
              postes : [action.payload, ...state.postes]
        }
        default : return state;
    }
}