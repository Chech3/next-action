// import TableTest from "@/components/TableTest";

import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";
import { Task } from "@prisma/client";

// export const dynamic = "force-dynamic";

const HomePage = async () => {
  const task: Task[] = await prisma.task.findMany();

  return (
    <div className="grid grid-cols-3 gap-4">
      {task.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};
export default HomePage;
