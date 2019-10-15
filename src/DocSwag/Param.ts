export class Param {
  public in: string;
  public name?: string;
  public type: string;
  public schema?: any;
  public required?: boolean;

  constructor(param: any) {
    this.in = param.in;
    this.name = param.name;
    this.type = param.type;
    this.schema = param.schema;
    this.required = param.required;
  }
}
