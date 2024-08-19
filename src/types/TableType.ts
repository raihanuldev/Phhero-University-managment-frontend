import { TSemester } from "./aacademicMangment.type";

export type DataType = Pick<
  TSemester,
  "_id" | "endMonth" | "name" | "startMonth" | "year"
>;
