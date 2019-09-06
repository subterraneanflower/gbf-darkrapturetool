export interface GbfEnemyAttack {
  id: string;
  name: string;
  description: string;
  simpleDescription: string;
  simplePlan: string;
  effects?: string[];
  buffs?: string[];
  debuffs?: string[];
  note?: string;
}

export interface GbfEnemyTriggerAttack {
  triggerHpPercentage: number;
  attack: GbfEnemyAttack;
  condition?: string;
}

export interface GbfEnemyChargeAttack {
  attack: GbfEnemyAttack;
  isOverdrive: boolean;
  condition?: string;
}

export interface GbfEnemy {
  name: string;
  hpPercentageRange: {
    begin: number;
    end: number;
  };
  triggerAttacks: GbfEnemyTriggerAttack[];
  chargeAttacks: GbfEnemyChargeAttack[];
}

export interface GbfRaidPhase {
  name: string;
  enemies: GbfEnemy[];
  note?: string;
}

export interface GbfRaid {
  phases: GbfRaidPhase[];
}
