import { IPet } from './ipet.model.ts';

export interface IPerson {
    age: number;
    gender: string;
    name: string;
    pets: IPet[];
}
