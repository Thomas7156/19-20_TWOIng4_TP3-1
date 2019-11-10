const initialState = {
  Gregoire: Array(5).fill("Gregoire", "Lenclud", "08/10/98", "/img/Gregoire.png", "0"),
  Leonard: Array(5).fill("Leonard", "Devincre", "13/03/98", "/img/Leonard.jpg", "0"),
  Thomas: Array(5).fill("Thomas", "Lemercier", "07/01/99", "/img/Thomas.png", "0"),
  Current: Array(5).fill("Gregoire", "Lenclud", "08/10/98", "/img/Gregoire.png", "0")
}

function setCurrent(state = initialState, action) {
  let nextState;

  switch (action.type) {

    case 'Gregoire':

    nextState = {
      ...state,
      Current: state.Gregoire
    }

    return nextState || state.Current

    case 'Leonard':

    nextState = {
      ...state,
      Current: state.Leonard
    }

    return nextState || state.Current

    case 'Thomas':

    nextState = {
      ...state,
      Current: state.Thomas
    }

    return nextState || state.Current

    default:
    return state.Current
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
