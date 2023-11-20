import {
  CatalystClientReturnType,
  catalystClient,
} from "@/lib/catalyst-client-lib";
import { TodoCard } from "@/lib/catalyst-ui-lib";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async (context) => {
  const todo = await catalystClient();
  return { props: { todo } };
}) satisfies GetStaticProps<{
  todo: CatalystClientReturnType;
}>;

export default function Page({
  todo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <TodoCard todo={todo} />;
}
