import { SubjectResponse } from "./subject";
import { Teachers } from "./teachers";

export class StudentSubject {
    subject: SubjectResponse;
    teacher: Teachers;
    constructor() {
        this.subject = new SubjectResponse();
        this.teacher = new Teachers()
    }
}