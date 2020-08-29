import React, { useReducer, FC } from "react";

import { ACTIONS } from "../constants";
import { GameStatusContext } from "../context";
import { INITIAL_GAME_STATE } from "../config";
import { reducer } from "../reducer";
import { SVG } from "../resources";
import { AppShell, StyledButton, PlayersContainer } from "../styles";
import { getButtonText, getFormalGameStatusText } from "../utils";

import { Player } from "./Player";

export const Game: FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_GAME_STATE);

  const {
    gameStatus,
    turnOutcomeForGood,
    goodDice1,
    goodDice2,
    goodHealth,
    evilDice1,
    evilDice2,
    evilHealth,
    turnCount
  } = state;

  const onClick = (): void => {
    if (gameStatus === "not-started" || gameStatus === "in-progress")
      dispatch({ type: ACTIONS.ROLL_THE_DICE });
    if (gameStatus === "won" || gameStatus === "game-over")
      dispatch({ type: ACTIONS.RESET_GAME });
  };

  return (
    <GameStatusContext.Provider value={gameStatus}>
      <AppShell>
        <h1>battle simulator</h1>

        <PlayersContainer>
          <Player
            good={true}
            dieResult={turnOutcomeForGood}
            title="unicorn"
            SvgIcon={SVG.Unicorn}
            diceValues={[goodDice1, goodDice2]}
            healthScore={goodHealth}
          />
          <Player
            good={false}
            dieResult={-turnOutcomeForGood}
            title="dragons"
            diceValues={[evilDice1, evilDice2]}
            SvgIcon={SVG.Dragon}
            healthScore={evilHealth}
          />
        </PlayersContainer>

        <div>game status: {getFormalGameStatusText(gameStatus)}</div>
        <StyledButton gameStatus={gameStatus} onClick={onClick}>
          {getButtonText(gameStatus)}
        </StyledButton>
        {gameStatus !== "not-started" && <div>turns played: {turnCount}</div>}
      </AppShell>
    </GameStatusContext.Provider>
  );
};
