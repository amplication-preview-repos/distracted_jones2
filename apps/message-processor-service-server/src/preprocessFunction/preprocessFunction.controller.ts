import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreprocessFunctionService } from "./preprocessFunction.service";
import { PreprocessFunctionControllerBase } from "./base/preprocessFunction.controller.base";

@swagger.ApiTags("preprocessFunctions")
@common.Controller("preprocessFunctions")
export class PreprocessFunctionController extends PreprocessFunctionControllerBase {
  constructor(protected readonly service: PreprocessFunctionService) {
    super(service);
  }
}
