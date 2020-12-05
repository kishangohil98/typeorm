import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Question } from "./Question";

@Entity()
export class Test{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_name: string;

    @ManyToMany(() => Question, question =>  question.tests)
    questions: Question[];

}