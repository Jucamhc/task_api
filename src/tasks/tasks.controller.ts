import { Controller, Get, Post, Delete, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private tasksSevice: TasksService) {}

  @Get()
  findAll() {
    return "Get all tasks";
  }

  @Get(":id")
  findOne() {
    return "Get One Tasks";
  }

  @Post()
  create() {
    return "Create Task";
  }

  @Delete(":id")
  delete() {
    return "Delete Task";
  }

  @Put(":id")
  update() {
    return "Update Task";
  }
}
