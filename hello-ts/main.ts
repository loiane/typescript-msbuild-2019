let hello = 'Build 2019';
hello = 3;
console.log(hello);

class Attendee {

    /**
     * 
     * @param {String} name 
     * @param {String} city 
     */
    constructor(private name: string, private country: string) {}
}
const att = new Attendee('Loiane', 'Brazil');
//att.na = 'sdfsdf';
