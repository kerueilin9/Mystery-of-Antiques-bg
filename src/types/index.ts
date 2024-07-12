interface Player {
  name: string;
  character: string;
  host: boolean;
  remain: number;
  myTurn: number;
  attacked: number;
  isCheckAble: number;
  isSkillAble: number;
  inActiveRound: number;
  record: {
    round1: string[];
    round2: string[];
    round3: string[];
  };
}

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

export { Player, Animal };
