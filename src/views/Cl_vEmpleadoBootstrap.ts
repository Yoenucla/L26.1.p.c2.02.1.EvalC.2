import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";
declare var bootstrap: any;

export default class Cl_vEmpleadoBootstrap implements I_vEmpleado {
  inNombre: HTMLInputElement;
  inCedula: HTMLInputElement;
  inSueldoActual: HTMLInputElement;
  inAnTrabajados: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  private modal: any;

  constructor() {
    this.vista = document.getElementById("empleado") as HTMLElement;
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inCedula = document.getElementById("empleado_inCedula") as HTMLInputElement;
    this.inSueldoActual = document.getElementById("empleado_inSueldoActual") as HTMLInputElement;
    this.inAnTrabajados = document.getElementById("empleado_inAnTrabajados") as HTMLInputElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
    const elementoModal = document.getElementById("empleado");
    this.modal = new bootstrap.Modal(elementoModal);
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get sueldoActual(): number {
    return this.inSueldoActual ? +this.inSueldoActual.value : 0;
  }
  get anTrabajados(): number {
    return this.inAnTrabajados ? +this.inAnTrabajados.value : 0;
  }
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
  mostrar(): void {
    this.inNombre.value = ""; 
    this.inCedula.value = "";
    this.inSueldoActual.value = "";
    this.inAnTrabajados.value = "";
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}
