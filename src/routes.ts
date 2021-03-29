import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Jean Santos",
        duration: 10

    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Jean Santos"
    })

    return response.send();

}