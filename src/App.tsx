import {
  Dispatch,
  SetStateAction,
  Suspense,
  use,
  useEffect,
  useState,
} from "react";
import { Puppy } from "./types";
import { fetchPuppies } from "./queries/fetch-puppies";

import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PuppyContext } from "./context/puppy-context";
import { LoaderCircle } from "lucide-react";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Suspense
          fallback={
            <div className="grid h-96 place-items-center">
              <LoaderCircle className="animate-spin" />
            </div>
          }
        >
          <PuppiesFetcher />
        </Suspense>
      </Container>
    </PageWrapper>
  );
}

function Main({ pups }: { pups: Puppy[] }) {
  const [puppies, setPuppies] = useState<Puppy[]>(pups);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PuppyContext
      value={{
        puppies,
        setPuppies,
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

const puppyPromise = fetchPuppies();

function PuppiesFetcher() {
  const pups = use(puppyPromise);

  return <Main pups={pups.data} />;
}
