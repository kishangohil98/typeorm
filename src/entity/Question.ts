import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Test } from "./Test";

@Entity()
export class Question{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question_title: string;

    @ManyToMany(() => Test, test => test.questions,{
        eager: true
    })
    @JoinTable()
    tests: Test[];

}