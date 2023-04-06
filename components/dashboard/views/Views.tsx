import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ViewsChartOptions } from "./constants";
import InfoIcon from "remixicon-react/InformationLineIcon";
import { FC, useEffect } from "react";
import { ViewsProps } from "./types";
import { getTotalViews } from "./helper";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const Views: FC<ViewsProps> = ({ time_frame, views }) => {
  // This is a hack to fix the chart not showing up on the first load
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      mt="2.4rem"
      border="1px solid"
      borderColor="_accent.400"
      px="2.4rem"
      py="3.2rem"
      pb="2rem"
      rounded="4px"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Heading as="h4" fontSize="1.8rem">
            Page Views
          </Heading>
          <Text fontSize="1.4rem" mt="8px" color="_accent.500">
            {time_frame}
          </Text>
        </Box>

        <Button variant="unstyled" color="_accent.200">
          <InfoIcon size={15} />
        </Button>
      </Flex>
      <Heading as="h1" fontSize="4.8rem" my="2.4rem" mb="1rem">
        {getTotalViews(Object.values(views?.graph_data.views || {}))}
      </Heading>
      <ReactApexChart
        type="area"
        options={{
          ...ViewsChartOptions,
          labels: Object.keys(views?.graph_data.views || {}),
        }}
        series={[
          { name: "Views", data: Object.values(views?.graph_data.views || {}) },
        ]}
        width="100%"
        height="350px"
      />
    </Box>
  );
};
