import { Module } from "@nestjs/common";
import { PreprocessFunctionModuleBase } from "./base/preprocessFunction.module.base";
import { PreprocessFunctionService } from "./preprocessFunction.service";
import { PreprocessFunctionController } from "./preprocessFunction.controller";
import { PreprocessFunctionResolver } from "./preprocessFunction.resolver";

@Module({
  imports: [PreprocessFunctionModuleBase],
  controllers: [PreprocessFunctionController],
  providers: [PreprocessFunctionService, PreprocessFunctionResolver],
  exports: [PreprocessFunctionService],
})
export class PreprocessFunctionModule {}
