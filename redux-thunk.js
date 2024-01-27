

// constants 
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCES";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

// states  
const initialTodosStore ={
      todos:[],
      isLoading:false,
      error: null,
};

// actions 
const getTodosRequest =()=>{
      return {
            type:GET_TODOS_REQUEST,
      }
}
const getTodosFailed =(error)=>{
      return {
            type: GET_TODOS_REQUEST,
            payload:error,
      }
}
const getTodosSuccess=(todos)=>{
      return {
            type:GET_TODOS_SUCCESS,
            payload: todos,
      }
}