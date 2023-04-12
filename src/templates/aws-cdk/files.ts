import { EnvironmentAwsAccountAnswer, TaggingAnswer } from "../../models/choice";
import { toTitleCase } from "../../utils/function.util";

export const getAwsCdkPackageJson = (projectName: string) => `{
    "name": "${projectName}",
    "version": "1.0.0",
    "description": "",
    "keywords": [],
    "homepage": "https://github.com/nsw-health-pathology/goldpath-aws-cdk-typescript#readme",
    "scripts": {
      "lint": "eslint -c .eslintrc.json",
      "build": "npm run tsc --",
      "test": "jest",
      "deploy": "cdk deploy",
      "diff": "cdk diff",
      "ci": "npm run lint && npm run test",
      "synth": "cdk synth",
      "license-check": "license-checker --summary --production --excludePrivatePackages --onlyAllow Apache-2.0;MIT;ISC;BSD;BSD-2-Clause;BSD-3-Clause;MIT*;CC0-1.0;CC-BY-3.0;CC-BY-4.0;BSD*;0BSD;Public Domain;AFLv2.1;"
    },
    "devDependencies": {
      "@types/jest": "^29.2.5",
      "@types/node": "18.11.18",
      "@typescript-eslint/eslint-plugin": "^5.57.1",
      "@typescript-eslint/parser": "^5.57.1",
      "aws-cdk": "^2.72.0",
      "eslint": "^8.37.0",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-prettier": "^4.2.0",
      "prettier": "^2.8.7",
      "jest": "^29.3.1",
      "license-checker": "^25.0.1",
      "ts-jest": "^29.0.3",
      "ts-node": "^10.0.0",
      "typescript": "^4.9.3"
    },
    "dependencies": {
      "aws-cdk-lib": "^2.72.0",
      "constructs": "^10.1.301"
    }
}`;

export const getAwsCdkTsconfig = () => `{
    "compilerOptions": {
        "alwaysStrict": true,
        "declaration": true,
        "experimentalDecorators": true,
        "inlineSourceMap": true,
        "inlineSources": true,
        "lib": [
            "es2018"
        ],
        "module": "CommonJS",
        "noEmitOnError": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "strict": true,
        "skipLibCheck": true,
        "strictNullChecks": true,
        "outDir": "./dist",
        "strictPropertyInitialization": true,
        "stripInternal": true,
        "target": "ES2018",
        "rootDir": ".",
        "typeRoots": [
            "./node_modules/@types"
        ]
    },
    "include": [
        "**/*.ts"
    ],
    "exclude": [
        "node_modules",
        "cdk.out"
    ]
}`;

export const getAwsCdkReadme = (projectName: string, tagging: TaggingAnswer) => `# ${projectName}

Generated by the @nswhp/golden-path https://www.npmjs.com/package/@nswhp/golden-path

## Build Process

\`\`\`
\$ npm run synth -- Stack-np
\`\`\`
\`\`\`
\$ npm run diff -- Stack-np
\`\`\`
\`\`\`
\$ npm run deploy -- Stack-np
\`\`\`
## Deployment

Create a pipeline in azure devops and reference the .pipelines/azure-pipeline.yml in this repo.

Create variable groups in pipelines -> library -> variable groups for each environment you have eg ${projectName}-pd, ${projectName}-np

## Tags
- Service Offering ${tagging.serviceOffering}
- Support Team ${tagging.support}
- Support Contact ${tagging.supportContact}
- Reason ${tagging.reason}
- Cost Center ${tagging.costCenter}

`;

export const getAwsCdkJestConfig = () => `module.exports = {
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    }
  };
`;

export const getAwsCdkConfig = (projectName: string) => `{
    "app": "npx ts-node --prefer-ts-exts bin/${projectName}.ts"
}
`;

export const getAwsCdkPrettier = () => `{
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100,
    "bracketSpacing": true,
    "useTabs": false
  }
`;

export const getAwsCdkGitIgnore = () => `*.js
!jest.config.js
*.d.ts
node_modules

# CDK asset staging directory
.cdk.staging
cdk.out
`;

