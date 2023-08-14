import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "src/dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksSevice: TasksService) {}

  @Get()
  findAll() {
    return this.tasksSevice.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const taks = await this.tasksSevice.findOne(id);
    if (!taks) return new NotFoundException("Task not found");
    return taks;
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.tasksSevice.create(body);
    } catch (error) {
      if (error.code == 11000) {
        throw new ConflictException("Task already exists");
      }
      throw error;
    }
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    const task = await this.tasksSevice.delete(id);
    if (!task) return new NotFoundException("Task not foundf!");
    return task;
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() body: CreateTaskDto) {
    const task = await this.tasksSevice.update(id, body);
    if (!task) return new NotFoundException("Task not found");
    return task;
  }
}
