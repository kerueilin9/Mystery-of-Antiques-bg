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
}

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

export { Player, Animal };
