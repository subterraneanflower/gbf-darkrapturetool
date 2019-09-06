import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { GbfEnemy } from '../data/gbf_enemy_data';

export interface EnemyTableProps {
  enemyData: GbfEnemy;
  mode: string;
}

const enemyNameCss = css`
  position: sticky;
  top: -1em;
  background-color: var(--brand-color);
  color: white;
  font-size: 1.3em;
  text-align: center;
  padding: 0.3em 0;
`;

const enemyContentCss = css`
  display: flex;
  background-color: white;
  padding: 1em;
`;

const chargeAttackCss = css`
  flex: 1;
  --attack-color: var(--charge-color);
`;

const triggerAttackCss = css`
  flex: 1;
  --attack-color: var(--trigger-color);
`;

const attackCategoryTitle = css`
  color: var(--attack-color);
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
`;

const attackCss = css`
  border: 2px solid var(--attack-color);
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  margin: 1em;
`;

const attackNameCss = css`
  background-color: var(--attack-color);
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0.5em 0;
`;

const overdriveCss = css`
  display: inline-block;
  text-align: center;
  background-color: var(--overdrive-color);
  color: white;
  font-size: 0.7em;
  padding: 0.2em 0.7em;
  margin: 0 0.3em;
`;

const attackDetailsCss = css`
  padding: 1em;

  & > div {
    margin: 0.5em 0;
  }
`;

const attackConditionCss = css`
  color: red;
`;

const effectListCss = css`
  font-weight: bold;
  margin: 0.5em 0;

  & li {
    margin-left: 2em;
  }
`;

const buffListCss = css`
  color: var(--buff-color);

  & li {
    margin-left: 2em;
  }
`;

const debuffListCss = css`
  color: var(--debuff-color);

  & li {
    margin-left: 2em;
  }
`;

const noteCss = css`
  color: gray;
`;

const simpleDescriptionCss = css`
  font-weight: bold;
`;

export const EnemyTable: React.FC<EnemyTableProps> = React.memo(({ enemyData, ...props }) => {
  const chargeAttacks = enemyData.chargeAttacks.map((cAtk) => {
    const effectListItem = cAtk.attack.effects ? cAtk.attack.effects.map((effect) => <li>{effect}</li>) : null;
    const buffListItem = cAtk.attack.buffs ? cAtk.attack.buffs.map((buff) => <li>{buff}</li>) : null;
    const debuffListItem = cAtk.attack.debuffs ? cAtk.attack.debuffs.map((debuff) => <li>{debuff}</li>) : null;

    if (props.mode === 'simple') {
      return (
        <div key={`charge-attack-${cAtk.attack.id}`} css={attackCss}>
          <div css={attackNameCss}>
            {cAtk.isOverdrive ? <span css={overdriveCss}>OVERDRIVE</span> : null}
            {cAtk.attack.name}
          </div>
          <div css={attackDetailsCss}>
            {cAtk.condition ? <div css={attackConditionCss}>条件:{cAtk.condition}</div> : null}
            <div css={simpleDescriptionCss}>{cAtk.attack.simpleDescription}</div>
            <div>対策:{cAtk.attack.simplePlan}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={`charge-attack-${cAtk.attack.id}`} css={attackCss}>
          <div css={attackNameCss}>
            {cAtk.isOverdrive ? <span css={overdriveCss}>OVERDRIVE</span> : null}
            {cAtk.attack.name}
          </div>
          <div css={attackDetailsCss}>
            {cAtk.condition ? <div css={attackConditionCss}>条件:{cAtk.condition}</div> : null}
            <ul css={effectListCss}>
              {cAtk.attack.description}
              {effectListItem}
            </ul>
            {buffListItem ? <ul css={buffListCss}>強化効果{buffListItem}</ul> : null}
            {debuffListItem ? <ul css={debuffListCss}>弱体効果{debuffListItem}</ul> : null}
            {cAtk.attack.note ? <div css={noteCss}>メモ: {cAtk.attack.note}</div> : null}
          </div>
        </div>
      );
    }
  });

  const triggerAttacks = enemyData.triggerAttacks.map((tAtk) => {
    const effectListItem = tAtk.attack.effects ? tAtk.attack.effects.map((effect) => <li>{effect}</li>) : null;
    const buffListItem = tAtk.attack.buffs ? tAtk.attack.buffs.map((buff) => <li>{buff}</li>) : null;
    const debuffListItem = tAtk.attack.debuffs ? tAtk.attack.debuffs.map((debuff) => <li>{debuff}</li>) : null;

    if (props.mode === 'simple') {
      return (
        <div key={`charge-attack-${tAtk.attack.id}`} css={attackCss}>
          <div css={attackNameCss}>
            [{tAtk.triggerHpPercentage}%]{tAtk.attack.name}
          </div>
          <div css={attackDetailsCss}>
            {tAtk.condition ? <div css={attackConditionCss}>条件:{tAtk.condition}</div> : null}
            <div css={simpleDescriptionCss}>{tAtk.attack.simpleDescription}</div>
            <div>対策:{tAtk.attack.simplePlan}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={`trigger-attack-${tAtk.attack.id}`} css={attackCss}>
          <div css={attackNameCss}>
            [{tAtk.triggerHpPercentage}%]{tAtk.attack.name}
          </div>
          <div css={attackDetailsCss}>
            {tAtk.condition ? <div css={attackConditionCss}>条件:{tAtk.condition}</div> : null}
            <ul css={effectListCss}>
              {tAtk.attack.description}
              {effectListItem}
            </ul>
            {buffListItem ? <ul css={buffListCss}>強化効果{buffListItem}</ul> : null}
            {debuffListItem ? <ul css={debuffListCss}>弱体効果{debuffListItem}</ul> : null}
            {tAtk.attack.note ? <div css={noteCss}>メモ: {tAtk.attack.note}</div> : null}
          </div>
        </div>
      );
    }
  });

  return (
    <div {...props}>
      <div css={enemyNameCss}>{enemyData.name}</div>
      <div css={enemyContentCss}>
        <div css={chargeAttackCss}>
          <div css={attackCategoryTitle}>CT</div>
          {chargeAttacks}
        </div>
        <div css={triggerAttackCss}>
          <div css={attackCategoryTitle}>HPトリガー</div>
          {triggerAttacks}
        </div>
      </div>
    </div>
  );
});
