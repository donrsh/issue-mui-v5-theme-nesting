import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const Nesting = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <div>
        <Checkbox defaultChecked />
        (primary = orange)
      </div>
      <ThemeProvider theme={innerTheme}>
        <div>
          <Checkbox defaultChecked />
          (primary = green)
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default Nesting;
