import { auteur } from "./auteur";
import { type } from "./type";

export class films {
    id: Number;
    releaseDate: Date;
    title: String;
    realisateur: String;
    type: type;
    auteur : auteur;
} 