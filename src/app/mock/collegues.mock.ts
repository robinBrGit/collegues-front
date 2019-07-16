import {Collegue} from "../models/collegue";

let collegue:Collegue = new Collegue('14cbeb3c-b6ab-43e5-98ba-3be2d4424a9a',
    'Thomas','pierre','thomas.p@gmail.com',new Date(1993,10,12),
    'https://www.electricien-meaux-dubot-hager.fr/media/original/13266/profil-neutre.png');

let collegue2:Collegue = new Collegue('17csdf3c-b6ab-98ba-43e5-sdfsfdfsfezd',
    'Thomas','robert','thomas.r@gmail.com',new Date(1970,4,20),
    'https://www.electricien-meaux-dubot-hager.fr/media/original/13266/profil-neutre.png');

let colleque3:Collegue = new Collegue('14cbeb3c-43e5-43e5-98ba-45zef2ezffez',
    'Thomas','robin','thomas.robi@gmail.com',new Date(1980,6,17),
    'https://www.electricien-meaux-dubot-hager.fr/media/original/13266/profil-neutre.png');

let colleque4:Collegue = new Collegue('b02a3e7f-908d-4c65-86f2-153e00735ec6',
    'Robert','ambre','robert.am@gmail.com',new Date(1958,2,19),
    'https://www.electricien-meaux-dubot-hager.fr/media/original/13266/profil-neutre.png');




const collegues:Collegue[] = [];
collegues.push(collegue,collegue2,colleque3,colleque4);

export {
    collegue as unCollegue,
    collegues as lesCollegues
}
