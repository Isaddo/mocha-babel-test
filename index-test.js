/* eslint-env mocha */

import { assert } from 'chai'
import foo from './index.js'

describe('test foo', function () {
  it('call foo', function () {
    assert.deepEqual(foo(), [])
  })
})
