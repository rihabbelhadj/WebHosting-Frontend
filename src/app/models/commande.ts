import {Domaine} from './domaine';
import {Service} from './service';

export class Commande {
  idCommande?: string | undefined;
  idDomaine?: string ;
  idService?: string;
  prix?: string;
  nbAnnee?: number;
  tVA?: string;
  isValid?:boolean;
  dom:Domaine;
  serv:Service;

}
