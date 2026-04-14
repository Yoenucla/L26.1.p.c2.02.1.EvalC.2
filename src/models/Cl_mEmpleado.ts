import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEmpleado extends Cl_mPersona {
  private _sueldoActual: number = 0;
  private _anTrabajados: number = 0;

  constructor({nombre, cedula, sueldoActual, anTrabajados,}: {nombre: string; cedula: number; sueldoActual: number; anTrabajados: number;}) {
    super({ nombre, cedula });
    this.sueldoActual = sueldoActual;
    this.anTrabajados = anTrabajados;    
  }
  set sueldoActual(value: number) {
    this._sueldoActual = value;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }
  set anTrabajados(value: number) {
    this._anTrabajados = value;
  }
  get anTrabajados(): number {
    return this._anTrabajados;
  }
  get aumento(): number {
    if (this._anTrabajados < 5) return this.sueldoActual * 0.1;
    return this.sueldoActual * 0.2;
  }
  get nuevoSueldo(): number {
    return this.sueldoActual + this.aumento;
  }
}
