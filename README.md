# node-ts

## step
- pnpm init
- pnpm add typescript -D
- pnpm tsc --init 
```生成 `tsconfig.json` 文件```
- pnpm add nodemon ts-node @types/node -D

## script config
```
"scripts": {
  "start:dev": "nodemon --watch src src/index.ts",
  "start": "ts-node src/index.ts",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

## run
dev env run: `pnpm start:dev`
prod env run: `pnpm start`