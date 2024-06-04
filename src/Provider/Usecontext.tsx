import { createContext, useState, ReactNode, useEffect } from "react";
import { format } from 'date-fns';

export type valueprops = {
  surname: string;
  firstName: string;
  birthday: string;
  phoneNo: string;
  phone:string,
  email: string;
  presentSchool: string;
  fax:string,
  message:string,
  classLevel: string;
  schoolLocation: string
  password: string;
  reasonForJoining:string,
  name: string,
};

type dataprops = {
  formdata: valueprops;
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  setformdata: React.Dispatch<React.SetStateAction<valueprops>>;
  error: string[];
  seterror: React.Dispatch<React.SetStateAction<string[]>>;
};

type childrenprops = {
  children: ReactNode;
};
const token = localStorage.getItem('token');
export const Context = createContext<dataprops | null>(null);
export const Usecontext = ({ children }: childrenprops) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
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
    reasonForJoining:"",
    fax:"",
    name:"",
    phone:"",
    message:""
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
    }
}, []);
console.log(token)
  const [error, seterror] = useState<string[]>([]);
  return (
    <Context.Provider value={{ formdata, setformdata, error, seterror,isLoggedIn,setIsLoggedIn }}>
      {children}
    </Context.Provider>
  );
};
