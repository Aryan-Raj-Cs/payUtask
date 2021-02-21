export const USER_STATE = {
  loading: false,
  historyData: [],
  user: {},
  back: false,
};

const Reducers = (state = USER_STATE, action) => {
  switch (action.type) {
    case "HISTORY":
      for (let i = 0; i < state.historyData.length; i++) {
        if (state.historyData[i].user === action.value.user) {
          state.historyData[i] = action.value;
          return {
            ...state,
            back: true,
          };
        }
      }
      return {
        ...state,
        historyData: [...state.historyData, action.value],
        back: true,
      };

    case "BACK":
      return {
        ...state,
        back: false,
      };

    case "LOADSTART":
      return {
        ...state,
        loading: true,
      };

    case "LOADEND":
      return {
        ...state,
        loading: false,
      };

    case "TRUEBACK":
      return {
        ...state,
        back: true,
      };

    default:
      return state;
  }
};

export default Reducers;
