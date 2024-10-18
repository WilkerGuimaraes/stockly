import Header from "./_components/header";

export default function Home() {
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header.Root>
        <Header.Left>
          <Header.SubTitle>Visão geral dos dados</Header.SubTitle>
          <Header.Title>Dashboard</Header.Title>
        </Header.Left>
      </Header.Root>
    </div>
  );
}
