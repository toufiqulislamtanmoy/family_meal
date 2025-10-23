// utils/formHelpers.ts
export function handleInputChange<T extends Record<string, unknown>>(
  e: React.ChangeEvent<HTMLInputElement>,
  setValues: React.Dispatch<React.SetStateAction<T>>
) {
  const { name, value } = e.target;
  setValues((prev) => ({ ...prev, [name]: value }));
}
