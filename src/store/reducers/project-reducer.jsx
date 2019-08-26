

const initialState = {
    projects: [
        {id: '1', title: 'help me wow', content: 'lores ipsum'},
        {id: '2', title: 'collect all the stars', content: 'lores ipsum'},
        {id: '3', title: 'egg hunt with yoshi', content: 'lores ipsum'}
    ]
}


const projectReducer = (state = initialState, action) => {

    switch (action.type){
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error:  ', action.err)
            return state;
        default: 
            return state;
    }

}


export default projectReducer;