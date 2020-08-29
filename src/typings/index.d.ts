type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;
type IGameStatus = "not-started" | "in-progress" | "won" | "game-over";

interface IGoodEvilDiceValues {
  goodDice1: number;
  goodDice2: number;
  evilDice1: number;
  evilDice2: number;
}

interface IReducerState extends IGoodEvilDiceValues {
  gameStatus: IGameStatus;
  goodHealth: number;
  evilHealth: number;
  turnOutcomeForGood: number;
  turnCount: number;
}

interface IReducerAction {
  payload?: any;
  type: string;
}

interface I_DieResult {
  dieResult: number;
}

interface I_GameStatus {
  gameStatus: IGameStatus;
}
