import { useController, useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";

interface DatePickerFieldProps {
  name: string;
  label: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ name, label }) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: undefined,
  });

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  aria-label={`Sélectionner la date pour ${label}`}
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal rounded ${
                    !field.value ? "text-muted-foreground" : ""
                  } ${fieldState.error ? "border-red-500" : ""}`} // Gestion des erreurs
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, 'yyyy/MM/dd')
                  ) : (
                    <span>Choose a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  className="rounded bg-[whitesmoke]"
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange} // Utilisation de field.onChange
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          {/* Affichage des messages d'erreur */}
          {fieldState.error && (
            <FormMessage className="text-red-500">
              {fieldState.error.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default DatePickerField;
