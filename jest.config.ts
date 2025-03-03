import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

// Add any custom config to be passed to Jest
const config: JestConfigWithTsJest = {
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
