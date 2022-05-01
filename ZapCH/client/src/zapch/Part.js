import {makeAutoObservable} from "mobx";

export default class Part {
    constructor() {
        this._autos = []
        this._brands = []
        this._parts = []
        makeAutoObservable(this)
    }

    setTypes(autos) {
        this._autos = autos
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(parts) {
        this._parts = parts
    }

    get autos() {
        return this._autos
    }
    get brands() {
        return this._brands
    }
    get parts() {
        return this._parts
    }

}