const initialState = {
   loading: false,
   messages: []
};

export const messageReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_MESSAGE":
         state = {
            ...state,
            messages: [...state.messages, action.payload]
         }
         break;
      case "DELETE_MESSAGE":
         state = {
            ...state,
            messages: state.messages.filter(m => m.id != action.payload)
         }
         break;
   }
   return state;
}