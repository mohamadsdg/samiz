import React from "react";
import { useLocation } from "react-router-dom";

const Notfound = () => {
  let location = useLocation();
  return (
    <div>
      <h3>
        مسیر یافت نشد <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default Notfound;
