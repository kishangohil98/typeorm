import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    profile_name: string;

    @Column()
    profile_pic_link: string;

    @OneToOne(() =>  User, user => user.profile)
    user: User;
}