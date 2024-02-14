import { useState } from "react";

import FormForInsertingData from "./components/Form/Form-For-Inserting-Data";
import FormForShowingData from "./components/Form/Form-For_Showing-Data";
import { objectTraps, set } from "immer/dist/internal.js";
import FormForShowingDataNew from "./components/Form/Form-For_Showing-Data copy";
import FormForShowingDataModal from "./components/ModalForm/Form-For_Showing-Data";
import FormForInsertingDataModal from "./components/ModalForm/Form-For-Inserting-Data";
export interface objectShape {
  personName: string;
  gender: string;
  dOB: string;
}

function App() {
  const [personObject, setObject] = useState<objectShape>({
    personName: "",
    gender: "",
    dOB: "",
  });

  const handleSetObject = (person: objectShape) => {
    setObject({ ...person });
    console.log("From App: " + person.personName);
  };

  return (
    <>
      {/* <FormForInsertingData onClick={handleSetObject}></FormForInsertingData>
      <FormForShowingDataNew person={personObject} /> */}

      <FormForInsertingDataModal onClick={handleSetObject} />
      <FormForShowingDataModal person={personObject} />
    </>
  );
}

export default App;
