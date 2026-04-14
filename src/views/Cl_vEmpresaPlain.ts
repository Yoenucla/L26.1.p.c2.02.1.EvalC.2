import { I_vEmpresa } from "../interfaces/I_vEmpresa";

export default class Cl_vEmpresaPlain implements I_vEmpresa {
  lblNombreMayorAumento: HTMLElement;
  lblNuevaNomina: HTMLElement;
  btNuevoEmpleado: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblNombreMayorAumento = document.getElementById("body_lblNombreMayorAumento") as HTMLElement;
    this.lblNuevaNomina = document.getElementById("body_lblNuevaNomina") as HTMLElement;
  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }
  reportar({nombreMayorAumento, nuevaNomina }: { nombreMayorAumento: string; nuevaNomina: number }): void {
    this.lblNombreMayorAumento.innerHTML = `${nombreMayorAumento}`;
    this.lblNuevaNomina.innerHTML = `${nuevaNomina}`;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
