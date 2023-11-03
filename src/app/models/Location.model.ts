import { Char } from './chars.model';

export interface Location {
  id: string;
  name: string;
  dimension: string;
  type: string;
  residents: Char[];
  url: string;
}
