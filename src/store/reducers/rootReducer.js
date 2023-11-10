const initState = {
    users: [
        { id: 1, name: 'Kimoon' },
        { id: 2, name: 'LiMoon' },
        { id: 3, name: 'Kim Jong Un' },
    ],
    posts:[]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER_REDUX':
            console.log('run into delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state,users
            };
        case 'ADD_USER_REDUX':
            let id = Math.floor(Math.random()*1000);
            let user = {id:id, name :`Random  user ${id}`};
            return {
                ...state,users:[...state.users,user]
            };
        default:
            return state;
    }

}


export default rootReducer;