const initialState = {
    homefetchdata: null,
    homefetchError: null,
    homefetchLoading: false,
    
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'FETCHLIST_LOADING':
      return {
        ...state,
        homefetchLoading: true,

      };
    case 'FETCHLIST_SUCCESS':
      return {
        ...state,
        homefetchdata: payload,
        homefetchLoading: false,
        homefetchError:null

      };
    case 'FETCHLIST_ERROR':
      return {
        ...state,
        homefetchdata: null,
        homefetchLoading: false,
        homefetchError:payload
      };

   
    default:
      return state;
  }
};
