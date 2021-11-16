import axios from "axios";
import React, { createContext } from "react";

export const InternshipContext = createContext();

export const InternshipProvider = (props) => {
  const data = useProvideInternship();
  return (
    <InternshipContext.Provider value={data}>
      {props.children}
    </InternshipContext.Provider>
  );
};

const useProvideInternship = () => {
  const [internships, setInternship] = React.useState([]);
  const [activeId, setActiveId] = React.useState();

  const getInternship = async () => {
    try {
      await axios
        .get("http://localhost:8800/internship?page=1&limit=18")
        .then((res) => {
          const resData = res.data;
          console.log(resData);
          setInternship(resData.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const setInternshipId = async (id) => {
    try {
      setActiveId(id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    internships,
    getInternship,
    setInternshipId,
    activeId,
  };
};
