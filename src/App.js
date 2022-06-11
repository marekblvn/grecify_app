import { Box } from "@mui/material";

import Title from "./components/Title";
import Converter from "./components/Converter";

export default function App() {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        overflow: "auto",
        backgroundColor: "#4F6367",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title />
      <Converter />
    </Box>
  );
}
