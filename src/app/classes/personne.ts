export class Personne {

    constructor(private _num?: number, private _nom?: string){}
    get num(): number |undefined {
        return this. _num;
    }

    set num (_num:number |undefined){
        this._num =_num;
    }

    get nom(): string |undefined {
        return this. _nom;
    }

    set nom (_nom: string | undefined){
        this._nom = _nom;
    }

}
