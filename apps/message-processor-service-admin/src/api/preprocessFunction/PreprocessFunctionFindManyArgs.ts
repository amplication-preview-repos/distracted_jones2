import { PreprocessFunctionWhereInput } from "./PreprocessFunctionWhereInput";
import { PreprocessFunctionOrderByInput } from "./PreprocessFunctionOrderByInput";

export type PreprocessFunctionFindManyArgs = {
  where?: PreprocessFunctionWhereInput;
  orderBy?: Array<PreprocessFunctionOrderByInput>;
  skip?: number;
  take?: number;
};
