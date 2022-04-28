# HowTo TypeScript

## `./backend-root` project

- use typescript `references`
- `tsconfig.json`의 `baseUrl`과 `paths` 설정을 통해 build 없이 `ts-node`에 의해 실행된다.(`package.json` 내 `dev` script 참고)
- 프로젝트 root directory에 만든 base tsconfig file 상에 baseUrl과 paths를 설정하고 sub project에서는 해당 파일은 상속받는다.
- `package.json`의 `jest.moduleNameMapper` 설정을 통해 build 없이`ts-jest`에 의해 실행된다.(`package.json` 내 `test` script 참고)
- use `yarn build` and `yarn start` to run the code built

## Appendicies

### Create a mono-repo project

```sh
# create a root project directory
mkdir hello-ts; cd hello-ts

# init the project directory
# a mono-repo root project should be 'private'.
yarn init --private --yes
curl https://www.toptal.com/developers/gitignore/api/node > .gitignore

# add essential packages
yarn add -D lerna typescript ts-node ts-jest jest @types/node @types/jest

# init leran
# 'lerna.json' will be generated.
yarn lerna init

# init typescript
# 'tsconfig.json' will be generaged.
yarn tsc --init

# add 'workspaces' property to package.json.
# "workspaces": [ "packages/*" ]
# edit 'packages' property in lerna.json.
# "packages": [ "packages/*" ]

# create a sub-project and init
mkdir -p packages/{human,monkey,chimpanzee}
yarn init -y --cwd packages/human
yarn init -y --cwd packages/monkey
yarn init -y --cwd packages/chimpanzee
yarn add -D typescript ts-node ts-jest --cwd packages/human
yarn add -D typescript ts-node ts-jest --cwd packages/monkey
yarn add -D typescript ts-node ts-jest --cwd packages/chimpanzee

# list yarn workspaces
yarn workspaces info
# list lerna workspaces
yarn lerna list
```
