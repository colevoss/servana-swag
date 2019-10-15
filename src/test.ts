import { findYamlFiles } from './findYamlFiles';
import { readYamlFilesToJson } from './loadYamlFromFiles';
import { combineSwaggerJsons } from './combineSwaggerJsons';
import { Doc } from './DocSwag/Doc';

const test = async () => {
  const files = await findYamlFiles();
  const yamls = await readYamlFilesToJson(files);
  const swaggerJsonDoc = combineSwaggerJsons(yamls);

  const doc = new Doc(swaggerJsonDoc);

  // console.log(doc.paths);

  console.log(doc.render());
};

test();
