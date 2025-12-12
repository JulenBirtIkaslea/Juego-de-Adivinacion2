export class Configuracion {
  constructor(
    public fullName: string,
    public maxRange: number | null,
    public maxAttempts: number | null
  ) {}
}