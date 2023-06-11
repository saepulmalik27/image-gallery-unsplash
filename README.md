## Getting Started

1. clone project from this repo url [https://github.com/saepulmalik27/pintar-ventura-test]
2. go to porject folder

```bash
cd pintar-venture-test
```

3. i recommend you using yarn here so please if install yarn first

```bash
npm i -g yarn
```

4. install all the depedencies in project using this command

```bash
yarn install
or
yarn
```

5. setup environment in .env or .env.local

```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY
NEXT_PUBLIC_UNSPLASH_API_URL=https://api.unsplash.com
```

6. after finish install all the dependencies, for run your project localy run this command below

```bash
yarn dev
```

## How this project formated & structured

1. using `typescript`, code formated using `prettier` with standar format you may setup on file `.prettierrc.json`
2. and `eslints` as default linter you can add additional linter on file `.eslintrc.json`
3. also using husky for check format & linter before commit,
4. using `lint-staged` so husky cek format & linter file that only change or add, you may find setup in `lint-staged-config.js`
