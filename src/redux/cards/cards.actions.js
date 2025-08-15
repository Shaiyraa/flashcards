import CardsActionTypes from "./cards.types";

export const markCardAsKnown = (cardId) => ({
  type: CardsActionTypes.MARK_CARD_AS_KNOWN,
  payload: cardId,
});
