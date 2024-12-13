// context/reducer.jsx

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
  };
  
  // Initial state of authentication
  const initialState = {
    user: null,           // User object (null if not authenticated)
    isAuthenticated: false, // Boolean flag to track authentication state
  };
  
  // Reducer function to handle actions
  export const authReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.LOGIN:
        // When user logs in, set the user and authentication flag
        return {
          ...state,
          user: action.payload,   // Payload contains user data
          isAuthenticated: true,  // Set authenticated flag to true
        };
  
      case actionTypes.LOGOUT:
        // When user logs out, reset user and set authenticated flag to false
        return {
          ...state,
          user: null,             // Clear user data
          isAuthenticated: false, // Set authenticated flag to false
        };
  
      default:
        return state;  // Return the current state if no action matches
    }
  };
  
  // Export initial state for reference
  export const getInitialState = () => initialState;
  
  