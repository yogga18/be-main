import swaggerJsdoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'be-main',
      version: '1.0.0',
      description: 'API Documentation for be-main',
    },
  },
  apis: ['src/routes/*.ts', 'src/routes/**/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerSpec, swaggerui };
