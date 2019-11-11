import Gregoire from '../../img/Gregoire.png'
import Leonard from '../../img/Leonard.jpg'
import Thomas from '../../img/Thomas.png'


const initialState = {
  'Gregoire': { firstName: 'Gregoire', lastName: 'Lenclud', birth: '08/10/98', tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.', img: Gregoire, like: 0 },
  'Leonard': { firstName: 'Leonard', lastName: 'Devincre', birth: '13/03/98', tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.', img: Leonard, like: 0 },
  'Thomas': { firstName: 'Thomas', lastName: 'Lemercier', birth: '07/01/99', tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.', img: Thomas, like: 0 },
  'Current': { firstName: 'Gregoire', lastName: 'Lenclud', birth: '08/10/98', tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.', img: Gregoire, like: 0 }
}

export default function setCurrent(state = initialState, action) {
  let nextState;

  switch (action.type) {

    case 'Gregoire':

    nextState = {
      ...state,
      Current: state.Gregoire
    }

    return nextState || state

    case 'Leonard':

    nextState = {
      ...state,
      Current: state.Leonard
    }

    return nextState || state

    case 'Thomas':

    nextState = {
      ...state,
      Current: state.Thomas
    }

    return nextState || state

    case 'INCREASE':

    nextState = {
      ...state,
      Current: state.Current.like+=1
    }

    return nextState || state

    case 'DECREASE':

    nextState = {
      ...state,
      Current: state.Leonard
    }

    return nextState || state

    default:
    return state
  }
}

////////////////////////////////////////////////////////////////////////
// Bonus en fonction séparé => marche pas /////////////////////////////
///////////////////////////////////////////////////////////////////////

// export function setLike(state = initialState, action) {
//   let nextState;
//
//   switch (action.type) {
//
//     case 'INCREASE':
//
//     nextState = {
//       ...state,
//       Current: state.Gregoire
//     }
//
//     return nextState || state
//
//     case 'DECREASE':
//
//     nextState = {
//       ...state,
//       Current: state.Leonard
//     }
//
//     return nextState || state
//
//     default:
//     return state
//   }
// }

// export default {setCurrent, setLike}
