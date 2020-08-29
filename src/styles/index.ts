import styled, { css } from "styled-components";

import { HEALTH_SCORE_BOUNDARIES } from "../config";

const HEALTH_COLORS = {
  HEALTHY: "green",
  NEUTRAL: "orange",
  UNHEALTHY: "red"
};

export const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  > * {
    margin-bottom: 1rem;
  }
`;

export const StyledButton = styled.button(({ gameStatus }: I_GameStatus) => {
  const background: string =
    gameStatus === "game-over"
      ? HEALTH_COLORS.UNHEALTHY
      : gameStatus === "won"
      ? HEALTH_COLORS.HEALTHY
      : "lightGrey";

  return css`
    font-size: 150%;
    outline: none;
    width: 22rem;
    cursor: pointer;
    height: 6rem;
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    background: ${background};

    &:hover {
      opacity: 75%;
    }
  `;
});

export const StyledDieResult = styled.div(({ dieResult }: I_DieResult) => {
  const size: string = "2.5rem";

  const background: string =
    dieResult > 0
      ? HEALTH_COLORS.HEALTHY
      : dieResult === 0
      ? HEALTH_COLORS.NEUTRAL
      : HEALTH_COLORS.UNHEALTHY;

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${background};
    border-radius: 50%;
    height: ${size};
    width: ${size};
  `;
});

export const PlayersContainer = styled.div`
  margin: 10px;

  display: grid;
  grid-template-areas: "col1 col2";

  > * {
    text-align: center;
  }

  > *:not(:first-child) {
    margin-left: 5rem;
  }
`;

const iconSize: string = "5rem";
export const PlayerContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: ${iconSize};
    height: ${iconSize};
  }

  > * {
    margin-bottom: 2rem;
  }
`;

export const DiceContainer = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: 2rem;
  }
`;

interface IStyledDie {
  size: "big" | "small";
}
export const StyledDie = styled.div(({ size }: IStyledDie) => {
  const dieSize: string = size === "big" ? "3rem" : "2rem";
  const fontSize: string = size === "big" ? "150%" : "100%";

  return css`
    font-size: ${fontSize};
    display: flex;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    background: lightGrey;
    height: ${dieSize};
    width: ${dieSize};
  `;
});

interface IScoreContainer {
  healthScore: number;
}
export const ScoreContainer = styled.div(({ healthScore }: IScoreContainer) => {
  const background: string =
    healthScore > HEALTH_SCORE_BOUNDARIES.HEALTHY_NEUTRAL
      ? HEALTH_COLORS.HEALTHY
      : healthScore > HEALTH_SCORE_BOUNDARIES.NEUTRAL_UNHEALTHY
      ? HEALTH_COLORS.NEUTRAL
      : HEALTH_COLORS.UNHEALTHY;
  const scoreIconSize: string = "6rem";

  return css`
    background: ${background};

    border-radius: 50%;
    font-size: 200%;
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${scoreIconSize};
    width: ${scoreIconSize};

    color: white;
  `;
});
