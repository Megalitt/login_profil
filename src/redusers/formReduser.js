const SET_VALIDATION = "SET_VALIDATION";
// const SET_REMOVE_MODAL = "SET_REMOVE_MODAL";


const defaultState = {
  username: 'Admin',
  password: '12345',
  validation: '0',
};

export default function formReduser(state = defaultState, action) {
  
  switch (action.type) {
    case SET_VALIDATION:
      return {
        ...state,
        validation: action.payload,
      }
      default:
       return state;
  }
};

export const setValidation = (payload) => ({type: SET_VALIDATION, payload});
// export const setModal = () => ({type: SET_MODAL});

