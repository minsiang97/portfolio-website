import Introduction from "./components/introduction";
import HomeStyled from "./styled";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeStyled>
        <Introduction />
      </HomeStyled>
    </main>
  );
}
