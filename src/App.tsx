import { useState } from "react";

import FormForInsertingData from "./components/Form-For-Inserting-Data";
import FormForShowingData from "./components/Form-For_Showing-Data";
import { objectTraps, set } from "immer/dist/internal.js";

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
      <FormForInsertingData onClick={handleSetObject}></FormForInsertingData>
      <FormForShowingData person={personObject} />
    </>
  );
}

export default App;
