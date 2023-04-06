import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export const PageHeader = () => (
  <>
    <Heading as="h2" fontSize="2.4rem" mt="7rem">
      Good morning, Blessing⛅️
    </Heading>
    <Flex
      justifyContent={{ base: "initial", sm: "space-between" }}
      alignItems={{ base: "flex-start", sm: "initial" }}
      mt="1.5rem"
      flexDir={{ base: "column", sm: "row" }}
    >
      <Text color="_accent.200">Check out your dashboard summary.</Text>
      <Button
        variant="unstyled"
        color="_primary.100"
        fontSize="1.4rem"
        mt={{ base: "3rem", sm: 0 }}
      >
        View analytics
      </Button>
    </Flex>
  </>
);
