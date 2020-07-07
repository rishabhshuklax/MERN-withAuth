import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Context } from "../Store";
import axios from "axios";

export default function Home() {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      {state.isAuth ? (
        <>
          <p>Authenticated</p>
          <br />
          <Button
            onClick={() => {
              axios
                .get("/api/logout")
                .then((res) => {
                  document.location = "/";
                })
                .catch((err) => {
                  console.error(err);
                  dispatch({
                    type: "VERIFY_AUTH",
                    payload: {
                      isAuth: false,
                      userData: null,
                    },
                  });
                });
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <p>Not Authenticated</p>
          <br />
          <Link to="/auth">
            <Button>Authenticate</Button>
          </Link>
        </>
      )}
    </div>
  );
}
