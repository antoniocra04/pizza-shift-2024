import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/api/schema.gql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/api/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;