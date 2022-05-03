import {makeAutoObservable} from "mobx";

export default class Auto {
    constructor() {
        this._autos = []
        this._selectedAuto = {}
        makeAutoObservable(this)
    }

    setAuto(autos) {
        this._autos = autos
    }

    setSelectedAuto(autoId) {
        this._selectedAuto = autoId
    }

    get autos() {
        return this._autos
    }

    get selectedAuto() {
        return this._selectedAuto
    }

}
