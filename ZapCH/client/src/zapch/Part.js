import {makeAutoObservable} from "mobx";

export default class Part {
    constructor() {
        this._parts = []
        this._selectedPart = {}
        makeAutoObservable(this)
    }

    setPart(parts) {
        this._parts = parts
    }

    setSelectedPart(parts) {
        this._selectedPart = parts
    }

    get parts() {
        return this._parts
    }
    get selectedPart() {
        return this._selectedPart
    }
}
