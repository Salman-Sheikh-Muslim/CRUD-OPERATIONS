import React, { useState } from "react";
import { objectShape } from "../../App";

interface Props {
  onClick: (person: objectShape) => void;
}
const FormForInsertingDataModal = ({ onClick }: Props) => {
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

    setPerson({
      personName: "",
      gender: "",
      dOB: "",
    });
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {" "}
          Launch demo modal{" "}
        </button>
      </p>
      {/* <!-- Modal --> */}
      <div id="exampleModal" className="modal fade" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="exampleModalLabel" className="modal-title">
                Modal title
              </h5>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
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
              </form>
              <button
                className="btn btn-secondary mt-3 me-3"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-primary mt-3"
                type="submit"
                // data-bs-dismiss="modal"
                onClick={handleOnSubmit}
              >
                Add
              </button>
            </div>
            <div className="modal-footer">
              {/* <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                // data-bs-dismiss="modal"
                onClick={handleOnSubmit}
              >
                Add
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormForInsertingDataModal;
