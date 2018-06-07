const defaultState = {
    data: 'default data'
};

/**
 * @function
 * @name HeaderReducer
 */
const HeaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_HEADER':
            return {
                ...state,
                data: 'new header'
            };

        case 'API_REQUEST': 
            return {
                ...state,
                data: 'loading'
            };

        case 'API_RESPONSE':
            return {
                ...state,
                data: 'got header'
            };

        case 'API_ERROR':
            return {
                ...state,
                data: 'error'
            };

        default:
            return {
                ...state,
            };
    }
}

export default HeaderReducer;