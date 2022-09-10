import {User} from './user';

export class Domaine {
  idDomain?: string | undefined;
  domainName?: string;
  dateCreation?: Date;
  root?: string;
  hebergementType?: string;
  idDeBase ?:string;
  user : User
}
