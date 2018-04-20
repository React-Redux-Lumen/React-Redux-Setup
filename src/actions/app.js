export function setState(state) {
    return {
      type: 'SET_STATE',
      state
    };
  }
  
  export function clearState() {
    return {
      type: 'CLEAR_STATE'
    };
  }
  
  export function setError(data) {
    return {
      type: 'SET_ERROR',
      data: 'Unable to connect with the server. Check your internet connection and try again.'
    };
  }
  
  export function clearError() {
    return {
      type: 'CLEAR_ERROR'
    };
  }
  
  export function notify(data) {
    return {
      type: 'SET_NOTIFICATION',
      data
    };
  }
  