import { Path } from './Path';

interface Info {
  title: string;
  description?: string;
  version?: string;
}

export class Doc {
  public host: string;
  public basePath: string;
  public info: Info;
  public paths: Path[];

  public renderedDoc: string[] = [];

  constructor(document: any) {
    console.log(JSON.stringify(document, null, 2));
    this.host = document.host;
    this.basePath = document.basePath;
    this.info = document.info;

    this.paths = Object.keys(document.paths).map(pathName => {
      return new Path(pathName, document.paths[pathName]);
    });
  }

  public render() {
    const info = this.renderInfo();
    const paths = this.renderPaths();

    const renderedArray = [info, paths].reduce((rendered, section) => {
      return [...rendered, ...section];
    }, []);

    return renderedArray.join('\n');
  }

  public renderInfo() {
    const titleHeader = `# ${this.info.title}`;
    const description = this.info.description || '';

    return [titleHeader, description];
  }

  public renderPaths() {
    return this.paths.reduce((paths, path) => {
      return [...paths, ...path.render()];
    }, []);
  }
}
