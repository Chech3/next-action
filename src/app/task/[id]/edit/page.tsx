import { CardWithForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";

export default async function TaskPageEdit({params}: {
  params: { id: string };
}) {
  const {id} = await params;

  const taskId = parseInt(id)
  if (!taskId) return;

  const task = await prisma.task.findFirst({
    where: {
      id: taskId
    }
  })

  if (!task) return;
  
  return (
    <div className="flex justify-center items h-screen">
      <CardWithForm task = {task}  />
    </div>
  );
}
