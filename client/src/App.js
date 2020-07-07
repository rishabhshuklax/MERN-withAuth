import React, { useEffect, useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import { Context } from "./Store";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

export default function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get("/api/checktoken", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch({
            type: "VERIFY_AUTH",
            payload: {
              isAuth: true,
              userData: res.data.user,
            },
          });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </>
  );
}
