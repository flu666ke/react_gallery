
const initialState = {
    name: 'App'
}


export default function (state = initialState, action) {
    console.log('REDUCER APP', action);
    return state;
}