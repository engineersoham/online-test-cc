import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { queEng, queHindi } from "../question";

const Result = () => {
  const data: any = useLocation().state;
  let flag = true;
  let score = 0;

  const myStyle = {
    width: "20rem",
    height: "20rem",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(green 0deg, green ${score * 60}deg, red ${
      score * 60
    }deg, red 360deg )`,
  };

  const rightList = Array.from(data).filter((q: any) => {
    return JSON.stringify(q.ans) === JSON.stringify(q.userAns);
  });

  score = rightList?.length;

  useEffect(() => {
    console.log(score);
  }, [score]);

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <div>
      {data && (
        <>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", m: 3, textAlign: "center" }}
          >
            RESULT
          </Typography>
          <Grid container sx={{ ml: 3, mr: 3 }}>
            <Grid sx={{ float: "left" }}>
              <Grid
                sx={{
                  width: "25vw",
                  textAlign: "center",
                  backgroundColor: "lightyellow",
                }}
              >
                <Typography sx={{ m: 2 }} variant="h6">
                  Your Score is <b>{score}/6</b>
                </Typography>
                <Typography sx={{ m: 2 }} variant="h6">
                  Percentage is <b>{((score * 100) / 6).toFixed(2)}</b>
                </Typography>
              </Grid>
              <Grid
                sx={{ width: "35vw", backgroundColor: "lightyellow", p: 5 }}
              >
                {Array.from(data)?.map((item: any, idx: any) => {
                  return item.type !== "multi" ? (
                    <div data-testid="data">
                      <Typography sx={{ mb: 2, mt: 3 }}>
                        Q{item.id} {item.que}
                      </Typography>
                      <Typography sx={{ backgroundColor: "lightgreen" }}>
                        correct answer :- {item.ans}
                      </Typography>
                      <Typography sx={{ backgroundColor: "yellow" }}>
                        your answer :- {item.userAns}
                      </Typography>
                    </div>
                  ) : (
                    <div data-testid="data1">
                      <Typography sx={{ mb: 2, mt: 3 }}>
                        Q{item.id} {item.que}
                      </Typography>
                      <Typography sx={{ backgroundColor: "lightgreen" }}>
                        correct answer :- {item.ans[0]} and {item.ans[1]}
                      </Typography>
                      <Typography sx={{ backgroundColor: "yellow" }}>
                        your answer :- {item.userAns[0]} and {item.userAns[1]}
                      </Typography>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
            <Grid sx={{ float: "right", mt: 20, ml: 60 }}>
              <Grid sx={myStyle}></Grid>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Result;