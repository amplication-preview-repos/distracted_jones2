/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PreprocessFunction as PrismaPreprocessFunction,
} from "@prisma/client";

export class PreprocessFunctionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PreprocessFunctionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.preprocessFunction.count(args);
  }

  async preprocessFunctions(
    args: Prisma.PreprocessFunctionFindManyArgs
  ): Promise<PrismaPreprocessFunction[]> {
    return this.prisma.preprocessFunction.findMany(args);
  }
  async preprocessFunction(
    args: Prisma.PreprocessFunctionFindUniqueArgs
  ): Promise<PrismaPreprocessFunction | null> {
    return this.prisma.preprocessFunction.findUnique(args);
  }
  async createPreprocessFunction(
    args: Prisma.PreprocessFunctionCreateArgs
  ): Promise<PrismaPreprocessFunction> {
    return this.prisma.preprocessFunction.create(args);
  }
  async updatePreprocessFunction(
    args: Prisma.PreprocessFunctionUpdateArgs
  ): Promise<PrismaPreprocessFunction> {
    return this.prisma.preprocessFunction.update(args);
  }
  async deletePreprocessFunction(
    args: Prisma.PreprocessFunctionDeleteArgs
  ): Promise<PrismaPreprocessFunction> {
    return this.prisma.preprocessFunction.delete(args);
  }
}