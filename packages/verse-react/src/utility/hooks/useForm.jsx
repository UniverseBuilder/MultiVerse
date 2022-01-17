import { useMemo } from "react";

import { useSelector } from "react-redux";

import { byString } from "../functions";

export function useForm(model) {
  const { form } = useSelector((state) => state.form); 
  const value = useMemo(() => byString(form, model), [model, form]);
  return value;
}
