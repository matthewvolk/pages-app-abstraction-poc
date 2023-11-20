import { CatalystTodoCard } from "@/components/catalyst-todo-card";
import { Placeholder } from "@/components/placeholder";
import { sleep } from "@/utils/sleep";
import { Suspense } from "react";

const PageComponent = ({ body }: { body: React.ReactNode }) => {
  return (
    <main>
      <h1>Im Static</h1>
      {body}
    </main>
  );
};

export default async function Home() {
  await sleep(1000);

  return (
    <PageComponent
      body={
        <Suspense
          fallback={
            <Placeholder className="min-h-screen w-full bg-yellow-300" />
          }
        >
          <CatalystTodoCard />
        </Suspense>
      }
    />
  );
}