export const getAwsCdkEslintConfig = () => `{
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "ignorePatterns": ["**/*.d.ts", "**/*.js"],
    "rules": {
        "require-jsdoc": [
            "warn",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": false,
                    "ClassDeclaration": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": false
                }
            }
        ],
        "object-shorthand": [
            "error",
            "never"
        ],
        "semi": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single",
            "avoid-escape"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "prefer-const": 1,
        "no-var": 1,
        "no-fallthrough": 1,
        "no-unused-vars": "off",
        "prettier/prettier": ["off", { "singleQuote": true }],
        "no-console": [
            "warn",
            {
                "allow": [
                    "info",
                    "debug",
                    "error"
                ]
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowTypedFunctionExpressions": true
            }
        ],
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ]
    },
    "overrides": []
}
`;

export const getAwsCdkEslintIgnore = () => `# build artifacts
dist/*
coverage/*
# custom definition files
.cache
node_modules
**/*.d.ts
`;

export const getAwsCdkExampleTest = () => `test('Infrastructure Created', () => {
    console.info('Add Test Cases');
  });
`;

export const getAwsCdkTaggingTs = () => `import { EnvironmentConfig } from './config/config.factory';

import { NswhpEnvironment } from './constants';
import { Tag } from 'aws-cdk-lib';

export class TaggingService {
    private readonly costCenter: string;
    private readonly serviceOffering: string;
    private readonly reason: string;
    private readonly environment: NswhpEnvironment;
    private readonly support: string;
    private readonly supportContact: string;

    /**
     * Constructor to accept the common team parameters that all resources will have
     */
    constructor(envConfig: EnvironmentConfig) {
        this.support = envConfig.support;
        this.supportContact = envConfig.supportContact;
        this.costCenter = envConfig.costCenter;
        this.environment = envConfig.environmentNameShort;
        this.serviceOffering = envConfig.serviceOffering;
        this.reason = envConfig.reason;
    }

    /**
     * Produce our standardised tagging for resource infrastructure in line with
     * https://confluence.pathology.health.nsw.gov.au/display/EA/Logical+Data+Centre+Reference+Architecture#LogicalDataCentreReferenceArchitecture-ResourceTaggingStandards
     */
    static generate(resourceName: string): Tag[] {
        return [
            new Tag('Name', resourceName),
        ];
    }

    /**
     * Tags that are considered static for the team-environment. All cloud resources for this team
     * should receive these same tags.
     * @returns
     */
    staticTags(): Tag[] {
        return [
            new Tag('CostCenter', this.costCenter),
            new Tag('Environment', this.environment),
            new Tag('ServiceOffering', this.serviceOffering),
            new Tag('Support', this.support),
            new Tag('SupportContact', this.supportContact),
            new Tag('Reason', this.reason),
        ];
    }
}
`

export const getAwsCdkConstantsTs = (accountDetails: EnvironmentAwsAccountAnswer[]) => `export type NswhpEnvironment = 'develop' | 'test' | 'qa' | 'training' | 'np' | 'pd' | 'nonprod' | 'preprod' | 'prod';

export const C = {
    AWS_REGION: 'ap-southeast-2',
    SOLUTION: 'SOLUTION',
    AWS_ACCOUNTS: {
        NP: '${accountDetails
        .some(account => account.env.toLocaleLowerCase() === 'np')
        ? accountDetails.find(account => account.env.toLocaleLowerCase() === 'np')!.accountId
        : ''}',
        QA: '${accountDetails
        .some(account => account.env.toLocaleLowerCase() === 'qa')
        ? accountDetails.find(account => account.env.toLocaleLowerCase() === 'qa')!.accountId
        : ''}',
        PD: '${accountDetails
        .some(account => account.env.toLocaleLowerCase() === 'pd')
        ? accountDetails.find(account => account.env.toLocaleLowerCase() === 'pd')!.accountId
        : ''}',
    },
};`

