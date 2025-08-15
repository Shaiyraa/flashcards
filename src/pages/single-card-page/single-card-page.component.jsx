import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUnknownCards } from "../../redux/cards/cards.selectors";
import { markCardAsKnown } from "../../redux/cards/cards.actions";

import {
  SingleCardContainer,
  SingleCardNav,
  Icon,
  Card,
  CardTitle,
  CardAnswer,
  CardIcons,
  CardIcon,
  NoCards,
} from "./single-card-page.styles";
import {
  faArrowLeft,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const SingleCardPage = ({ unknownCards, markCardAsKnown }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1); // Navigate back to the previous page

  // I want the cards to flip when one of the answers is clicked.
  // When red icon is clicked, it should move on to the next index of card (or fist, if this one was the last one)
  // When the green icon is clicked, it should mark the card as known (removing it from the unknownCards array) and go to the next index of card (or the first if this one was the last one)
  // When the last card is clicked, I want the card index to reset to 0
  const handleRed = () => {
    setIsFlipped(false);
    if (unknownCards.length === 0) return;
    setCurrentCardIndex((prevIndex) =>
      prevIndex + 1 < unknownCards.length ? prevIndex + 1 : 0
    );
  };
  const handleGreen = () => {
    setIsFlipped(false);
    if (unknownCards.length === 0) return;
    const currentCard = unknownCards[currentCardIndex];
    markCardAsKnown(currentCard.id);
    // After marking as known, the unknownCards array will update, so reset index if needed
    setCurrentCardIndex((prevIndex) =>
      prevIndex + 1 < unknownCards.length ? prevIndex : 0
    );
  };

  return (
    <SingleCardContainer>
      <SingleCardNav>
        <Icon onClick={handleBackClick} icon={faArrowLeft} />
        <div>
          {unknownCards.length
            ? `${currentCardIndex + 1}/${unknownCards.length}`
            : "0/0"}
        </div>
      </SingleCardNav>
      {unknownCards[currentCardIndex] && unknownCards.length ? (
        <Card onClick={() => setIsFlipped(!isFlipped)}>
          {isFlipped ? (
            <>
              <CardAnswer>{unknownCards[currentCardIndex].answer}</CardAnswer>
              <CardIcons>
                <CardIcon color="red" icon={faTimes} onClick={handleRed} />
                <CardIcon color="green" icon={faCheck} onClick={handleGreen} />
              </CardIcons>
            </>
          ) : (
            <CardTitle>{unknownCards[currentCardIndex].title}</CardTitle>
          )}
        </Card>
      ) : (
        <NoCards>No cards available</NoCards>
      )}
    </SingleCardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  unknownCards: selectUnknownCards,
});

const mapDispatchToProps = (dispatch) => ({
  markCardAsKnown: (cardId) => dispatch(markCardAsKnown(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCardPage);
