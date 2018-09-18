
const reducer = (state, action) =>{
    switch (action.type) {
        case 'EmpData':
            state = action.payload;
            break;
    }

    return state;
};