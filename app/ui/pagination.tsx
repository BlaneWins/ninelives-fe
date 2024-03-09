import React, { useState } from "react";
import {Button, Typography} from "@material-tailwind/react";
import { ProgressBar } from "./progress-bar";

export default function Pagination({
 title,
 pgLen,
 childComponents
}) {
  const [pgNo, setPgNo] = useState(1);
  const progressBar = ProgressBar({ value: Math.ceil((pgNo / pgLen) * 100), pgNo, pgLen });

  return (
    <div className="container">
      <center className="mt-4">
        <Typography variant="h4">{title}</Typography>
      </center>
      <div>
        {progressBar.Component}
        {childComponents.map((Component, index) => (
          pgNo === index + 1 ?
            <div className="my-6" key={index}>
              <Component />
            </div> : null
        ))}
        <center>
          {pgNo > 1 && (
            <Button
              className=""
              type="button"
              variant="text"
              onClick={() => {
                setPgNo(pgNo - 1);
                progressBar.handleMinusClick(pgLen, pgNo);
                window.scrollTo(0, 0);
              }}
              id="minus-button"
              disabled={progressBar.progress <= 0}
            >
              &lt;&lt; Back
            </Button>
          )}
          {pgNo < pgLen && (
            <Button
              className="mx-4"
              type="button"
              variant="text"
              onClick={() => {
                setPgNo(pgNo + 1);
                progressBar.handlePlusClick(pgLen, pgNo);
                window.scrollTo(0, 0);
              }}
              id="plus-button"
              disabled={progressBar.progress >= 100}
            >
              Next &gt;&gt;
            </Button>
          )}
        </center>
      </div>
    </div>
  );
}