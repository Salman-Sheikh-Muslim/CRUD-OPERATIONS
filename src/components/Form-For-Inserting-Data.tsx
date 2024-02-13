import React, { useState } from "react";
import { objectShape } from "../App";

interface Props {
  onClick: (person: objectShape) => void;
}
const FormForInsertingData = ({ onClick }: Props) => {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [expDate, setExpDate] = useState("");

  const [person, setPerson] = useState({
    personName: "",
    gender: "",
    dOB: "",
  });
  const handleOnSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(person);
    onClick(person);
  };

  return (
    <>
      <form>
        <label htmlFor="name" className="form-label">
          Person Name
        </label>
        <input
          className="form-control"
          id="name"
          value={person.personName}
          onChange={(event) =>
            setPerson({ ...person, personName: event.target.value })
          }
          type="text"
        />
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <input
          className="form-control"
          id="gender"
          value={person.gender}
          onChange={(event) =>
            setPerson({ ...person, gender: event.target.value })
          }
          type="text"
        />
        <label htmlFor="DOB" className="form-label">
          DOB
        </label>
        <input
          className="form-control "
          id="DOB"
          value={person.dOB}
          onChange={(event) =>
            setPerson({ ...person, dOB: event.target.value })
          }
          type="text"
        />
        <button
          className="btn btn-primary mt-3 ms-1"
          type="submit"
          onClick={handleOnSubmit}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default FormForInsertingData;
