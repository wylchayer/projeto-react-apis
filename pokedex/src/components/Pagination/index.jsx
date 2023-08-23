import React, { useEffect } from "react";
import { ButtonPagination, PaginationContainer } from "./style";

const Pagination = ({ setCurrentPage, totalPages }) => {
  useEffect(() => {
    for (let i = 0; i < totalPages; i++) {
      const element = document.getElementById(i);
      element.classList.remove("active");
    }
    document.getElementById("0") &&
      document.getElementById("0").classList.add("active");
  }, [totalPages]);

  const changeButton = (e) => {
    for (let i = 0; i < totalPages; i++) {
      const element = document.getElementById(i);
      element.classList.remove("active");
    }

    e.target.classList.add("active");
    setCurrentPage(e.target.value);
  };

  return (
    <PaginationContainer>
      {totalPages &&
        Array.from(Array(totalPages), (element, index) => {
          return (
            <ButtonPagination
              key={index}
              id={index}
              value={index}
              onClick={changeButton}
            >
              {index + 1}
            </ButtonPagination>
          );
        })}
    </PaginationContainer>
  );
};

export default Pagination;
