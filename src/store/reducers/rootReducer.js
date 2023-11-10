import { toast } from 'react-toastify';


const initState = {
    users: [
        { id: 1, name: 'Kimoon', address: 'Moon' },
        { id: 2, name: 'LiMoon', address: 'ThanhHoa' },
        { id: 3, name: 'Kim Jong Un', address: 'Trieu Tien' },
    ],
    posts: [],
    EditRedux: {}
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER_REDUX':
            console.log('run into delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            toast.success('Delete successfully!')
            return {
                ...state, users
            };
        case 'ADD_USER_REDUX':
            let id = Math.floor(Math.random() * 1000);
            let user = { id: id, name: `Random  user ${id}`, address: `Random address ${id}` };
            toast.success('Add successfully!')
            return {
                ...state, users: [...state.users, user]
            };
        case 'EDIT_USER_REDUX':
            return {
                ...state,
                EditRedux: action.payload
            };

        case 'UPDATE_EDIT_REDUX':
            return {
                ...state,
                EditRedux: action.payload
            };
        case 'SAVE_USER_REDUX':
            let updatedUsers = state.users.map(user => {
                if (user.id === state.EditRedux.id) {
                    toast.success('Save successfully!')
                    return state.EditRedux;
                }
                return user;
            });
            return {
                ...state,
                users: updatedUsers,
                EditRedux: {} // Clear EditRedux after saving
            };
        default:
            return state;
    }

}


export default rootReducer;