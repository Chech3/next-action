// import TableTest from "@/components/TableTest";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Task } from "@prisma/client";

// export const dynamic = "force-dynamic";

const HomePage = async () => {
  const task: Task[] = await prisma.task.findMany();

  return (
    <div className="grid grid-cols-3 gap-4">
      {task.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle>{task.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className="text-slate-400">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </CardContent>
          <CardFooter className="flex gap-x-2 justify-end">
            <Button variant="destructive">Delete</Button>
            <Button>Edit</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default HomePage;
