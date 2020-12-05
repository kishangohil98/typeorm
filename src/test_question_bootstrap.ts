import { getRepository } from "typeorm"
import { Question } from "./entity/Question"
import { Test } from "./entity/Test"

export const store_question = async () => {

    const testRepo = getRepository(Test)

    const test1 = new Test()
    test1.test_name = "test3";
    await testRepo.save(test1).catch((err) => console.log(err))


    const test2 = new Test()
    test2.test_name = "test3";
    await testRepo.save(test2).catch((err) => console.log(err))


    const queRepo = getRepository(Question)

    const question = new Question()
    question.question_title = "This is question three";
    question.tests = [ test1, test2 ];

    await queRepo.save(question).catch((err)=>console.log(err))
    
}

export const get_questions = async () => {
    const queRepo = getRepository(Question)

    const questions = await queRepo.find();
    console.log(questions);    
}

export const get_tests =  async () => {
    const testRepo = getRepository(Test);

    const tests = await testRepo.find({ relations: ["questions"]});
    console.log(tests)
    
}


