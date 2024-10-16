import { useController, useFormContext } from "react-hook-form";
import * as React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { Label } from "../../components/ui/label";

interface DatePickerFieldProps {
  name: string;
  label: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ name, label }) => {
  const { control } = useFormContext(); // To get the form context from react-hook-form
  const { field } = useController({
    name,
    control,
  });

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  return (
    <div>
      <Label className="block text-sm font-medium text-gray-700">{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal rounded",
              !selectedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? (
              format(selectedDate, "dd/MM/yyyy", { locale: fr })
            ) : (
              <span>Choisir une date</span>
            )}{" "}
            {/* Format français ici */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            className="rounded bg-[whitesmoke]"
            mode="single"
            selected={selectedDate || undefined}
            onSelect={(date) => {
              setSelectedDate(date ?? null);
              field.onChange(date ?? null);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerField;
