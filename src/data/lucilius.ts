import { GbfEnemyAttack, GbfEnemy, GbfRaid, GbfRaidPhase } from './gbf_enemy_data';

const truePower: GbfEnemyAttack = {
  id: 'truepower',
  name: '真の力解放',
  description: '弱体効果を全消去'
};

const ctMax: GbfEnemyAttack = {
  id: 'ctmax',
  name: 'CT MAX',
  description: 'CT最大'
};

const paradiselost1: GbfEnemyAttack = {
  id: 'paradiselostonjoin',
  name: 'パラダイス・ロスト',
  description: '全体に無属性3万ダメージ',
  debuffs: ['召喚不可[3ターン]']
};

const paradiselostCharge: GbfEnemyAttack = {
  id: 'paradiselostcharge',
  name: 'パラダイス・ロスト',
  description: '全体にランダム属性特大ダメージ/全属性カット貫通',
  note: '無敵か、属性変転+属性カットで通過可能'
};

const paradiselostTrigger: GbfEnemyAttack = {
  id: 'paradiselosttrigger',
  name: 'パラダイス・ロスト',
  description: '全体にランダム属性特大ダメージ',
  note: 'カット可能'
};

const phosphorus: GbfEnemyAttack = {
  id: 'phorsphorus',
  name: 'ポースポロス',
  description: 'ランダム単体にランダム属性特大ダメージ',
  debuffs: ['対象の強化効果を全消去'],
  note: '幻影で回避可能'
};

const iblis: GbfEnemyAttack = {
  id: 'iblis',
  name: 'イブリース',
  description: 'ランダム複数対象に多段ランダム属性ダメージ',
  debuffs: ['恐怖[1-3ターン]', '裂傷[1-3ターン]', '衰弱[1-3ターン]']
};

const axion: GbfEnemyAttack = {
  id: 'axion',
  name: 'アキシオン',
  description: 'ランダム複数対象に3回ランダム属性ダメージ',
  effects: ['アキシオンでキャラ死亡時、全体に無属性3万の追加ダメージ']
};

const axion60: GbfEnemyAttack = {
  id: 'axion60',
  name: 'アキシオン',
  description: '全体にランダム属性3回ダメージ',
  effects: ['アキシオンでキャラ死亡時、全体に無属性3万の追加ダメージ'],
  note: '全体攻撃なのでかばう不可'
};

const atheism: GbfEnemyAttack = {
  id: 'atheism',
  name: '無神論',
  description: 'ルシファー本体に絶対否定と永遠拒絶を付与',
  buffs: [
    '絶対否定（指定属性以外を50%カット/1ターンに1000万ダメージで解除）',
    '永遠拒絶（指定属性以外からの弱体耐性アップ/弱体6個以上で解除）'
  ]
};

const sephiroth: GbfEnemyAttack = {
  id: 'sephiroth',
  name: 'セフィロト',
  description: 'ダメージなし',
  effects: ['羽根の弱体効果を全解除', '終末へのカウントダウン開始']
};

const seventrumpet: GbfEnemyAttack = {
  id: 'seventrumpet',
  name: '黙示録の喇叭',
  description: 'ダメージなし',
  effects: ['十二の試練開始', '本体と羽根の弱体効果を全消去', '踏んだ人は本体の95%, 85%, 60%が発動しなくなる'],
  debuffs: ['味方全体の強化効果を全消去']
};

const mars: GbfEnemyAttack = {
  id: 'mars',
  name: 'マルス',
  description: '全体に闇ダメージ',
  effects: ['本体の福音の黒翼を解除'],
  debuffs: ['禁断の果実（奥義性能UP/奥義使用キャラが無属性1万ダメージを受ける）[2ターン]']
};

const fig: GbfEnemyAttack = {
  id: 'fig',
  name: 'フィークス',
  description: '全体に闇ダメージ',
  effects: ['本体に福音の黒翼を付与'],
  debuffs: ['生命の果実（アビリティを使用時に味方全体回復/敵が大回復）[2ターン]']
};

const orbitalblackness: GbfEnemyAttack = {
  id: 'orbitalblackness',
  name: 'オービタルブラック',
  description: 'ランダム属性ランダム対象3回ダメージ',
  debuffs: [
    '（試練9未達成）回復アビリティ2ターン延長',
    '（試練11未達成）強化アビリティ2ターン延長',
    'ハレーション[5ターン]（回復不可）'
  ]
};

const gopherwoodark: GbfEnemyAttack = {
  id: 'gopherwoodark',
  name: 'ゴフェル・アーク',
  description: '種族被り時に、配置が後ろの被りキャラが死亡',
  effects: ['フィールド効果: 天の水門（ターンが2-3ずつ進む）'],
  debuffs: ['復活不可', '召喚不可']
};

