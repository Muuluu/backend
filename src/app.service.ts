import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize:Sequelize){
    this.sequelize.sync()
}
  getHello(): string {
    return ''+( 5+10);
  }
  createUser(){
  return 'done'
  }
}
