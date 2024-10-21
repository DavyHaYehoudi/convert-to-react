import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import { useFormContext, Controller } from "react-hook-form";

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const SelectField = ({
  name,
  label,
  options,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel htmlFor={name} >{label}</FormLabel>
          <FormControl>
            {/* Utilisation de Controller pour mieux gérer les props */}
            <Controller
              name={name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select aria-label={label} onValueChange={onChange} value={value}>
                  <SelectTrigger className="w-full" aria-labelledby={label}>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-[whitesmoke]">
                    {options.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="select-item"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
