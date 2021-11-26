import { describe, it } from '@jest/globals';
import faker from 'faker';
import { CreateSurvey } from '@/domain/survey/useCases/createSurvey';
import { FakeSurveyRepository } from '@/tests/domain/survey/fakeRepository/fakeSurveyRepository';


type sutType = {
  createSurveyService: CreateSurvey;
  fakeSurveyRepository: FakeSurveyRepository;
}
const makeSut = (): sutType => {
  const fakeSurveyRepository = new FakeSurveyRepository()
  const createSurveyService = new CreateSurvey(fakeSurveyRepository)
  return {
    fakeSurveyRepository,
    createSurveyService
  }
}



describe('create User case', () => {
  it('Should be able to call repository method', async () => {
    const { createSurveyService, fakeSurveyRepository } = makeSut()

    const fakeCreateMethodSpy = jest.spyOn(fakeSurveyRepository, 'create')

    const survey = {
      name: faker.name.findName(),
      user_creator_id: faker.datatype.uuid()
    }

    await createSurveyService.execute(survey);

    expect(fakeCreateMethodSpy).toBeCalled()

  })

  it('Should be able to create a new user', async () => {
    const { createSurveyService } = makeSut()

    const survey = {
      name: faker.name.findName(),
      user_creator_id: faker.internet.email()
    }

    const surveyCreated = await createSurveyService.execute(survey);

    expect(surveyCreated).toHaveProperty('id')
    expect(surveyCreated.name).toEqual(survey.name)
    expect(surveyCreated.user_creator_id).toEqual(survey.user_creator_id)

  })

})