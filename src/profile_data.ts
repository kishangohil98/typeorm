import { Profile } from "./entity/Profile"
import { getRepository } from "typeorm";
import { User } from "./entity/User";

export const profile_insert = async () => {
    const profileRepo = getRepository(Profile);

    const profile = new Profile();

    profile.profile_name = "PROFILE_NAME2";
    profile.profile_pic_link = "pic.jpg";

    await profileRepo.save(profile).catch((err) => console.log(err));
    
    const userRepo = getRepository(User);

    const user = new User()

    user.firstName = "A2";
    user.lastName = "Badgujar";
    user.age = 99;
    user.city = "Vadodara";

    user.profile = profile;

    await userRepo.save(user).catch((err)=>console.log(err));

}

export const get_profile_data = async () => {
    const profileRepo = getRepository(Profile)

    const profiles = await profileRepo.find({ relations: ["user"]});

    console.log(profiles);
}

