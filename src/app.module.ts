import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://root:root123@localhost:27017/?authMechanism=DEFAULT&tls=false",
    ),
    TasksModule,
  ],
})
export class AppModule {}
