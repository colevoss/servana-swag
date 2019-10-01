import * as jsYaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

const readYamlFileToJson = (fileName: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(fileName), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const fileYaml = jsYaml.safeLoad(data);

      resolve(fileYaml);
    });
  });
};

export const readYamlFilesToJson = (files: string[]) => {
  const fileReads = files.map(readYamlFileToJson);

  return Promise.all(fileReads);
};
