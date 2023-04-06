import {
  Location,
  PageHeader,
  PageTitle,
  Referrals,
  TimeFrame,
  Views,
} from "@/components";
import { fetcher } from "@/config";
import { useGraphData } from "@/hooks";
import { FullSpinner } from "@/shared";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { QueryClient, dehydrate } from "react-query";

export default function Home() {
  const { isLoading, data } = useGraphData();
  const [timeFrame, setTimeFrame] = useState({
    label: "All time",
    value: "all-time",
  });

  return (
    <Box pb="4.4rem">
      {isLoading && <FullSpinner />}
      <PageTitle />
      <PageHeader />
      <TimeFrame
        onClicked={(value) => {
          setTimeFrame(value);
        }}
      />
      <Views time_frame={timeFrame.label} views={data} />
      <SimpleGrid templateColumns={{ md: "1fr 1fr" }} gap="16px" mt="2.4rem">
        <Location locations={data?.top_locations} />
        <Referrals referrals={data?.top_sources} />
      </SimpleGrid>
    </Box>
  );
}

Home.meta = {
  title: "Home",
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([`graph-data`], async () => {
    return await fetcher({
      method: "GET",
      url: "/",
    });
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
