/**
 * LA EMPRESA
 * Una empresa va a realizar un aumento de sueldo a sus empleados.
 * Se conoce de cada empleado: nombre, cedula, sueldo actual y años trabajados.
 * El sueldo se aumentará en un 10% si tiene menos de 5 años trabajados,
 * y en un 20% si tiene al menos 5 años trabajados.
 *
 * Se desea conocer:
 * - El nombre del empleado que recibirá el mayor aumento.
 * - El total de la nómina nueva.
 * 
 * Considere que la clase empleado hereda de una clase persona
 */

import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_cEmpleado from "./Cl_cEmpleado.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: I_vEmpresa;
  private cEmpleado: Cl_cEmpleado;

  // Recibe la vista de la bodega y el controlador del Alumno ya armado
  constructor(vistaEmpresa: I_vEmpresa, controladorEmpleado: Cl_cEmpleado) {
    this.vEmpresa = vistaEmpresa;
    this.cEmpleado = controladorEmpleado;

    this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
  }

  private procesar1Empleado() {
    this.cEmpleado.solicitarEmpleado((empleado) => {
      if (empleado !== null) {
        this.mEmpresa.procesarEmpleado(empleado);
        this.vEmpresa.reportar({ nombreMayorAumento: this.mEmpresa.nombreMayorAumento, nuevaNomina: this.mEmpresa.totalNominaNueva });
      }
    });
  }
}
