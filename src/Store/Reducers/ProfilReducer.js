import Gregoire from '../../img/Gregoire.png'
import Leonard from '../../img/Leonard.jpg'
import Thomas from '../../img/Thomas.png'


const initialState = {
  Gregoire: ["Gregoire", "Lenclud", "08/10/98", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.", Gregoire, 0],
  Leonard: ["Leonard", "Devincre", "13/03/98","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.", Leonard, 0],
  Thomas: ["Thomas", "Lemercier", "07/01/99","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.", Thomas, 0],
  Current: ["Gregoire", "Lenclud", "08/10/98","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non enim elit. Suspendisse eget nisi fringilla, suscipit odio convallis, aliquet risus.", Gregoire, 0]
}

function setCurrent(state = initialState, action) {
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

    default:
    return state
  }
}

//////////////////////////////////////
// Bonus /////////////////////////////
/////////////////////////////////////

// function setLike(state = initialState, action) {
//   let nextState;
//
//   switch (action.type) {
//
//     case 'Gregoire':
//
//     nextState = {
//       ...state,
//       Current: state.Gregoire
//     }
//
//     return nextState || state
//
//     case 'Leonard':
//
//     nextState = {
//       ...state,
//       Current: state.Leonard
//     }
//
//     return nextState || state
//
//     case 'Thomas':
//
//     nextState = {
//       ...state,
//       Current: state.Thomas
//     }
//
//     return nextState || state
//
//     default:
//     return state
//   }
// }

// export default {setCurrent, setLike}
export default setCurrent
