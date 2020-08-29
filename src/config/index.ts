export const BUTTON_TEXT = {
  NOT_STARTED: "roll the dice to attack and start game",
  IN_PROGRESS: "roll the dice to attack again",
  GAME_OVER: "GAME OVER! click to play again",
  WON: "YOU WIN! click to play again"
};

const INITIAL_HEALTH_SCORE: number = 10;

export const HEALTH_SCORE_BOUNDARIES = {
  HEALTHY_NEUTRAL: INITIAL_HEALTH_SCORE > 50 ? 50 : 10,
  NEUTRAL_UNHEALTHY: INITIAL_HEALTH_SCORE > 50 ? 10 : 5
};

export const INITIAL_GAME_STATE: IReducerState = {
  gameStatus: "not-started",
  goodHealth: INITIAL_HEALTH_SCORE,
  evilHealth: INITIAL_HEALTH_SCORE,
  goodDice1: 0,
  goodDice2: 0,
  evilDice1: 0,
  evilDice2: 0,
  turnOutcomeForGood: 0,
  turnCount: 0
};
