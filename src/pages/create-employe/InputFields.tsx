import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/ui/select";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type?: "text" | "date" | "select" | "number";
  options?: { value: string; label: string }[]; // Pour les options de sélection
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type = "text", options, placeholder }) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "select" ? (
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="bg-[whitesmoke]">
                  {options?.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="select-item ">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input type={type} placeholder={placeholder} {...field} className="rounded" />
            )}
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default InputField;
