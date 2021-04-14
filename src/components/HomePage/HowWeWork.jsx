import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Typography, Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "whitesmoke",
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function HowWeWork() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="how-we-work">
      {/* <div>
      <Container>
        <Box className="center colorBlue">
          <Typography variant="body2">ALWAYS SATISFIED</Typography>
          <Typography variant="h5">WHY US?</Typography>
        </Box>
        
      </Container>
    </div> */}

      <Container style={{ padding: "50px" }}>
        <Box display="flex" justifyContent="center" style={{ width: "100%" }}>
          <div className={classes.root}>
            <Stepper
              style={{
                backgroundColor: "transparent",
                color: "whitesmoke",
                padding: "50px",
              }}
              activeStep={activeStep}
              orientation="vertical"
            >
              {steps.map((label, index) => (
                <Step>
                  <StepLabel>
                    <Typography
                      style={{ fontWeight: "bolder", color: "#0A0A0A" }}
                      variant="h4"
                    >
                      {label}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography
                      style={{ color: "white" }}
                      variant="h6"
                      className="howeworktext"
                    >
                      {getStepContent(index)}
                    </Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                          style={{ color: "#ccc" }}
                        >
                          Back
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleNext}
                          className={classes.button}
                          style={{ backgroundColor: "#259AC4", color: "#fff" }}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>
                  All steps completed🎉 - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </div>
        </Box>
      </Container>
    </div>
  );
}