export const getAwsCdkStackTs = (env: string) => `import * as cdk from 'aws-cdk-lib';

import { EnvironmentConfig, getEnvironment } from './config/config.factory';

import { Construct } from 'constructs';
import { Infrastructure } from './config/infrastructure';

export class ${toTitleCase(env)}Stack extends cdk.Stack {
  protected readonly config: EnvironmentConfig;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.config = getEnvironment(props?.env?.account || 'N/A');

    // Here we register the team infrastructure in the stack
    new Infrastructure(this, this.config);
  }
}

`

export const getAwsCdkConfigFactoryTs = (
    npDetails: EnvironmentAwsAccountAnswer | undefined,
    qaDetails: EnvironmentAwsAccountAnswer | undefined,
    pdDetails: EnvironmentAwsAccountAnswer | undefined,
    tagging: TaggingAnswer,
    projectName: string
) => `import { C } from '../constants';

export interface EnvironmentConfig {
    accountNameQualified: string;
    accountNameShort: string;
    accountId: string;
    environmentNameLong: 'nonprod' | 'quality assurance' | 'prod'
    environmentNameShort: 'np' | 'qa' | 'pd';
    costCenter: string;
    name: string;
    support: string;
    supportContact: string;
    reason: string;
    serviceOffering: string;
}

export const getEnvironment = (accountId: string): EnvironmentConfig => {
    switch (accountId) {
        case C.AWS_ACCOUNTS.NP:
            return {
                accountNameQualified: '${npDetails ? npDetails.accountNameQualified : ''}',
                accountNameShort: '${npDetails ? npDetails.accountNameShort : ''}',
                accountId: C.AWS_ACCOUNTS.NP,
                environmentNameLong: 'nonprod',
                environmentNameShort: 'np',
                costCenter: '${tagging.costCenter}',
                name: '${projectName}',
                support: '${tagging.support}',
                supportContact: '${tagging.supportContact}',
                reason: '${tagging.reason}',
                serviceOffering: '${tagging.serviceOffering}',
            };
        case C.AWS_ACCOUNTS.QA:
            return {
                accountNameQualified: '${qaDetails ? qaDetails.accountNameQualified : ''}',
                accountNameShort: '${qaDetails ? qaDetails.accountNameShort : ''}',
                accountId: C.AWS_ACCOUNTS.QA,
                environmentNameLong: 'quality assurance',
                environmentNameShort: 'qa',
                costCenter: '${tagging.costCenter}',
                name: '${projectName}',
                support: '${tagging.support}',
                supportContact: '${tagging.supportContact}',
                reason: '${tagging.reason}',
                serviceOffering: '${tagging.serviceOffering}',
            };
        case C.AWS_ACCOUNTS.PD:
            return {
                accountNameQualified: '${pdDetails ? pdDetails.accountNameQualified : ''}',
                accountNameShort: '${pdDetails ? pdDetails.accountNameShort : ''}',
                accountId: C.AWS_ACCOUNTS.PD,
                environmentNameLong: 'prod',
                environmentNameShort: 'pd',
                costCenter: '${tagging.costCenter}',
                name: '${projectName}',
                support: '${tagging.support}',
                supportContact: '${tagging.supportContact}',
                reason: '${tagging.reason}',
                serviceOffering: '${tagging.serviceOffering}',
            };
        default:
            throw Error('Missing for accountId: ' + accountId);
    }
};

`

export const getAwsCdkInfrastructureTs = () => `import { Construct } from 'constructs';
import { EnvironmentConfig } from './config.factory';
import { TaggingService } from '../tagging';
import { Tags } from 'aws-cdk-lib';

export class Infrastructure extends Construct {
    constructor(scope: Construct, envConfig: EnvironmentConfig) {
        super(scope, envConfig.name);

        // Tag all the resources
        new TaggingService(envConfig).staticTags().forEach(t => Tags.of(this).add(t.key, t.value));
    }
}`

