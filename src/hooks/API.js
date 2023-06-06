import React, { useState, useEffect } from "react";
import axios from "axios";

export const useCallApiHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/logements.json"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return data;
};
