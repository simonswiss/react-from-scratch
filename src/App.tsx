import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { useState } from "react";
import { Puppy } from "./types";
import { puppies } from "./data";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <main>
          <PuppiesWrapper />
        </main>
      </Container>
    </PageWrapper>
  );
}

function PuppiesWrapper() {
  const [liked, setLiked] = useState<Puppy["id"][]>([0, 2]);
  return (
    <>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist puppies={puppies} liked={liked} setLiked={setLiked} />
      </div>
      <PuppiesList puppies={puppies} liked={liked} setLiked={setLiked} />
      <NewPuppyForm />
    </>
  );
}
