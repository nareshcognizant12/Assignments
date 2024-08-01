import {Container} from 'inversify';
import { Idepartment, Iemployee } from '../interfaces';
import { TYPES } from './types';
import { Employee } from '../employee';
import { Department } from '../department';
export const container=new Container();
container.bind<Iemployee>(TYPES.Employee).to(Employee);
container.bind<Idepartment>(TYPES.Department).to(Department);