import React, { FC } from "react";

import { ScoreContainer } from "../styles";

interface IHealthScore {
  score: number;
}

export const HealthScore: FC<IHealthScore> = ({ score }) => {
  return <ScoreContainer healthScore={score}>{score}</ScoreContainer>;
};
