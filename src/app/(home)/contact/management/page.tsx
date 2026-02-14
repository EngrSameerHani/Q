"use client"
import React, { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { SiGitextensions } from "react-icons/si";
import { GoDot } from "react-icons/go";


// Define the types for the structure of the Management data
interface Person {
  title: string;
  extension: string | number;
}

interface Department {
  department: string;
  people: { name: string; title: string; extension: string | number }[];
}

// Assuming Management is imported and it's an array of objects
import Management from '../../../../../public/assets/management';

const Page = () => {
  // Flatten the Management data into an array of departments
  const departments: Department[] = Object.entries(Management[0]).map(([departmentName, peopleObj]) => {
    // If the value is "not found", we set people to an empty array
    const people = typeof peopleObj === 'string' ? [] : Object.entries(peopleObj).map(([name, { title, extension }]) => ({
      name,
      title,
      extension,
    }));

    return { department: departmentName, people };
  });

  // State to manage collapse visibility
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    // Toggle the collapse of the current department
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='container'>
      <h3 className='text-center'>Management</h3>
      <div className="accordion" id="accordion03">
        {departments.map((department, index) => (
          <div key={index} className="card">
            <div className="card-heading">
              <button
                className="card-link"
                onClick={() => toggleCollapse(index)}
                aria-expanded={openIndex === index ? 'true' : 'false'}
                aria-controls={`collapse-${index}`}
              >
                {department.department}
              </button>
            </div>
            <div
              className={`collapse ${openIndex === index ? 'show' : ''}`}
              id={`collapse-${index}`}
            >
              <div className="card-body">
                {department?.people?.length > 0 ? (
                  department.people.map((person, personIndex) => (
                    <div key={personIndex} className="person-info">
                      <p><GoDotFill /> {person.name}</p>
                      <p><GoDot />{person.title}</p>
                      <p>Extension <SiGitextensions />: {person.extension}</p>
                    </div>
                  ))
                ) : (
                  <p>No people found in this department.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
