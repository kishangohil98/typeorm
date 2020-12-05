import { getRepository } from "typeorm"
import { User } from "./entity/User";
import { Post } from "./entity/Post";

export const post_store = async () => {
    const postRepo = getRepository(Post)

    const post1 = new Post();
    post1.title = "Title1";
    await postRepo.save(post1).catch((err)=> console.log(err));

    const post2 = new Post();
    post2.title = "Title2";
    await postRepo.save(post2).catch((err)=> console.log(err));


    const userRepo = getRepository(User)
    const user = new User();
    
    user.firstName = "Akashmmm";
    user.lastName = "Badgujar";
    user.age = 99;
    user.city = "Vadodara";
    user.posts = [post1, post2];

    await userRepo.save(user).catch((err) => console.log(err));

}

export const post_store2 =  async () => {
    const userRepo = getRepository(User)

    const user = new User()

    user.firstName = "Post";
    user.lastName = "store";
    user.age = 99;
    user.city = "Vadodara";
    
    await userRepo.save(user).catch((err) => console.log(err))

    const postRepo = getRepository(Post)

    const post1 = new Post();
    post1.title = "Title from storing";
    post1.user = user;
    await postRepo.save(post1).catch((err)=> console.log(err))

    const post2 = new Post();
    post2.title = "Title from storing2";
    post2.user = user;
    await postRepo.save(post2).catch((err)=> console.log(err))

}

export const get_post_data = async () => {
    const postRepository = getRepository(Post);

    const posts = await postRepository.find({ relations: ["user"] });

    console.log(posts);
}

