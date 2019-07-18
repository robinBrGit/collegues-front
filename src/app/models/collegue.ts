export class Collegue {
    constructor(public matricule:string,
                public nom:string,
                public prenoms:string,
                public email:string,
                public dateDeNaissance:Date,
                public photoUrl:string){

    }
}

export class CollegueUpdate {
    constructor(public matricule:string,
                public email:string,
                public photoUrl:string){

    }
}

export class CollegueAdd {
    public nom:string;
    public prenoms:string;
    public email:string;
    public dateDeNaissance:Date;
    public photoUrl;

    constructor(){
        this.nom ="";
        this.prenoms="";
        this.email="";
        this.dateDeNaissance = undefined;
        this.photoUrl="";
    }
}
