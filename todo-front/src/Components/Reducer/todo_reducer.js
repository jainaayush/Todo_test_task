const initial = {
    Allrecord: []
}
const TodoReducer = (state = initial, action) => {
    switch (action.type) {
        case "ADD_TODO":{
            return { ...state, 
                Allrecord: [...state.Allrecord, action.payload]
            }
        }
        case "DELETE_TODO":{           
            return { ...state, 
                Allrecord: [...state.Allrecord.filter((todo)=>todo._id  !== action.payload)]
            }
        }
        case "UPDATE_TODO":{
            return { ...state, 
                Allrecord: [...state.Allrecord.filter((todo)=>todo._id  !== action.payload.id),action.payload]
            }
        }
        case "SHOW_TODO":{
            return { ...state, 
                Allrecord: action.payload
            }
        }

        default:
            return state


    }
};
export default TodoReducer;