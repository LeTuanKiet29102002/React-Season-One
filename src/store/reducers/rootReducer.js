const initState={
    users:[
        {id :1, name: 'Kimoon'},
        {id :2, name: 'LiMoon'},
    ]
}

const rootReducer=(state=initState,action)=>{
    return state;
}

export default rootReducer;