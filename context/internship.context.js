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
  const [showLocationModel, setshowLocationModel] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getInternship = async () => {
    try {
      await axios
        .get(`http://localhost:8800/internship?page=${page}&limit=18`)
        .then((res) => {
          const resData = res.data;
          console.log(resData);
          setInternship(resData.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getPaginatedInternships = async () => {
    if (page < internships.length) {
      setPage(page + 1);
    }
    getInternship();
  };

  const setLocationModel = () => {
    setshowLocationModel(!showLocationModel);
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
    showLocationModel,
    setLocationModel,
    getPaginatedInternships,
  };
};
