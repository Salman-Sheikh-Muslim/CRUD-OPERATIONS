import React, { useEffect, useState } from "react";
import { objectShape } from "../App";

interface Props {
  person: objectShape;
}
const FormForShowingData = ({ person }: Props) => {
  //   let ArrayOfPersonsObject = [{ ...person }];
  //   ArrayOfPersonsObject = [...ArrayOfPersonsObject, { ...person }];

  const [personsArray, setPersonsArray] = useState<objectShape[]>([]);

  useEffect(() => {
    setPersonsArray((prevPersons) => [...prevPersons, person]);
  }, [person]);

  const handleOnDelete = (index: number) => {
    return personsArray.filter((_, ind) => (ind = index));
  };
  // Call handleAddPerson whenever a new person object is received

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Gender</th>
            <th>DOB</th>
          </tr>
          {personsArray.map((person, index) => (
            <tr key={index}>
              <td>{person.personName}</td>
              <td>{person.gender}</td>
              <td>{person.dOB}</td>
              <td>
                <button
                  className="btn btn-primary mt-3 ms-1"
                  type="button"
                  onClick={() => handleOnDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
};

export default FormForShowingData;
