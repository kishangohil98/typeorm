import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { networkInterfaces } from "os";
import { Post } from "./Post";
import { Profile } from "./Profile";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        default: 99
    })
    age: number;

    @Column({
        nullable: true,
        length: 100
    })
    city: string;

    @OneToOne(() => Profile, profile => profile.user)
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Post, post => post.user )
    posts: Post[];


    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp'
    })
    current_date: Date;
}
