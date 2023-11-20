import { catalystClient } from "@/lib/catalyst-client-lib";
import { TodoCard } from "@/lib/catalyst-ui-lib";

export const CatalystTodoCard = async () => {
  const todo = await catalystClient();

  return <TodoCard todo={todo} />;
};
