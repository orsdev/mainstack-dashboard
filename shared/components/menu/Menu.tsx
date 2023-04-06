import {
  Avatar,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import LogoutLineIcon from "remixicon-react/LogoutBoxLineIcon";

export const ProfileMenu = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Avatar
          size="lg"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
        <Heading as="h4" fontSize="1.5rem" ml="2rem">
          Blessing Daniels
        </Heading>
      </Flex>
      <Menu>
        <MenuButton>
          <svg
            width={12}
            height={2}
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.37496 1.83341C1.15274 1.83341 0.958293 1.75341 0.791626 1.59341C0.624959 1.43397 0.541626 1.23619 0.541626 1.00008C0.541626 0.76397 0.624959 0.565914 0.791626 0.405914C0.958293 0.24647 1.15274 0.166748 1.37496 0.166748C1.61107 0.166748 1.80885 0.24647 1.96829 0.405914C2.12829 0.565914 2.20829 0.76397 2.20829 1.00008C2.20829 1.23619 2.12829 1.43397 1.96829 1.59341C1.80885 1.75341 1.61107 1.83341 1.37496 1.83341ZM5.99996 1.83341C5.76385 1.83341 5.56607 1.75341 5.40663 1.59341C5.24663 1.43397 5.16663 1.23619 5.16663 1.00008C5.16663 0.76397 5.24663 0.565914 5.40663 0.405914C5.56607 0.24647 5.76385 0.166748 5.99996 0.166748C6.23607 0.166748 6.43413 0.24647 6.59413 0.405914C6.75357 0.565914 6.83329 0.76397 6.83329 1.00008C6.83329 1.23619 6.75357 1.43397 6.59413 1.59341C6.43413 1.75341 6.23607 1.83341 5.99996 1.83341ZM10.625 1.83341C10.3888 1.83341 10.1908 1.75341 10.0308 1.59341C9.87135 1.43397 9.79163 1.23619 9.79163 1.00008C9.79163 0.76397 9.87135 0.565914 10.0308 0.405914C10.1908 0.24647 10.3888 0.166748 10.625 0.166748C10.8472 0.166748 11.0416 0.24647 11.2083 0.405914C11.375 0.565914 11.4583 0.76397 11.4583 1.00008C11.4583 1.23619 11.375 1.43397 11.2083 1.59341C11.0416 1.75341 10.8472 1.83341 10.625 1.83341Z"
              fill="#4D5760"
            />
          </svg>
        </MenuButton>
        <MenuList width={220} mt={10} px="1.5rem" border="none" shadow="lg">
          <MenuItem
            _focus={{
              backgroundColor: "transparent",
            }}
          >
            <LogoutLineIcon size={20} />
            <Box ml={4}>Log out</Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProfileMenu;
