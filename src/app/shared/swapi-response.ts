import {Person} from '../people/shared';

export interface SwapiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Person[];
}
