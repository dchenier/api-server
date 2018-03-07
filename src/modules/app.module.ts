import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProgramModule } from "./Program"
import { QueryModule } from "./query"
import { KeyModule } from "./key"
import { ProtectedModule } from "./protected"
import { ApiModule } from "./api"

@Module({
  modules: [
      ProgramModule,
      QueryModule,
      KeyModule,
      ProtectedModule,
      ApiModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
