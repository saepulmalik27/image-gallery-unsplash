## Demo Project

open [DEMO PROJECT](https://pintar-ventura-test.vercel.app/)

## Project Description & Tools

this project is web app for searching image using public api UNSPLASH, here some feature that include in this project

| No  | Description                                 |
| --- | ------------------------------------------- |
| 1   | SearchBar on hero and header                |
| 2   | Random image in hero section                |
| 3   | Lazy load image and scroll reveal animation |
| 4   | Infinity scroll                             |
| 5   | Share image to social media                 |
| 6   | favorite image                              |

this project using tools

| No  | Description                 |
| --- | --------------------------- |
| 1   | NextJs                      |
| 2   | React                       |
| 3   | Typescript                  |
| 4   | Tailwindcss                 |
| 5   | HeadlessUI                  |
| 6   | react-intersection-observer |
| 7   | framer-motion               |

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
