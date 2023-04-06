import { PageHeader, PageTitle, TimeFrame } from "@/components";

export default function Home() {
  return (
    <>
      <PageTitle />
      <PageHeader />
      <TimeFrame />
    </>
  );
}

Home.meta = {
  title: "Home",
};
