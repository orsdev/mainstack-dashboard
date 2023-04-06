import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MainMenuNavigation,
  OthersOneMenuNavigation,
  OthersTwoMenuNavigation,
} from "./constants";
import { useRouter } from "next/router";
import { ProfileMenu } from "../components";
import ArrowLineIcon from "remixicon-react/ArrowLeftLineIcon";
import ArrowRightIcon from "remixicon-react/ArrowRightSLineIcon";
import { SidebarWidth } from "../constants";

export const Sidebar = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Overlay */}
      <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        background="rgba(16, 25, 36, 0.4)"
        zIndex="banner"
        transform="translateX(-100%)"
        data-show={showSidebar}
        onClick={() => setShowSidebar(false)}
        sx={{
          '&[data-show="true"]': {
            transform: "translateX(0)",
          },
        }}
      />
      <Box
        position="fixed"
        maxH="100vh"
        height="100%"
        minH="100vh"
        top={0}
        left={0}
        zIndex="modal"
        width={SidebarWidth}
        backgroundColor="#fff"
        transition="transform 450ms ease, width 450ms ease"
        borderRight="1px solid"
        borderColor="_accent.400"
        paddingRight="24px"
        data-show={showSidebar}
        transform={{ base: "translateX(-92%)", lg: "translateX(0)" }}
        sx={{
          '&[data-show="true"]': {
            transform: "translateX(0)",
          },
        }}
      >
        {/* Expand Icon */}
        <Button
          variant="unstyled"
          display={{ base: "flex", lg: "none" }}
          alignItems="center"
          justifyContent="center"
          pos="absolute"
          right="-15px"
          top="100px"
          bg="white"
          shadow="md"
          width="30px"
          height="30px"
          rounded="full"
          zIndex="toast"
          visibility={showSidebar ? "hidden" : "visible"}
          onClick={() => setShowSidebar(true)}
        >
          <ArrowRightIcon size={20} />
        </Button>
        {/* Logo */}
        <Flex
          alignItems="center"
          pl="60px"
          pt="38px"
          mb="52px"
          justifyContent="space-between"
        >
          <Link href="/">
            <Image
              src="/images/mainstack-logo.png"
              alt="Mainstack Logo"
              height={40}
              width={40}
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
          <Box display={{ base: "block", lg: "none" }}>
            <Button variant="unstyled" onClick={() => setShowSidebar(false)}>
              <ArrowLineIcon size={20} />
            </Button>
          </Box>
        </Flex>

        {/* Menu */}
        <Box color="_accent.100">
          <Box as="ul">
            {MainMenuNavigation.map(({ icon, title, route }) => (
              <Box
                as="li"
                key={title}
                pl="60px"
                fontSize="1.6rem"
                mb="2.4rem"
                borderLeft="2px solid"
                borderColor={
                  router.pathname === route ? "_primary.100" : "transparent"
                }
                color={router.pathname === route ? "_primary.100" : "inherit"}
                sx={{
                  "& path": {
                    fill: router.pathname === route ? "#FF5403" : "_accent.100",
                  },
                }}
              >
                <Link href={route}>
                  <Flex as="span" alignItems="center">
                    {icon}
                    <Box as="span" ml="1.2rem">
                      {title}
                    </Box>
                  </Flex>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Menu */}
        <Box color="_accent.100" mt="32px">
          <Heading
            as="h4"
            fontSize="1.2rem"
            mb="1.6rem"
            pl="60px"
            fontWeight={400}
          >
            OTHERS 1
          </Heading>
          <Box as="ul">
            {OthersOneMenuNavigation.map(({ icon, title, route }) => (
              <Box
                as="li"
                key={title}
                pl="60px"
                fontSize="1.6rem"
                mb="2.4rem"
                borderLeft="2px solid"
                borderColor={
                  router.pathname === route ? "_primary.100" : "transparent"
                }
                color={router.pathname === route ? "_primary.100" : "inherit"}
                sx={{
                  "& path": {
                    fill: router.pathname === route ? "#FF5403" : "_accent.100",
                  },
                }}
              >
                <Link href={route}>
                  <Flex as="span" alignItems="center">
                    {icon}
                    <Box as="span" ml="1.2rem">
                      {title}
                    </Box>
                  </Flex>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Menu */}
        <Box color="_accent.100" mt="32px">
          <Heading
            as="h4"
            fontSize="1.2rem"
            mb="1.6rem"
            pl="60px"
            fontWeight={400}
          >
            OTHERS 2
          </Heading>
          <Box as="ul">
            {OthersTwoMenuNavigation.map(({ icon, title, route }) => (
              <Box
                as="li"
                key={title}
                pl="60px"
                fontSize="1.6rem"
                mb="2.4rem"
                borderLeft="2px solid"
                borderColor={
                  router.pathname === route ? "_primary.100" : "transparent"
                }
                color={router.pathname === route ? "_primary.100" : "inherit"}
                sx={{
                  "& path": {
                    fill: router.pathname === route ? "#FF5403" : "_accent.100",
                  },
                }}
              >
                <Link href={route}>
                  <Flex as="span" alignItems="center">
                    {icon}
                    <Box as="span" ml="1.2rem">
                      {title}
                    </Box>
                  </Flex>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Menu */}
        <Box pl="60px" mt="190px">
          <ProfileMenu />
        </Box>
      </Box>
    </>
  );
};
