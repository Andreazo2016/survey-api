import { describe, it } from '@jest/globals';
import faker from 'faker';
import { ValidationFactory } from '@/tests/application/factories/validationFactory';
import { InvalidParamError } from '@/application/errors';

describe('UuidValidation', () => {
  it('should be able to return erro if uuid format is invalid', async () => {
    const user = {
      id: 'invalid-uuid'
    }
    const uuidValidation = ValidationFactory.uuidValidation()

    const validationResult = await uuidValidation.validate(user)

    expect(validationResult).toBeInstanceOf(InvalidParamError)

  })

  it('should be able to return nothing if uuid is valid', async () => {
    const user = {
      id: faker.datatype.uuid()
    }
    const uuidValidation = ValidationFactory.uuidValidation()

    const validationResult = await uuidValidation.validate(user)

    expect(validationResult).toBeUndefined()

  })

})