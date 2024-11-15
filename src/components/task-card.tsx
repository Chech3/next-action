import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@prisma/client";
import TaskButtonDelete from './TaskButtonDelete';
import Link from "next/link";
const TaskCard = ({task} : {task: Task}) => {
  return (
    <Card>
    <CardHeader className="flex flex-row justify-between">
      <CardTitle>{task.name}</CardTitle>
      <Badge className={`text-white hover:text-black ${task.priority === "urgent" ? "bg-red-500" : task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"}`} >{task.priority} </Badge>
    </CardHeader>
    <CardContent>
      <p>{task.description}</p>
      <span className="text-slate-400">
        {new Date(task.createdAt).toLocaleDateString()}
      </span>
    </CardContent>
    <CardFooter className="flex gap-x-2 justify-end">
      <TaskButtonDelete taskId={task.id} />
      <Link className={buttonVariants({variant: "secondary"})} href={`task/${task.id}/edit`}> 
      Editar
      </Link>
    </CardFooter>
  </Card>
  )
}

export default TaskCard