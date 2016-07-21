'use strict'

import { primes } from './numbers'

const squares = primes.map(function (x) {
  return x * x
})

console.log(primes, squares)
