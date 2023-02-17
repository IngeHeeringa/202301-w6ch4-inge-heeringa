import { type Answers } from "inquirer";

export interface ThingStructure {
  id: number;
  name: string;
}

export type ThingsStructure = ThingStructure[];

export interface UserAnswers extends Answers {
  port: number;
  isAuthorized: boolean;
}