const axionapocalypse: GbfEnemyAttack = {
  id: 'axionapocalypse',
  name: 'アキシオン・アポカリプス',
  description: 'ランダム属性ランダム対象3回ダメージ',
  effects: ['赫刃レベルをさらに+1']
};

const lucilius1: GbfEnemy = {
  name: 'ルシファー',
  hpPercentageRange: {
    begin: 100,
    end: 26
  },
  triggerAttacks: [
    { triggerHpPercentage: 100, attack: paradiselost1, condition: '参戦時' },
    { triggerHpPercentage: 95, attack: phosphorus, condition: '黙示録の喇叭を踏んでない人のみ' }
  ],
  chargeAttacks: [
    { attack: phosphorus, isOverdrive: false },
    { attack: iblis, isOverdrive: true },
    { attack: paradiselostCharge, isOverdrive: true, condition: '羽と同時にCT最大時に発動' }
  ]
};

const lucilius2: GbfEnemy = {
  name: 'ルシファー',
  hpPercentageRange: {
    begin: 100,
    end: 26
  },
  triggerAttacks: [
    { triggerHpPercentage: 95, attack: phosphorus, condition: '黙示録の喇叭を踏んでない人のみ' },
    { triggerHpPercentage: 85, attack: axion, condition: '黙示録の喇叭を踏んでない人のみ' },
    { triggerHpPercentage: 75, attack: atheism, condition: '羽根生存の時のみ' }
  ],
  chargeAttacks: [
    { attack: axionapocalypse, isOverdrive: false },
    { attack: paradiselostCharge, isOverdrive: true, condition: '羽と同時にCT最大時に発動' }
  ]
};

const lucilius3: GbfEnemy = {
  name: 'ルシファー',
  hpPercentageRange: {
    begin: 100,
    end: 25
  },
  triggerAttacks: [
    { triggerHpPercentage: 85, attack: axion, condition: '黙示録の喇叭を踏んでない人のみ' },
    { triggerHpPercentage: 70, attack: ctMax },
    { triggerHpPercentage: 60, attack: axion60, condition: '黙示録の喇叭を踏んでない人のみ' },
    { triggerHpPercentage: 55, attack: ctMax },
    { triggerHpPercentage: 25, attack: gopherwoodark }
  ],
  chargeAttacks: [{ attack: phosphorus, isOverdrive: false }, { attack: orbitalblackness, isOverdrive: true }]
};

const lucilius4: GbfEnemy = {
  name: 'ルシファー',
  hpPercentageRange: {
    begin: 24,
    end: 0
  },
  triggerAttacks: [
    { triggerHpPercentage: 20, attack: axionapocalypse },
    { triggerHpPercentage: 15, attack: axionapocalypse },
    { triggerHpPercentage: 10, attack: truePower },
    { triggerHpPercentage: 10, attack: paradiselostTrigger },
    { triggerHpPercentage: 3, attack: paradiselostTrigger }
  ],
  chargeAttacks: [{ attack: phosphorus, isOverdrive: false }, { attack: orbitalblackness, isOverdrive: true }]
};

const darkwing1: GbfEnemy = {
  name: '黒き羽根',
  hpPercentageRange: {
    begin: 100,
    end: 50
  },
  triggerAttacks: [
    { triggerHpPercentage: 70, attack: sephiroth, condition: '最初に踏んだ人のみ' },
    { triggerHpPercentage: 50, attack: seventrumpet, condition: '最初に踏んだ人のみ' }
  ],
  chargeAttacks: [
    { attack: mars, isOverdrive: false, condition: '初回またはフィークスと交互に発動' },
    { attack: fig, isOverdrive: false, condition: 'マルスと交互に発動' }
  ]
};

const darkwing2: GbfEnemy = {
  name: '黒き羽根',
  hpPercentageRange: {
    begin: 49,
    end: 0
  },
  triggerAttacks: [],
  chargeAttacks: [
    { attack: mars, isOverdrive: false, condition: '初回またはフィークスと交互に発動' },
    { attack: fig, isOverdrive: false, condition: 'マルスと交互に発動' }
  ]
};

// 開幕〜羽50%
const phase1: GbfRaidPhase = {
  name: '開始〜試練開始まで',
  enemies: [lucilius1, darkwing1]
};

// 試練開始
const phase2: GbfRaidPhase = {
  name: '試練開始〜羽根撃破まで',
  enemies: [lucilius2, darkwing2]
};

// 羽撃破
const phase3: GbfRaidPhase = {
  name: '羽根撃破〜ゴフェルアーク',
  enemies: [lucilius3]
};

// ゴフェル以降
const phase4: GbfRaidPhase = {
  name: 'ゴフェルアーク〜撃破',
  enemies: [lucilius4]
};

export const luciliusRaid: GbfRaid = {
  phases: [phase1, phase2, phase3, phase4]
};
