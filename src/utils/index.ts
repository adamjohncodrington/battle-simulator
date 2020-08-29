import { BUTTON_TEXT } from "../config";

export const getDiceRollValue = (): number => 1 + Math.floor(Math.random() * 6);

export const generateDiceValues = (): IGoodEvilDiceValues => ({
  goodDice1: getDiceRollValue(),
  goodDice2: getDiceRollValue(),
  evilDice1: getDiceRollValue(),
  evilDice2: getDiceRollValue()
});

export const getButtonText = (gameStatus: IGameStatus): string =>
  gameStatus === "in-progress"
    ? BUTTON_TEXT.IN_PROGRESS
    : gameStatus === "won"
    ? BUTTON_TEXT.WON
    : gameStatus === "game-over"
    ? BUTTON_TEXT.GAME_OVER
    : gameStatus === "not-started"
    ? BUTTON_TEXT.NOT_STARTED
    : "";

export const getFormalGameStatusText = (gameStatus: IGameStatus): string => {
  switch (gameStatus) {
    case "won":
      return "WON";
    case "not-started":
      return "not started";
    case "in-progress":
      return "in progress";
    case "game-over":
      return "GAME OVER";
  }
};
