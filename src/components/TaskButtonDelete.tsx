import React from 'react'
import { Button } from './ui/button'
import prisma from '@/lib/prisma'



const TaskButtonDelete = ({taskId} : {taskId: number }) => {

    async function deleteTask (formData: FormData) {
        'use server'
        const taskId = formData.get('id')?.toString()

        console.log(taskId);
    }
  return (
    <form action={deleteTask}>
        <input type="hidden" value={taskId} />
        <Button variant="destructive">Delete</Button>
    </form>
  )
}

export default TaskButtonDelete