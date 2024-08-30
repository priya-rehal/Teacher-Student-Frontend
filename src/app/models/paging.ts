export class Paging {
    pageNumber: number;
    pageSize: number;
    searchItem: string;
    constructor() {
        this.pageNumber = 0;
        this.pageSize = 2;
        this.searchItem = ""
    }
}
