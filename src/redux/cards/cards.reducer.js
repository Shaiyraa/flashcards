import CardsActionTypes from "./cards.types";
import questions from "../../data/questions.json";

const INITIAL_STATE = {
  deck: questions,

  error: null,
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsActionTypes.MARK_CARD_AS_KNOWN:
      return {
        ...state,
        deck: state.deck.map((card) =>
          card.id === action.payload ? { ...card, known: true } : card
        ),
      };
    default:
      return state;
  }
};

export default cardsReducer;
