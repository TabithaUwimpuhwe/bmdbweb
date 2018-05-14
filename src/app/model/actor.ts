export class Actor {
    Id: number;
    FirstName: string;
    LastName: string;
    Gender: string;
    BirthDate: Date;
    

    constructor( Id: number=0, fName: string, lName: string, gender: string, bd: Date = null ){
        this.Id=Id;
        this.FirstName=fName;
        this.LastName=lName;
        this.Gender=gender;
        this.BirthDate=bd;
    }

    about(): string{
        return `User: id=${this.Id}, firstName=${this.FirstName}, lastName=${this.FirstName}, gender=${this.Gender}, bd=${this.BirthDate}` }
}

