#!/usr/bin/env node

import { findYamlFiles } from './findYamlFiles';
import { readYamlFilesToJson } from './loadYamlFromFiles';
import { combineSwaggerJsons } from './combineSwaggerJsons';
import * as jsYaml from 'js-yaml';
import * as path from 'path';
import * as fs from 'fs';
import { spawn } from 'child_process';
import * as tmp from 'tmp';

const swaggerMarkdownLocation = path.resolve(
  'node_modules',
  '.bin',
  'swagger-markdown',
);

const printFoundFiles = (files: string[]) => {
  const thisPath = process.cwd();
  const unresolvedFiles = files.map(fileName => fileName.replace(thisPath, ''));

  console.log(
    'Found the follwoing files: ',
    JSON.stringify(unresolvedFiles, null, 2),
  );
};

const swagDoc = async () => {
  const files = await findYamlFiles();

  printFoundFiles(files);

  const yamls = await readYamlFilesToJson(files);
  const swaggerJsonDoc = combineSwaggerJsons(yamls);

  // console.log(JSON.stringify(swaggerJsonDoc, null, 2));

  const swaggerYaml = jsYaml.safeDump(swaggerJsonDoc);

  const tmpFile = tmp.fileSync();

  fs.writeFileSync(tmpFile.name, swaggerYaml);

  spawn('node', [
    swaggerMarkdownLocation,
    '-i',
    tmpFile.name,
    '-o',
    path.resolve('API_DOCS.md'),
  ]);
};

swagDoc();
