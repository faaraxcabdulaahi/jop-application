interface JopApplication {
    _id:string;
    company:string;
    position:string;
    location?:string;
    status:string;
    notes?:string;
    salary?:string;
    jopUrl?:string;
    order:number;
    columnId?:string;
    tags?:string[];
    description?:string;
}