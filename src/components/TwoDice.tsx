import React, { useContext, FC } from "react";

import { GameStatusContext } from "../context";
import { DiceContainer, StyledDie } from "../styles";

interface ITwoDice {
  diceValues: number[];
}

export const TwoDice: FC<ITwoDice> = ({ diceValues }) => {
  const gameStatus: IGameStatus = useContext(GameStatusContext);
  const gameInProgress: boolean = gameStatus !== "not-started";

  return (
    <>
      <DiceContainer>
        <StyledDie size="big">{gameInProgress && diceValues[0]}</StyledDie>
        <StyledDie size="big">{gameInProgress && diceValues[1]}</StyledDie>
      </DiceContainer>

      <StyledDie size="small">
        {gameInProgress && diceValues[0] + diceValues[1]}
      </StyledDie>
    </>
  );
};
