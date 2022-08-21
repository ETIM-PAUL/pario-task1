export function formReducer(state, { type, payload }) {
  switch (type) {
    case "setStep": {
      return {
        ...state,
        currentStep: payload,
      };
    }
    case "setPlaylists": {
      return {
        ...state,
        enteredData: { ...state.enteredData, payload },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
