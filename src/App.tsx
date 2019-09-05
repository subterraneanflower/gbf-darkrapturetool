import { useState, useCallback, useRef } from 'react';
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

const headerCss = css`
  position: relative;
  color: white;
  text-align: center;
  margin-top: 1em;
  height: 3em;
`;

const phaseNameCss = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 1px solid var(--brand-color);
  border-radius: 3px;
  font-size: 1em;
  padding: 0.5em 2em;
  width: max-content;
`;

const noteButtonCss = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;

  position: absolute;
  right: 2rem;
  top: 0;
  display: block;
  background-color: var(--brand-color);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1em;
  padding: 0.5em 1em;
  max-width: 40%;
  cursor: pointer;
  user-select: none;
`;

const noteAreaCss = css`
  display: block;
  height: 8em;
  padding: 1em;
  margin: 1em 3em;
  resize: vertical;
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
  border-radius: 3px;
  color: var(--brand-color);
  font-size: 1.2em;
  padding: 0.5em 0;
  max-width: 40%;
  cursor: pointer;
  user-select: none;
`;

const navSpacerCss = css`
  flex: 1;
`;

export const App = () => {
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [showsNote, setShowsNote] = useState<boolean>(false);

  const noteAreaRef = useRef<HTMLTextAreaElement>(null);
  const savedNote = sessionStorage.getItem('darkrapturetool/usernote');

  const phase = luciliusRaid.phases[phaseIndex] || luciliusRaid.phases[0];
  const prevPhase = luciliusRaid.phases[phaseIndex - 1];
  const nextPhase = luciliusRaid.phases[phaseIndex + 1];

  const enemyTables = phase.enemies.map((enemy, index) => (
    <EnemyTable key={`enemy-${index}-${phase.name}-${enemy.name}`} enemyData={enemy} css={enemyTableCss} />
  ));

  const toggleShowsNote = useCallback(() => {
    setShowsNote(!showsNote);
  }, [showsNote, setShowsNote]);

  const onNoteInput = useCallback(() => {
    const noteArea = noteAreaRef.current;
    if (noteArea && sessionStorage) {
      sessionStorage.setItem('darkrapturetool/usernote', noteArea.value);
    }
  }, [noteAreaRef.current]);

  const gotoPrevPhase = useCallback(() => {
    setPhaseIndex(phaseIndex - 1);
  }, [phaseIndex, setPhaseIndex]);

  const gotoNextPhase = useCallback(() => {
    setPhaseIndex(phaseIndex + 1);
  }, [phaseIndex, setPhaseIndex]);

  return (
    <div css={appCss}>
      <div css={headerCss}>
        <span css={phaseNameCss}>{phase.name}</span>
        <button css={noteButtonCss} onClick={toggleShowsNote}>
          メモ欄
        </button>
      </div>
      {showsNote ? (
        <textarea
          css={noteAreaCss}
          placeholder="ここに自由にメモを書けます（ブラウザのタブを閉じると消えます）"
          defaultValue={savedNote ? savedNote : ''}
          onInput={onNoteInput}
          ref={noteAreaRef}
        />
      ) : null}
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
