import React, { useEffect, useState } from "react";
import { objectShape } from "../../App";

interface Props {
  person: objectShape;
}
const FormForShowingDataModal = ({ person }: Props) => {
  //   let ArrayOfPersonsObject = [{ ...person }];
  //   ArrayOfPersonsObject = [...ArrayOfPersonsObject, { ...person }];

  const [personsArray, setPersonsArray] = useState<objectShape[]>([]);
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number>(-1);
  const [updatedPerson, setUpdatedPerson] = useState<objectShape>({
    personName: "",
    gender: "",
    dOB: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (person.personName !== "")
      setPersonsArray((prevPersons) => [...prevPersons, person]);
  }, [person]);

  const handleOnDelete = (index: number) => {
    setPersonsArray((prevPersons) =>
      prevPersons.filter((_, ind) => ind !== index)
    );
  };

  const handleUpdate = (index: number) => {
    setSelectedPersonIndex(index);
    const selectedPerson = personsArray[index];
    setUpdatedPerson({ ...selectedPerson });
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPersonIndex !== -1) {
      const updatedPersonsArray = [...personsArray];
      updatedPersonsArray[selectedPersonIndex] = { ...updatedPerson };
      setPersonsArray(updatedPersonsArray);
      setSelectedPersonIndex(-1);
    }
  };

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
                <td></td>
                <td>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => handleUpdate(index)}
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    Update
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-danger "
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

      {/* Bootstrap Modal for Update Form */}

      {/* {selectedPersonIndex !== -1 && (
        <div className="modal fade" id="updateModal" tabIndex={-1}> */}
      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="updateModal"
        tabIndex={-1}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Person</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                // onClick={() => setSelectedPersonIndex(-1)}
                onClick={() => setIsModalOpen(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="personName" className="form-label">
                    Person Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="personName"
                    name="personName"
                    value={updatedPerson.personName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={updatedPerson.gender}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dOB" className="form-label">
                    DOB
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dOB"
                    name="dOB"
                    value={updatedPerson.dOB}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default FormForShowingDataModal;
