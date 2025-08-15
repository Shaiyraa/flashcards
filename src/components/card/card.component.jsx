import { useState } from "react";
import {
  CardContainer,
  CardTitle,
  CardAnswer,
  Icons,
  Icon,
} from "./card.styles";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import {
  markCardAsKnown,
  setCurrentCardIndex,
} from "../../redux/cards/cards.actions";

const Card = ({ card, markCardAsKnown }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  if (!card) return null; // Handle case where card is not provided

  const markAsKnown = () => markCardAsKnown(card.id);
  const flipCard = () => {
    setCurrentCardIndex();
    setIsFlipped(false); // Toggle card flip state
  };

  return (
    <CardContainer onClick={() => setIsFlipped(true)}>
      {isFlipped ? (
        <>
          <CardAnswer>{card.answer}</CardAnswer>
          <Icons>
            <Icon color="red" icon={faTimes} onClick={flipCard} />
            <Icon color="green" icon={faCheck} onClick={markAsKnown} />
          </Icons>
        </>
      ) : (
        <CardTitle>{card.title}</CardTitle>
      )}
    </CardContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  markCardAsKnown: (cardId) => dispatch(markCardAsKnown(cardId)),
  setCurrentCardIndex: (cardIndex) => dispatch(setCurrentCardIndex(cardIndex)),
});

export default connect(null, mapDispatchToProps)(Card);
