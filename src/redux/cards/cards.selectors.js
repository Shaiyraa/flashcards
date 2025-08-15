import { createSelector } from "reselect";

const selectCards = (state) => state.cards;

export const selectDeck = createSelector([selectCards], (cards) => cards.deck);

export const selectUnknownCards = createSelector([selectDeck], (deck) =>
  deck.filter((card) => !card.known)
);
