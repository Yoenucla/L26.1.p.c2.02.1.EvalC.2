export interface I_vEmpresa {
  onNuevoEmpleado(callback: () => void): void;
  reportar({ nombreMayorAumento, nuevaNomina }: { nombreMayorAumento: string; nuevaNomina: number }): void;
}
