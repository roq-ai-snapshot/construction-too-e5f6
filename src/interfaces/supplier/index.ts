import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user?: UserInterface[];

  _count?: {
    user?: number;
  };
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
}
