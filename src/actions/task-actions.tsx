"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createTask = async (FormData: FormData) => {
    const name = FormData.get("name")?.toString();
    const description = FormData.get("description")?.toString();
    const priority = FormData.get("priority")?.toString();

    if (!name || !description || !priority) {
      return;
    }

    const newTask = await prisma.task.create({
      data: { name, description, priority },
    });
     
    console.log(newTask);
    redirect("/")
  };