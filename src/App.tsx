import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";

import { puppies } from "./data/puppies";
import { useState } from "react";
import { Puppy } from "./types";
import { LikedContext } from "./context/liked-context";

export function App() {
  const [liked, setLiked] = useState<Puppy["id"][]>([1, 3]);
  return (
    <LikedContext value={{ liked, setLiked }}>
      <PageWrapper>
        <Container>
          <Header />
          <Main />
        </Container>
      </PageWrapper>
    </LikedContext>
  );
}

function Main() {
  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist puppies={puppies} />
      </div>
      <PuppiesList puppies={puppies} />

      <NewPuppyForm />
    </main>
  );
}
