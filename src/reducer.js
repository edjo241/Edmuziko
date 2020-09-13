export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:'BQAj3bFxswDrzg8lgOJlziodVKcgUBmMhkNCiDPQaLVACD4SmzpYRnFN2l0l856WTEO4wmLcbIwGLu_MA15hL2QxoRFKsLApjQJKfA-iLbhhvS8Y5lEtYUYfT1f2CbsdqCwQ3xP3tejpMgTtQhb-ik-kqaTM8fQ'  
}
const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };

            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token
                }
                case 'SET_PLAYLISTS':
                    return{
                        ...state,
                        playlists:action.playlists
                    }
                    case 'SET_DISCOVER_WEEKLY':
                        return{
                            ...state,
                            discover_weekly:action.discover_weekly
                        }
            default:
    }
}
export default reducer