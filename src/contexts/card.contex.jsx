import { createContext, useEffect, useState } from 'react';

const addCardItem = (cardItems, productToAdd) => {
  // find if cardItems contain productToAdd
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  // return new array with modified cardItems/ new card item
  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cardItems, cardItemToRemove) => {
  // find the card item to remove
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from the card.
  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== cardItemToRemove.id);
  }

  // return back cardItem with matching card item with reduced quantity
  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === cardItemToRemove.id
        ? { ...cardItem, quantity: cardItem.quantity - 1 }
        : cardItem
    );
  }
};

const clearCardItem = (cardItems, cardItemToClear) => {
  return cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);
};

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [cardTotal, setCardTotal] = useState(0);

  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCardCount(newCardCount);
  }, [cardItems]);
  useEffect(() => {
    const newCardTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );
    setCardTotal(newCardTotal);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const removeItemToCard = (cardItemToRemove) => {
    setCardItems(removeCardItem(cardItems, cardItemToRemove));
  };
  const clearItemFromCard = (cardItemToClear) => {
    setCardItems(clearCardItem(cardItems, cardItemToClear));
  };
  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCard,
    removeItemToCard,
    clearItemFromCard,
    cardItems,
    cardCount,
    cardTotal,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
