import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreprocessFunctionServiceBase } from "./base/preprocessFunction.service.base";

@Injectable()
export class PreprocessFunctionService extends PreprocessFunctionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
