import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useFormContext } from "react-hook-form";

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
              className="rounded"
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default ClassicInputField;
