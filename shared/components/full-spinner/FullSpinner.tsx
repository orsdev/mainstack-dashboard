import { Box, Spinner } from "@chakra-ui/react";

export const FullSpinner = () => (
  <Box
    alignItems="center"
    bg="blackAlpha.200"
    display="flex"
    backdropFilter="blur(10px)"
    height="full"
    justifyContent="center"
    pos="fixed"
    top={0}
    left={0}
    width="full"
    zIndex="sticky"
  >
    <Spinner size="lg" color="_blue" />
  </Box>
);
