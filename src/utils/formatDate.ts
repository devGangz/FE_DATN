import { format } from "date-fns";

export const formatDate = (date: Date): string => {
  return format(new Date(date), "HH:mm dd/MM/yyyy");
};
