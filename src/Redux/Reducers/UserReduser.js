const data = {
    userName : "",
    
}
const UserReducer = (state = data, action) => {
    switch (action.type) {
        case "name":
            return {
                ...state,
                userName : action.payload
            };
            
    
        default:
            return state
    }
}

export default UserReducer