import * as graphql from "@nestjs/graphql";
import { PreprocessFunctionResolverBase } from "./base/preprocessFunction.resolver.base";
import { PreprocessFunction } from "./base/PreprocessFunction";
import { PreprocessFunctionService } from "./preprocessFunction.service";

@graphql.Resolver(() => PreprocessFunction)
export class PreprocessFunctionResolver extends PreprocessFunctionResolverBase {
  constructor(protected readonly service: PreprocessFunctionService) {
    super(service);
  }
}
