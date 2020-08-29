import React, { useContext, FC } from "react";

import { GameStatusContext } from "../context";
import { StyledDieResult } from "../styles";

export const DieResult: FC<I_DieResult> = ({ dieResult }) => {
  const gameStatus: IGameStatus = useContext(GameStatusContext);

  const stringToDisplay: string =
    dieResult >= 0 ? `+${dieResult}` : dieResult.toString();

  return (
    <StyledDieResult dieResult={dieResult}>
      {gameStatus === "in-progress" && stringToDisplay}
    </StyledDieResult>
  );
};
