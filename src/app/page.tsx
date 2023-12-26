import Introduction from "./components/introduction";
import HomeStyled from "./styled";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeStyled>
        <Introduction />
      </HomeStyled>
    </main>
  );
}
