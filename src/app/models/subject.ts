import { Language } from "./language";
import { Standard } from "./standard";

export class Subject {
    name: string;
    standardId: any;
    languageId: any;
    constructor() {
        this.name = '';
        this.standardId = 0;
        this.languageId = '';
    }
}
export class SubjectResponse {
    id: number;
    name: string;
    standard: Standard;
    subjectLanguages: SubjectLanguages[];
    constructor() {
        this.id = 0;
        this.name = '';
        this.standard = new Standard();
        this.subjectLanguages = []
    }
}
export class SubjectLanguages {
    language: Language;
    constructor() {
        this.language = new Language();
    }
}
