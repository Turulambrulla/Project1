import {makeAutoObservable} from "mobx";

export default class Part {
    constructor() {
        this._autos = [
            {id:1, mark: 'SUBARU', model:'LEGACY', year:'2001', dvs:'EJ20'},
            {id:2, mark: 'NISSAN', model:'CEFIRO', year:'1998', dvs:'VQ20'},
            {id:3, mark: 'CHEVROLET', model:'NIVA', year:'2012', dvs:'21213'},
            {id:4, mark: 'MITSUBISHI', model:'GALANT', year:'1996', dvs:'6A13'},
        ]
        this._brands = [
            {id:1, name:'CTR'},
            {id:2, name:'DENSO'},
            {id:3, name:'SAT'},
            {id:4, name:'AKEBONO'},
            {id:5, name:'GATES'},
        ]
        this._parts = [
            {id: 1, name: 'Свеча зажигания', price:'2000', bgandId: 2, autoId:1},
            {id: 2, name: 'Колодки', price:'2550', bgandId: 4, autoId:4},
            {id: 3, name: 'Фильтр топливный', price:'1660', bgandId: 3, autoId:3},
            {id: 4, name: 'Наконечник рулевой', price:'890', bgandId: 1, autoId:2},
            {id: 5, name: 'Ремень ГРМ', price:'4800', bgandId: 5, autoId:1},
     
        ]
        this._selectedAuto = {}
        makeAutoObservable(this)
    }

    setAutos(autos) {
        this._autos = autos
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(parts) {
        this._parts = parts
    }
    setSelectedAuto(auto) {
        this.setPage(1)
        this._selectedAuto = auto
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
    get selectedAuto() {
        return this._selectedAuto
    }
}