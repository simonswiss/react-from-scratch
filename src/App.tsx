import { useState } from "react";
import { Puppy } from "./types";
import { puppies as puppyData } from "./data";

import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PuppyContext } from "./context/puppy-context";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy["id"][]>([0, 2]);
  const [puppies, setPuppies] = useState<Puppy[]>(puppyData);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <PuppyContext
      value={{
        puppies,
        setPuppies,
        liked,
        setLiked,
        searchQuery,
        setSearchQuery,
      }}
    >
      <main>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <Shortlist />
        </div>
        <PuppiesList />
        <NewPuppyForm />
      </main>
    </PuppyContext>
  );
}
