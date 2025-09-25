# ts-boilerplate

For quick setup of ts projects including:
- typescript setup
- launch.json debug config
- Dockerfile (node v24 alpine)
- local .env support
- hono server w/ zod validation

## Instructions

1. Start a new project via [degit](https://github.com/Rich-Harris/degit)

```bash
npm install -g degit
npx degit jransome/ts-boilerplate <new-project-name>
cd <new-project-name>
npm i
```

2. Rename the project in the [package.json](/package.json#L2) and update the README.md
