interface PathMethod {
  method: string;
  summary?: string;
  description?: string;
}

export class Path {
  public methods: PathMethod[];
  public name: string;

  constructor(name: string, pathMethods: any) {
    this.name = name;
    this.methods = Object.keys(pathMethods).map((method: string) => {
      const pathObject = pathMethods[method];

      return {
        method,
        ...pathObject,
      };
    });
  }

  render() {
    return this.methods.reduce((rendered, method) => {
      return [...rendered, ...this.renderPathMethod(method)];
    }, []);
  }

  renderPathMethod(pathMethod: PathMethod) {
    const rendered = [];

    const capMethod = pathMethod.method.toUpperCase();

    const header = `### \`${capMethod} ${this.name}\``;

    rendered.push(header);

    if (pathMethod.summary) {
      rendered.push(pathMethod.summary);
    }

    if (pathMethod.description) {
      rendered.push('#### Description');
      rendered.push(pathMethod.description);
    }

    return rendered;
  }
}
