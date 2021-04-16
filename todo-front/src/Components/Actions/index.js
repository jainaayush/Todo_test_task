import {DELETE_TODO,UPDATE_TODO,ADD_TODO,SHOW_TODO} from './types'


export const Add = (data) => ({
    type: ADD_TODO,
    payload: data,
})

export const Remove = (id) => ({
    type: DELETE_TODO,
    payload:id
})

export const Update = (data) => ({
    type: UPDATE_TODO,
    payload:data
})

export const Show = (data) => ({
    type: SHOW_TODO,
    payload:data
})
