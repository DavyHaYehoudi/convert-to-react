import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useController, useFormContext } from "react-hook-form";

interface ClassicInputFieldProps {
  name: string;
  label: string;
  type?: "text" | "number";
  placeholder?: string;
}

const ClassicInputField: React.FC<ClassicInputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
}) => {
  const { control } = useFormContext();
  const { fieldState } = useController({
    name,
    control,
    defaultValue: undefined,
  });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={`rounded ${
                !field.value ? "text-muted-foreground" : ""
              } ${fieldState.error ? "border-red-500" : ""}`}
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default ClassicInputField;
