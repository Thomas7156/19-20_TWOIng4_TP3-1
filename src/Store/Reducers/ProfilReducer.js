const initialState = {
  Gregoire: ["Gregoire", "Lenclud", "08/10/98", "/img/Gregoire.png", "0"],
  Leonard: ["Leonard", "Devincre", "13/03/98", "/img/Leonard.jpg", "0"],
  Thomas: ["Thomas", "Lemercier", "07/01/99", "/img/Thomas.png", "0"],
  Current: ["Gregoire", "Lenclud", "08/10/98", "/img/Gregoire.png", "0"]
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

////////////////////////////////////////
// Bonus pas encore fini///////////////
// //////////////////////////////////

// function setLike(state = initialState, action) {
//   let nextState;
//
//     nextState = {
//       ...state,
//       Current[4]+=1
//     }
//
//     return nextState || state
//}

// export default {setCurrent(), setLike()}
export default setCurrent
