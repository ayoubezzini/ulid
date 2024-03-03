# TypeScript ULID Generator

This package provides a lightweight, dependency-free utility for generating Universally Unique Lexicographically Sortable Identifiers (ULIDs) in TypeScript applications. ULIDs offer a sortable alternative to UUIDs, combining a timestamp with a series of random characters in a way that can be sorted lexicographically.

## Features

- **Lightweight and Fast:** No external dependencies.
- **Type-Safe:** Fully implemented in TypeScript, providing type safety out of the box.
- **Universally Unique:** Generates ULIDs that are unique across time and space.
- **Lexicographically Sortable:** ULIDs are sortable by their creation time.

## Usage

Import the `generateULID` function from the package and use it to generate a ULID:

```typescript
import { generateULID } from 'jsr:@yi/ulid@1';

const ulid = generateULID();
console.log(ulid); // Example output: 01F8MECHZX3TBDSZ7XRADM79XE
```

## API

`generateULID(): string`
Generates and returns a new ULID as a string.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENCE) file for details.

## Acknowledgments

Inspired by the original [ULID specification](https://wiki.tcl-lang.org/page/ULID).
