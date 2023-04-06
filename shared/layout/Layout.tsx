import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { LayoutProps } from "./types";
import { Sidebar } from "@/shared";
import { SidebarWidth } from "../constants";

export const AppLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box ml={{ lg: SidebarWidth }} px="6rem" pt="38px">
        {children}
      </Box>
    </>
  );
};
