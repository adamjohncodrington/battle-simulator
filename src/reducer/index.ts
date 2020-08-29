import { ACTIONS } from "../constants";
import { INITIAL_GAME_STATE } from "../config";
import { generateDiceValues } from "../utils";

export const reducer = (
  state: IReducerState,
  action: IReducerAction
): IReducerState => {
  const {
    goodHealth: currentGoodHealth,
    evilHealth: currentEvilHealth,
    turnCount: currentTurnCount
  } = state;

  switch (action.type) {
    case ACTIONS.ROLL_THE_DICE:
      const newDiceValues = generateDiceValues();
      const { goodDice1, goodDice2, evilDice1, evilDice2 } = newDiceValues;
      const totalGoodRollScore: number = goodDice1 + goodDice2;
      const totalEvilRollScore: number = evilDice1 + evilDice2;
      const turnOutcomeForGood: number =
        totalGoodRollScore - totalEvilRollScore;

      const newGoodHealth: number = currentGoodHealth + turnOutcomeForGood;
      const newEvilHealth: number = currentEvilHealth - turnOutcomeForGood;

      const newGameStatus: IGameStatus =
        newGoodHealth <= 0
          ? "game-over"
          : newEvilHealth <= 0
          ? "won"
          : "in-progress";

      return {
        ...state,
        ...newDiceValues,
        goodHealth: newGoodHealth,
        evilHealth: newEvilHealth,
        gameStatus: newGameStatus,
        turnCount: currentTurnCount + 1,
        turnOutcomeForGood
      };

    case ACTIONS.RESET_GAME:
      return INITIAL_GAME_STATE;

    default:
      return state;
  }
};
