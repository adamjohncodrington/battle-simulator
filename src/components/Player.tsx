import React, { FC } from "react";

import { PlayerContainer } from "../styles";

import { DieResult } from "./DieResult";
import { HealthScore } from "./HealthScore";
import { TwoDice } from "./TwoDice";

interface IPlayer {
  good: boolean;
  dieResult: number;
  healthScore: number;
  diceValues: number[];
  title: string;
  SvgIcon: ISvgIcon;
}

export const Player: FC<IPlayer> = ({
  good,
  title,
  SvgIcon,
  dieResult,
  diceValues,
  healthScore
}) => {
  const fullTitle: string = `${title} (${good ? "good" : "evil"})`;
  return (
    <PlayerContainer>
      <h2>{fullTitle}</h2>
      <SvgIcon />

      <TwoDice diceValues={diceValues} />

      <DieResult dieResult={dieResult} />

      <HealthScore score={healthScore} />
    </PlayerContainer>
  );
};
