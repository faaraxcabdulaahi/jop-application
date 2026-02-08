export interface JopApplication {
  _id: string;
  company: string;
  position: string;
  location?: string;
  status: string;
  notes?: string;
  salary?: string;
  jopUrl?: string;
  order: number;
  columnId?: string;
  tags?: string[];
  description?: string;
}

export interface Column {
  _id: string;
  name: string;
  order: number;
  jopApplications: JopApplication[];
}


export interface Board {
    _id:string;
    name:string;
    columns:Column[];
}

