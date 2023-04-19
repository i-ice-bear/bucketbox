import Box from "./Box.js";

const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);

export default Layout;