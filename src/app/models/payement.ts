import {User} from './user';

export class Payement{
  idPayement?:number ;
  type?: string;
  date?: string;
  status?: number;
  idUser ?: string;
  user: User
}
