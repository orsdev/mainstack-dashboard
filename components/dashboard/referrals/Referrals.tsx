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
import { IReferrals, ReferralsProps } from "./types";
import dynamic from "next/dynamic";
import { ReferralChartOptions } from "./constants";
import { addColorsAndIconToData, colorArray } from "./helper";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const Referrals: FC<ReferralsProps> = ({ referrals }) => {
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
          Top Referral source
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
          {referrals &&
            addColorsAndIconToData(referrals || []).map((item: any) => (
              <Flex key={item.source} alignItems="center">
                <Box mr="8px"> {item?.icon} </Box>
                <Flex alignItems="center">
                  <Text textTransform="capitalize">{item?.source}</Text>
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
              ...ReferralChartOptions,
              fill: {
                colors: colorArray(referrals as IReferrals[]),
              },
              labels: referrals?.map((item) => item?.source),
            }}
            series={referrals?.map((item) => item?.count)}
            width="100%"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
