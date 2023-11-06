"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const StudentLists = () => {
  const router = useRouter();
  const list = [
    {
      id: 1,
      name: "manoj",
    },
    {
      id: 2,
      name: "manojnadar",
    },
    {
      id: 3,
      name: "nadar",
    },
    {
      id: 4,
      name: "nadarmanoj",
    },
  ];
  return (
    <div>
      <h1>Student List</h1>

      {list.map((item) => (
        <div>
          <button
            key={item.id}
            onClick={() => {
              router.push(`/studentLists/${item.name}`);
            }}
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentLists;
