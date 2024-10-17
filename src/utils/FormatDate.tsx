import { format } from "date-fns";
import { fr } from "date-fns/locale";
export const formatDate = (date: Date | undefined): string => {
  if (!date) return "";
  return format(date, "dd MMMM yyyy", { locale: fr });
};
