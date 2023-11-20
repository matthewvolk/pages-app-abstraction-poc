import { TodoSchema } from "@/utils/schema";
import { sleep } from "@/utils/sleep";

export const catalystClient = async () => {
  await sleep(1000);

  const r = Math.floor(Math.random() * 100) + 1;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${r}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  return TodoSchema.parse(data);
};

export type CatalystClientReturnType = Awaited<
  ReturnType<typeof catalystClient>
>;
