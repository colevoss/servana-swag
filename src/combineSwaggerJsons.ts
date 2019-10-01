type SwaggerJsons = {
  [key: string]: any;
};

const base = {
  paths: {},
  definitions: {},
};

const keysToConcat = [
  { key: 'swagger', type: 'topLevel' },
  { key: 'info', type: 'topLevel' },
  { key: 'host', type: 'topLevel' },
  { key: 'basePath', type: 'topLevel' },
  { key: 'securityDefinitions', type: 'topLevel' },
  { key: 'security', type: 'topLevel' },
  { key: 'paths', type: 'object' },
  { key: 'definitions', type: 'object' },
  { key: 'schemes', type: 'array' },
];

const combineObjectSwaggers = (swagerJsons: SwaggerJsons[], key: string) => {
  return swagerJsons.reduce((values, v) => {
    const value = v[key];

    return {
      ...values,
      ...value,
    };
  }, {});
};

const combineArraySwaggers = (swaggerJsons: SwaggerJsons[], key: string) => {
  return swaggerJsons.reduce((values, v) => {
    const value = v[key];

    if (!value) return values;

    // @ts-ignore
    return [...values, value];
  }, []);
};

const topLevelSwags = (swaggerJson: SwaggerJsons[], key: string) => {
  return swaggerJson.reduce((values, v) => {
    const value = v[key];

    return value || values;
  }, null);
};

export const combineSwaggerJsons = (swaggerJsons: SwaggerJsons[]) => {
  const newSwag = keysToConcat.reduce((swag, key) => {
    let keyValues;

    switch (key.type) {
      case 'object':
        keyValues = combineObjectSwaggers(swaggerJsons, key.key);
        break;

      case 'array':
        keyValues = combineArraySwaggers(swaggerJsons, key.key);
        break;

      case 'topLevel':
        keyValues = topLevelSwags(swaggerJsons, key.key);
        break;
    }

    return {
      ...swag,
      [key.key]: keyValues,
    };
  }, base);

  return newSwag;
};
