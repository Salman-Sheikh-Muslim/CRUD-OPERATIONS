import React, { useEffect, useState } from "react";
import { objectShape } from "../../App";

interface Props {
  person: objectShape;
}

const FormForShowingDataNew = ({ person }: Props) => {
  const [personsArray, setPersonsArray] = useState<objectShape[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editPerson, setEditPerson] = useState<objectShape>({
    personName: "",
    gender: "",
    dOB: "",
  });

  useEffect(() => {
    if (person.personName !== "") {
      setPersonsArray((prevPersons) => [...prevPersons, person]);
    }
  }, [person]);

  const handleOnDelete = (index: number) => {
    setPersonsArray((prevPersons) =>
      prevPersons.filter((_, ind) => ind !== index)
    );
  };

  const handleOnEdit = (index: number) => {
    setEditIndex(index);
    setEditPerson(personsArray[index]);
  };

  const handleUpdateRow = (index: number) => {
    setPersonsArray((prevPersons) =>
      prevPersons.map((person, ind) => (ind === index ? editPerson : person))
    );
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditPerson({ personName: "", gender: "", dOB: "" });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditPerson((prevEditPerson) => ({ ...prevEditPerson, [name]: value }));
  };

  return (
    <>
      <table className="">
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {personsArray.map((person, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="personName"
                      value={editPerson.personName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="gender"
                      value={editPerson.gender}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="dOB"
                      value={editPerson.dOB}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary ms-1"
                      type="button"
                      onClick={() => handleUpdateRow(index)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger ms-1"
                      type="button"
                      onClick={handleCancelEdit}
                    >
                      X
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{person.personName}</td>
                  <td>{person.gender}</td>
                  <td>{person.dOB}</td>
                  <td>
                    <button
                      className="btn btn-primary ms-1"
                      type="button"
                      onClick={() => handleOnEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ms-1"
                      type="button"
                      onClick={() => handleOnDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FormForShowingDataNew;
