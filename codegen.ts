import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/api/schema.gql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/api/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true,
  config:{
    'maybeValue': 'T'
  }
};

export default config;
