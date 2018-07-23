import * as types from '../Constants/ActionTypes'
export const getAllItem = (todoList)=>{return  { type: types.ALLLIST,todoList}};
export const addItem = (item)=>{return  { type: types.ADD,item }};
export const checkItem = (item,status)=>{return  { type: types.CHECK,item,status}};
export const changeStatus = (status,todoList)=>{return  { type: types.STATUS,status,todoList }};
export const editItemContent = (item)=>{return  { type: types.EDIT,item }};



