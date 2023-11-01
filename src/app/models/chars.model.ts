import { Origin } from './origin.model';

export interface Char {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
}