import React, { useEffect, useState } from "react";
import { objectShape } from "../../App";

interface Props {
  person: objectShape;
}
const FormForShowingDataModal = ({ person }: Props) => {
  //   let ArrayOfPersonsObject = [{ ...person }];
  //   ArrayOfPersonsObject = [...ArrayOfPersonsObject, { ...person }];

  const [personsArray, setPersonsArray] = useState<objectShape[]>([]);

  useEffect(() => {
    if (person.personName !== "")
      setPersonsArray((prevPersons) => [...prevPersons, person]);
  }, [person]);

  const handleOnDelete = (index: number) => {
    setPersonsArray((prevPersons) =>
      prevPersons.filter((_, ind) => ind !== index)
    );
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
          {personsArray.length > 0 &&
            personsArray.map((person, index) => (
              <tr key={index}>
                <td>{person.personName}</td>
                <td>{person.gender}</td>
                <td>{person.dOB}</td>
                <td>
                  <button
                    className="btn btn-primary "
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

export default FormForShowingDataModal;
