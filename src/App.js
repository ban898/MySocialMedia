import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;

//-------------------------------------------------------------------------------------
// import { Button, styled, Typography } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { Add } from "@mui/icons-material";

// function App() {
//   const BlueButton = styled(Button)({
//     backgroundColor: "skyblue",
//     color: "#888",
//     margin: 5,
//     "&:hover": {
//       backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//       backgroundColor: "gray",
//       color: "white",
//     },
//   });

//   return (
//     <div>
//       <Button variant="text">Text</Button>
//       <Button
//         startIcon={<SettingsIcon />}
//         variant="contained"
//         color="secondary"
//         size="small"
//       >
//         Settings
//       </Button>
//       <Button
//         startIcon={<Add />}
//         variant="contained"
//         color="success"
//         size="small"
//       >
//         Add Item
//       </Button>
//       <Button variant="outlined" disabled>
//         Outlined
//       </Button>
//       <Typography variant="h1" component="p">
//         Uses h1 style but its a P TAG
//       </Typography>
//       <BlueButton>My Button</BlueButton>
//       <BlueButton>Another Button</BlueButton>
//     </div>
//   );
// }

// export default App;
