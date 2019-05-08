var hello = 'Build 2019';
hello = 3;
console.log(hello);
var Attendee = /** @class */ (function () {
    /**
     *
     * @param {String} name
     * @param {String} city
     */
    function Attendee(name, country) {
        this.name = name;
        this.country = country;
    }
    return Attendee;
}());
var att = new Attendee('Loiane', 'Brazil');
//att.na = 'sdfsdf';
