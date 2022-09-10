import {User} from './user';

export class Payement{
  idPayement?:number ;
  type?: string;
  date?: Date;
  status?: number;
  idUser ?: string;
  user: User
}
