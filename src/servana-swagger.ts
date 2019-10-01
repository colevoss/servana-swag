import * as swagger from 'swagger-tools';
import { findYamlFiles } from './findYamlFiles';
import { readYamlFilesToJson } from './loadYamlFromFiles';
import { combineSwaggerJsons } from './combineSwaggerJsons';

interface App {
  use(arg: any): void;
}

export const useServanaSwagger = async (app: App) => {
  const files = await findYamlFiles();
  const yamls = await readYamlFilesToJson(files);
  const swaggerJsonDoc = combineSwaggerJsons(yamls);

  swagger.initializeMiddleware(swaggerJsonDoc, swag => {
    app.use(swag.swaggerMetadata());
    app.use(swag.swaggerValidator());
    app.use(swag.swaggerUi());
  });
};
