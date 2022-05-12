
//DIAS
export const DOMINGO = 0;
export const LUNES = 1;
export const MARTES = 2;
export const MIERCOLES = 3;
export const JUEVES = 4;
export const VIERNES = 5;
export const SABADO = 6;
//DIAS FERIADOS
export const PRIMERODEENERO ={"mes":0, "dia":1}
export const VEINTICUATRODEMARZO ={"mes":2, "dia":24}
export const DOSDEABRIL ={"mes":3, "dia":2}
export const PRIMERODEMAYO ={"mes":4, "dia":1}
export const VEINTICINCODEMAYO ={"mes":4, "dia":25}
export const VEINTEDEJUNIO ={"mes":5, "dia":20}
export const NUEVEDEJULIO ={"mes":6, "dia":9}
export const DIECISIETEDEAGOSTO ={"mes":7, "dia":17}
export const DOCEDEOCTUBRE ={"mes":9, "dia":12}
export const OCHODEDICIEMBRE ={"mes":11, "dia":8}
export const VEINTICINCODEDICIEMBRE ={"mes":11, "dia":25}
export const DIASFERIADOFIJO =[PRIMERODEENERO, VEINTICUATRODEMARZO, DOSDEABRIL, PRIMERODEMAYO, VEINTICINCODEMAYO, VEINTEDEJUNIO, NUEVEDEJULIO, DIECISIETEDEAGOSTO, DOCEDEOCTUBRE, OCHODEDICIEMBRE, VEINTICINCODEDICIEMBRE]
//DIAS Feriados especificos
export const VEINTEDEABRILDEDOSMILDOCE = {'dia':20, 'mes':3, 'anio': 2012}

export class CalendarioDeFeriados {
    private _diasDeLaSemanaFeriado;
    private _diasDelMesFeriados;
    private _diasFeriadosEspecificos;
    constructor() {
        this._diasDeLaSemanaFeriado = [];
        this._diasDelMesFeriados = DIASFERIADOFIJO;
        this._diasFeriadosEspecificos = [];
    }
    agregarDiaFeriadoEnUnMes(diaDelMes: any){
        this._diasDelMesFeriados.push(diaDelMes)
    }
    agregarDiaDeLaSemanaFeriado(diaDeLaSemana: number) {
        
        this._diasDeLaSemanaFeriado.push(diaDeLaSemana);
        
    }
    agregarDiaFeriadoEspecifico(diaEspecifico: any){
    this._diasFeriadosEspecificos.push(diaEspecifico)
    }

    esFeriado(unaFecha: Date): boolean {

        if(this.chequearSiHayDiasDeLaSemanaAgregados()) {
            return  this._diasDeLaSemanaFeriado.some(diaDeLaSemana => diaDeLaSemana === unaFecha.getDay())
        }else if(this.chequearSiHayDiasEspecificosAgregados()){
            return this._diasFeriadosEspecificos.some(diaEspecifico=> diaEspecifico.dia === unaFecha.getDate() && diaEspecifico.mes === unaFecha.getMonth() && diaEspecifico.anio === unaFecha.getFullYear())
        }else{
            return this._diasDelMesFeriados.some(diaDelMes =>diaDelMes.dia === unaFecha.getDate() && diaDelMes.mes === unaFecha.getMonth())
        }
        
      
    
    };
    chequearSiHayDiasDeLaSemanaAgregados():boolean{
        return this._diasDeLaSemanaFeriado.length > 0
    }
    chequearSiHayDiasEspecificosAgregados():boolean{
        return this._diasFeriadosEspecificos.length > 0
    }
}

