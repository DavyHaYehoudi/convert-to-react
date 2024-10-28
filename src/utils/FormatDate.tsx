import { format } from "date-fns";
import { enUS } from "date-fns/locale";
export const formatDate = (date: Date | undefined): string => {
  if (!date) return "";
  return format(date, "yyyy MMMM dd", { locale: enUS });
};
