"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [priority, setpriority] = useState("");
  const [taskList, setTaskList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitec");
    console.log("task", task);
    setTask("");
    setpriority("");
    setTaskList([...taskList, {task, priority}]);
    console.log("taskList", taskList);
    
  };
  const deleteHanderler = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };
  

  return (
    <>
      <h1 className='text-4xl text-center font-bold p-6 bg-black text-white'>
        todo-list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='border-2 border-zinc-600 px-4 py-3 w-1/2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent m-2'
          placeholder="What's on your mind?"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type='text'
          className='border-2 border-zinc-600 px-4 py-3 w-1/6 m-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent'
          required
          placeholder='Priority'
          value={priority}
          onChange={(e) => setpriority(e.target.value)}
        />
        <button
          type='submit'
          className='px-4 py-3 m-4 bg-black text-white rounded-lg hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50'
          onSubmit={submitHandler}
        >
          Add task
        </button>

      </form>
      <hr />
      <div className='flex flex-col bg-slate-300'>
        {taskList.map((taskList, index) => (
          <div
            key={index}
            className='flex flex-row justify-between items-center bg-slate-300'>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='text-2xl font-bold p-6 m-2'>{taskList.task}</h1>
              <h3 className='font-bold p-6 bg-slate-100 rounded-lg '>{taskList.priority}</h3>
            </div>
            <button
              className='px-4 py-3 m-4 bg-black text-white rounded-lg hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50'
              onClick={() => {
                deleteHanderler(index);
              }}>
              Delete
            </button>
          </div>
            ))}
      </div>
    </>
  );
};

export default page;