export const getAwsCdkBinCdkProjectTs = (
    npDetails: EnvironmentAwsAccountAnswer | undefined,
    qaDetails: EnvironmentAwsAccountAnswer | undefined,
    pdDetails: EnvironmentAwsAccountAnswer | undefined,
    projectName: string,
) => `#!/usr/bin/env node

    import 'source-map-support/register';

    import * as cdk from 'aws-cdk-lib';

    import { C } from '../lib/constants';
    ${npDetails ? `import { NpStack } from '../lib/np-stack';` : ''}
    ${qaDetails ? `import { QaStack } from '../lib/qa-stack';` : ''}
    ${pdDetails ? `import { PdStack } from '../lib/pd-stack';` : ''}

    const app = new cdk.App();

    ${npDetails ? `new NpStack(app, 'Stack-np', {
      stackName: '${projectName}-np',
      env: { account: C.AWS_ACCOUNTS.NP, region: C.AWS_REGION },
      terminationProtection: true,
    });` : ''}

    ${qaDetails ? `new NpStack(app, 'Stack-qa', {
      stackName: '${projectName}-qa',
      env: { account: C.AWS_ACCOUNTS.QA, region: C.AWS_REGION },
      terminationProtection: true,
    });` : ''}

    ${pdDetails ? `new PdStack(app, 'Stack-pd', {
        stackName: '${projectName}-pd',
        env: { account: C.AWS_ACCOUNTS.PD, region: C.AWS_REGION },
        terminationProtection: true,
    });` : ''}

    `
export const getAwsCdkPipeline = (projectName: string) => `# Starter pipeline
# Start with a minimal pipeline that you can customize to build and deploy your code.
# Add steps that build, run tests, deploy, and more:
# https://aka.ms/yaml

trigger:
- pd
- qa
- np

variables:
- ${"${{ if eq(variables['Build.SourceBranchName'], 'pd') }}"}:
  - group: ${projectName}-pd
- ${"${{ if eq(variables['Build.SourceBranchName'], 'qa') }}"}:
  - group: ${projectName}-qa
- ${"${{ if eq(variables['Build.SourceBranchName'], 'np') }}"}:
  - group: ${projectName}-np
stages:
  - stage: CI
    pool:
      vmImage: ubuntu-latest
    jobs:
    - job: Test_Infrastructure
      displayName: Test Infrastructure
      steps:

      - checkout: self
        fetchDepth: 1

      - task: NodeTool@0
        displayName: Install Node
        inputs:
          versionSource: 'spec'
          versionSpec: '$(NODE_VERSION)'

      - task: Npm@1
        displayName: Install Packages
        inputs:
          command: 'install'
          workingDir: '$(System.DefaultWorkingDirectory)'

      - task: Npm@1
        displayName: Run CI
        inputs:
          command: 'custom'
          workingDir: '$(System.DefaultWorkingDirectory)'
          customCommand: 'run ci'

      - task: Npm@1
        displayName: Run synth
        inputs:
          command: 'custom'
          workingDir: '$(System.DefaultWorkingDirectory)'
          customCommand: 'run synth -- Stack-$(Build.SourceBranchName)'

  - stage: CD
    jobs:
    - job: Deploy_Infrastructure
      displayName: Deploy infrastructure
      steps:
      - checkout: self
        fetchDepth: 1

      - task: NodeTool@0
        displayName: Install Node
        inputs:
          versionSource: 'spec'
          versionSpec: '$(NODE_VERSION)'

      - task: Npm@1
        displayName: Install packages
        inputs:
          command: 'install'
          workingDir: '$(System.DefaultWorkingDirectory)'

      - task: AWSShellScript@1
        displayName: Run cdk diff
        inputs:
          awsCredentials: '$(AWS_DEPLOYMENT_SERVICE_CONNECTION)'
          regionName: 'ap-southeast-2'
          scriptType: 'inline'
          inlineScript: 'npm run diff -- Stack-$(Build.SourceBranchName)'

      - task: AWSShellScript@1
        displayName: Run cdk deploy
        inputs:
          awsCredentials: '$(AWS_DEPLOYMENT_SERVICE_CONNECTION)'
          regionName: 'ap-southeast-2'
          scriptType: 'inline'
          inlineScript: 'npm run deploy -- Stack-$(Build.SourceBranchName) --require-approval never'
`
