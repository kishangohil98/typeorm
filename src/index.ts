import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { insert,get_all,get_one,update_age,delete_one,search_by_name } from './bootstrap';
import { profile_insert,get_profile_data } from './profile_data'
import { post_store,post_store2,get_post_data } from './post_bootstrap'
import { store_question ,get_questions,get_tests} from './test_question_bootstrap'

createConnection().then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "sdsd";
    // user.lastName = "Sawdsd";
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    //  console.log("Here you can setup and run express/koa/any other framework.");

    //await insert().catch((err)=> console.log(err));

    //await get_all().catch((err)=> console.log(err));
    //await get_one(7).catch((err)=> console.log(err));
    //await update_age(7, 27).catch((err)=> console.log(err));
    //await delete_one(1).catch((err)=> console.log(err));
    //await search_by_name('k').catch((err)=> console.log(err));


    //await profile_insert().catch((err) => console.log(err))

    //await get_profile_data().catch((err) => console.log(err))

    //await post_store().catch((err) => console.log(err))
    //await post_store2().catch((err) => console.log(err))
    //await get_post_data().catch((err) => console.log(err))


    //await store_question().catch((err) => console.log(err))
    await get_questions().catch((err) => console.log(err))
    //await get_tests().catch((err) => console.log(err))

    console.log("index.ts file executed successfully");

}).catch(error => console.log(error));
