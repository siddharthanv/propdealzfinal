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
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "பிரச்சார அமைப்புகளைத் தேர்ந்தெடுக்கவும்",
    "விளம்பரக் குழுவை உருவாக்கவும்",
    "ஒரு விளம்பரத்தை உருவாக்கவும்",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `நீங்கள் உருவாக்கும் ஒவ்வொரு விளம்பர பிரச்சாரத்திற்கும், கிளிக்குகள் மற்றும் மாற்றங்களுக்காக நீங்கள் எவ்வளவு செலவழிக்க விரும்புகிறீர்கள் என்பதைக் கட்டுப்படுத்தலாம், உங்கள் விளம்பரங்கள் காண்பிக்க விரும்பும் நெட்வொர்க்குகள் மற்றும் புவியியல் இருப்பிடங்கள் மற்றும் பல.`;
    case 1:
      return "திட்டம்பற்றித் தெரிந்துகொள்ள, நீங்கள் என்ன செய்ய முடியும், தேவையானவற்றை எங்கு தேட முதலியவற்றை அறிய.";
    case 2:
      return `நீங்கள் உருவாக்கும் ஒவ்வொரு விளம்பர பிரச்சாரத்திற்கும், கிளிக்குகள் மற்றும் மாற்றங்களுக்காக நீங்கள் எவ்வளவு செலவழிக்க விரும்புகிறீர்கள் என்பதைக் கட்டுப்படுத்தலாம், உங்கள் விளம்பரங்கள் காண்பிக்க விரும்பும் நெட்வொர்க்குகள் மற்றும் புவியியல் இருப்பிடங்கள் மற்றும் பல.`;
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
    <div style={{ margin: "100px 0px" }}>
      <div>
        <Container>
          <Box className="center colorBlue">
            <Typography variant="body2">எப்போதும் திருப்தி</Typography>
            <Typography variant="h5">எதற்காக நாங்கள்?</Typography>
          </Box>
        </Container>
      </div>

      <Container>
        <Box display="flex" justifyContent="center" style={{ width: "100%" }}>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          மீட்டமை
                        </Button>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          className={classes.button}
                          style={{ backgroundColor: "#259AC4", color: "#fff" }}
                        >
                          {activeStep === steps.length - 1
                            ? "முடி"
                            : "அடுத்தது"}
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
                  விக்கிப்பீடியாவின் கொள்கை விவாதங்களும் தொழில்நுட்ப
                  விவாதங்களும் குறித்து உரையாட.
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  மீட்டமை
                </Button>
              </Paper>
            )}
          </div>
        </Box>
      </Container>
    </div>
  );
}
