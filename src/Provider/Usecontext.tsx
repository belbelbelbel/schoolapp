import { createContext, useState, ReactNode } from "react";
export type valueprops = {
  surname: string;
  firstname: string;
  birthday: string;
  phonenumber: string;
  email: string;
  school: string;
  class: string;
  reason: string;
  password :"",
  error: string[];
};
type dataprops = {
  formdata: valueprops;
  setformdata: React.Dispatch<React.SetStateAction<valueprops>>;
  error: string[]; 
  seterror: React.Dispatch<React.SetStateAction<string[]>>;
};
type childrenprops = {
  children: ReactNode;
};

export const Context = createContext<dataprops | null>(null);

export const Usecontext = ({ children }: childrenprops) => {
  const [formdata, setformdata] = useState<valueprops>({
    surname: "",
    firstname: "",
    birthday: "",
    phonenumber: "",
    email: "",
    school: "",
    class: "",
    reason: "",
    password :"",
    error: [], 
  });
  const [error, seterror] = useState<string[]>([]);

  return (
    <Context.Provider value={{ formdata, setformdata, error, seterror }}>
      {children}
    </Context.Provider>
  );
};
