import { createContext, useState, ReactNode } from "react";
import { format } from 'date-fns';

export type valueprops = {
  surname: string;
  firstName: string;
  birthday: string;
  phoneNo: string;
  email: string;
  presentSchool: string;
  classLevel: string;
  schoolLocation: string
  password: string;
  reasonForJoining:string
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
    firstName: "",
    birthday: "",
    phoneNo: "",
    email: "",
    presentSchool: "",
    classLevel: "",
    schoolLocation: "",
    password: "",
    reasonForJoining:""
  });

  const [error, seterror] = useState<string[]>([]);

  return (
    <Context.Provider value={{ formdata, setformdata, error, seterror }}>
      {children}
    </Context.Provider>
  );
};
