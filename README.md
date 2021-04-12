# curriculum

Translations of curriculum codes to clear text descriptions

## Installing

`npm i -S @skolplattformen/embedded-api` or `yarn add @skolplattformen/embedded-api`

## Calling

```javascript
import parse from '@skolplattformen/curriculum'

parse('MU') // { code: 'MU', category: '', name: 'Musik' }
parse('M1SP') // { code: 'M1SP', category: 'Moderna språk, elevens val', name: 'Spanska' }
parse('M2TY') // { code: 'M2TY', category: 'Moderna språk, språkval', name: 'Tyska' }
parse('MLSMI') // { code: 'M2TY', category: 'Modersmål', name: 'Samiska' }
```
