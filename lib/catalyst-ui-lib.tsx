import { TodoDataType } from "@/utils/schema";
import { CatalystClientReturnType } from "./catalyst-client-lib";

export const TodoCard = ({
  todo,
}: {
  todo: CatalystClientReturnType | TodoDataType;
}) => {
  return (
    <div className="mt-4">
      <h2 className="font-bold">Todo</h2>
      <p>userId: {todo.userId}</p>
      <p>id: {todo.id}</p>
      <p>title: {todo.title}</p>
      <p>completed: {todo.completed ? "true" : "false"}</p>
    </div>
  );
};
