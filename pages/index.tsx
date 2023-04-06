import { PageHeader, PageTitle, TimeFrame, Views } from "@/components";
import { fetcher } from "@/config";
import { useGraphData } from "@/hooks";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { QueryClient, dehydrate } from "react-query";

export default function Home() {
  const { isLoading, error, data } = useGraphData();
  const [timeFrame, setTimeFrame] = useState({
    label: "All time",
    value: "all-time",
  });

  return (
    <>
      <PageTitle />
      <PageHeader />
      <TimeFrame
        onClicked={(value) => {
          setTimeFrame(value);
        }}
      />
      <Views time_frame={timeFrame.label} views={data} />
    </>
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
