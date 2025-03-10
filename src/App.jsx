import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PuppyCard } from "./components/PuppyCard";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <div className="mt-4 max-w-sm">
          <PuppyCard
            puppy={{
              id: 1,
              name: "Frisket",
              trait: "Mother of all pups",
              imagePath: "/images/1.jpg",
            }}
          />
        </div>
        <main>
          <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search />
            <Shortlist />
          </div>
          <PuppiesList />
          <NewPuppyForm />
        </main>
      </Container>
    </PageWrapper>
  );
}
