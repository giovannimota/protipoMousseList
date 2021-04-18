export interface Roles {
  owner: string;
  contributor: string[];
  reader: string[];
}

export interface Todo {
  _id: string;
  title: string;
  description: string;
  listId: string;
  initDate: string;
  deadlineDate: string;
  warningDate: number;
  warningType: string;
  done: boolean;
  expired: boolean;
  alert: boolean;
  role: string;
  roles: Roles;
}