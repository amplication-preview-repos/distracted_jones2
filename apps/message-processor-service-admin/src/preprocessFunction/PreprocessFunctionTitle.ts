import { PreprocessFunction as TPreprocessFunction } from "../api/preprocessFunction/PreprocessFunction";

export const PREPROCESSFUNCTION_TITLE_FIELD = "id";

export const PreprocessFunctionTitle = (
  record: TPreprocessFunction
): string => {
  return record.id?.toString() || String(record.id);
};
