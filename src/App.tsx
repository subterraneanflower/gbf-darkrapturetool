import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import { luciliusRaid } from './data/lucilius';
import { EnemyTable } from './components/EnemyTable';

const appCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(43, 44, 53);
  font-size: 0.7em;
`;

const phaseNameCss = css`
  color: white;
  font-size: 2em;
  text-align: center;
  padding: 1em 0;
`;

const phaseNameInnerCss = css`
  background-color: var(--brand-color);
  padding: 0.5em 2em;
  border-radius: 3px;
`;

const enemyInfoCss = css`
  flex: 1;
  display: flex;
  justify-content: space-around;
  height: 100%;
  padding: 1em;
  overflow-x: auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: stretch;
  }
`;

const enemyTableCss = css`
  position: relative;
  flex: 1;
  margin: 1em 2em;
  height: max-content;
`;

const navbarCss = css`
  display: flex;
  justify-content: space-between;
  background-color: var(--brand-color);
  padding: 0.8em;
`;

const navButtonCss = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;

  flex: 1;
  display: block;
  background-color: white;
  border: none;
  color: var(--brand-color);
  font-size: 1.2em;
  padding: 0.5em 0;
  max-width: 40%;
  cursor: pointer;
`;

const navSpacerCss = css`
  flex: 1;
`;

export const App = () => {
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const phase = luciliusRaid.phases[phaseIndex] || luciliusRaid.phases[0];
  const prevPhase = luciliusRaid.phases[phaseIndex - 1];
  const nextPhase = luciliusRaid.phases[phaseIndex + 1];

  const enemyTables = phase.enemies.map((enemy, index) => (
    <EnemyTable key={`enemy-${index}-${phase.name}-${enemy.name}`} enemyData={enemy} css={enemyTableCss} />
  ));

  const gotoPrevPhase = useCallback(() => {
    setPhaseIndex(phaseIndex - 1);
  }, [phaseIndex, setPhaseIndex]);

  const gotoNextPhase = useCallback(() => {
    setPhaseIndex(phaseIndex + 1);
  }, [phaseIndex, setPhaseIndex]);

  return (
    <div css={appCss}>
      <div css={phaseNameCss}>
        <span css={phaseNameInnerCss}>{phase.name}</span>
      </div>
      <div css={enemyInfoCss}>{enemyTables}</div>
      <div css={navbarCss}>
        {prevPhase ? (
          <button css={navButtonCss} onClick={gotoPrevPhase}>
            前：{prevPhase.name}
          </button>
        ) : (
          <div css={navSpacerCss} />
        )}
        {nextPhase ? (
          <button css={navButtonCss} onClick={gotoNextPhase}>
            次：{nextPhase.name}
          </button>
        ) : (
          <div css={navSpacerCss} />
        )}
      </div>
    </div>
  );
};
