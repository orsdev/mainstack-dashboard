import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { ILocations, LocationsProps } from "./types";
import dynamic from "next/dynamic";
import { LocationChartOptions } from "./constants";
import { addColorsAndFlagsToData, colorArray } from "./helper";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const Location: FC<LocationsProps> = ({ locations }) => {
  return (
    <Box
      border="1px solid"
      borderColor="_accent.400"
      px="2.4rem"
      py="3.2rem"
      rounded="4px"
    >
      <Flex
        justifyContent={{ base: "initial", sm: "space-between" }}
        alignItems={{ base: "flex-start", sm: "initial" }}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Heading as="h4" fontSize="2rem">
          Top Locations
        </Heading>

        <Button
          variant="unstyled"
          color="_primary.100"
          fontSize="1.4rem"
          mt={{ base: "3rem", sm: 0 }}
        >
          View full reports
        </Button>
      </Flex>

      <SimpleGrid
        mt="4rem"
        templateColumns={{ md: "1fr 1fr" }}
        justifyContent={{ base: "center", sm_2: "start" }}
      >
        <Stack spacing="2rem" direction="column" width="full">
          {locations &&
            addColorsAndFlagsToData(locations || []).map((item: any) => (
              <Flex key={item.country} alignItems="center">
                <Box className={item?.flag} mr="8px" />
                <Flex alignItems="center">
                  <Text textTransform="capitalize">{item?.country}</Text>
                  <Text fontWeight={600} ml="4px">
                    {item?.percent}%
                  </Text>
                </Flex>
                <Box
                  bg={item?.color || "transparent"}
                  ml="12px"
                  width="10px"
                  height="10px"
                  rounded="full"
                />
              </Flex>
            ))}
        </Stack>
        <Box
          mt={{ base: "3rem", md: 0 }}
          width={{ base: "70%", md: "initial" }}
        >
          <ReactApexChart
            type="donut"
            options={{
              ...LocationChartOptions,
              fill: {
                colors: colorArray(locations as ILocations[]),
              },
              labels: locations?.map((item) => item?.country),
            }}
            series={locations?.map((item) => item?.count)}
            width="100%"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
