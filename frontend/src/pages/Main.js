import * as api from "../api/index";
import GlassButton from "../components/glassbutton/GlassButton.js";
import { useState } from "react";

function Main() {
  return (
    <GlassButton
      label="Add"
      color="green"
      function={function toggleAdd() {
        api.instant();
      }}
    />
  );
}

export default Main;
