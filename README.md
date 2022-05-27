# number3rd

Number utilities for 3GPP

## Install

```sh
npm install proj3rd/number3rd
```

## APIs

### Version from string

CJS

```ts
const number3rd = require("number3rd");
const [major, technical, editorial] = number3rd.versionFromString("h00");
// major = 17, technical = 0, editorial = 0
```

ESM

```ts
import { versionFromString } from "number3rd";
const [major, technical, editorial] = versionFromString("h00");
// major = 17, technical = 0, editorial = 0
```
