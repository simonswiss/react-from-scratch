import { useEffect, useState } from "react";
import { Puppy } from "./types";
// import { puppies as puppyData } from "./data";

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
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy["id"][]>([0, 2]);
  const [puppies, setPuppies] = useState<Puppy[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  useEffect(() => {
    async function fetchData() {
      setStatus("loading");
      try {
        const response = await fetch("http://react-backend.test/api/puppies", {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        console.log({ data });
        setPuppies(data.data);
        setStatus("success");
      } catch (error) {
        console.error({ error });
        setStatus("error");
      }
    }
    fetchData();
  }, []);
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
        {status === "loading" && (
          <div className="grid h-96 place-items-center">
            <LoaderCircle className="animate-spin" />
          </div>
        )}
        {status === "error" && (
          <div className="grid h-96 place-items-center">
            <p>Something went wrong</p>
          </div>
        )}
        {status === "success" && (
          <>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
              <Search />
              <Shortlist />
            </div>
            <PuppiesList />
            <NewPuppyForm />
          </>
        )}
      </main>
    </PuppyContext>
  );
}
