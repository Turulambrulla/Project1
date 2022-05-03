import {makeAutoObservable} from "mobx";

export default class Part {
    constructor() {
        this._parts = [
            {"id":1,"name":"Свечи зажигания","price":1500,"brand":"Denso","img":null,"createdAt":"2022-05-02T08:31:03.072Z","updatedAt":"2022-05-02T08:31:03.072Z"},
            {"id":5,"name":"свечи","price":1500,"brand":"Denso","img":null,"createdAt":"2022-05-02T08:31:03.072Z","updatedAt":"2022-05-02T08:31:03.072Z"},
            {"id":7,"name":"свечи","price":1500,"brand":"Denso","img":null,"createdAt":"2022-05-02T08:31:03.072Z","updatedAt":"2022-05-02T08:31:03.072Z"},
            {"id":9,"name":"свечи","price":1500,"brand":"Denso","img":null,"createdAt":"2022-05-02T08:31:03.072Z","updatedAt":"2022-05-02T08:31:03.072Z"},
        ]
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
