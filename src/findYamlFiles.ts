import * as glob from 'glob';
import * as path from 'path';

const globString = path.resolve('**', '*.swagger.yaml');

export const findYamlFiles = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    glob(globString, (err, files) => {
      if (err) {
        return reject(err);
      }

      resolve(files);
    });
  });
};
