import { User } from "./entity/User"
import { getRepository ,Like} from "typeorm";

export const insert = async () => {

    const userRepo = getRepository(User);

    let user = new User();
    
    user.firstName = "Akash";
    user.lastName = "Badgujar";
    user.age = 99;
    user.city = "Vadodara";

    await userRepo.save(user).catch((err) => console.log(err));

    console.log("User saved from bootstrap.insert");

}

export const get_all = async () => {

    const userRepo = getRepository(User);

    const user_all = await userRepo.find({ relations: ["posts","profile"] }).catch((err)=> console.log(err));

    console.log(user_all);
    
}

export const get_one = async (id) => {
    const userRepo = getRepository(User);
    
    const user = await userRepo.findOne(id);
    console.log(user)
}

export const update_age = async (id, age) => {
    const userRepo = getRepository(User)

    const user = await  userRepo.findOne(id)

    user.age = age;

    await userRepo.save(user).catch((err)=>console.log(err))

    console.log(user);
}

export const delete_one = async (id) => {
    const userRepo = getRepository(User);

    const user = await  userRepo.findOne(id)


    await userRepo.remove(user).catch((err)=> console.log(err))

    console.log("User deleted successfully");
}

export const search_by_name = async (name) => {
    const userRepo = getRepository(User);
    
    const users = await userRepo.find({ firstName: Like(`%${name}%`)}).catch((err)=> console.log(err));

    console.log(users);
}




