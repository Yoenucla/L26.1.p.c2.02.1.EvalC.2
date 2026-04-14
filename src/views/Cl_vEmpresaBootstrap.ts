import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresaBootstrap implements I_vEmpresa {
  private lblNombreMayorAumento: HTMLElement;
  private lblNuevaNomina: HTMLElement;
  private btNuevoEmpleado: HTMLButtonElement;
  private vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblNombreMayorAumento = document.getElementById("body_lblNombreMayorAumento") as HTMLElement;
    this.lblNuevaNomina = document.getElementById("body_lblNuevaNomina") as HTMLElement;
  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }
  reportar({ nombreMayorAumento, nuevaNomina }: { nombreMayorAumento: string; nuevaNomina: number }): void {
    this.lblNombreMayorAumento.innerHTML = `${nombreMayorAumento}`;
    this.lblNuevaNomina.innerHTML = `${nuevaNomina}`;
  }
}
