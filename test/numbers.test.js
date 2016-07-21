import { expect } from 'chai'
import { primes } from '../numbers'

describe('Prime numbers', function () {
  it('Should include 2', function () {
    expect(primes).to.contain(2)
  })

  it('Should not include 1', function () {
    expect(primes).to.not.contain(1)
  })
})
