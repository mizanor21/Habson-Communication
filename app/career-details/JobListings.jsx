"use client";
import { useState } from "react";

const JobListings = () => {
  const [filters, setFilters] = useState({
    jobType: "Full time",
    workExperience: [],
  });

  const jobs = [
    {
      title: "Sr. Content Writer and Strategist",
      location: "Mumbai, Maharashtra, India",
      experience: "2-3 years",
      jobType: "Full time",
      date: "30/07/2024",
    },
    {
      title: "Social Analyst",
      location: "Mumbai, Maharashtra, India",
      experience: "1-2 years",
      jobType: "Full time",
      date: "22/08/2024",
    },
    {
      title: "Senior Media Executive",
      location: "Mumbai, Maharashtra, India",
      experience: "2-3 years",
      jobType: "Full time",
      date: "30/07/2024",
    },
  ];

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFilters((prev) => ({
        ...prev,
        workExperience: [...prev.workExperience, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        workExperience: prev.workExperience.filter((exp) => exp !== value),
      }));
    }
  };

  return (
    <div className="container mx-auto py-10 lg:py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="mt-4">
            <h3 className="text-md font-medium">Job Type</h3>
            <div>
              <input
                type="checkbox"
                id="full-time"
                name="jobType"
                value="Full time"
                className="mr-2"
                checked={filters.jobType === "Full time"}
                onChange={() =>
                  setFilters({ ...filters, jobType: "Full time" })
                }
              />
              <label htmlFor="full-time">Full time (18)</label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-medium">Work Experience</h3>
            <div className="mt-2">
              {[
                "1-2 years",
                "2-3 years",
                "3-4 years",
                "4-5 years",
                "6+ years",
              ].map((experience, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`exp-${index}`}
                    value={experience}
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`exp-${index}`}>{experience}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold">Join us</h2>
          <p className="text-gray-500">Current Openings</p>

          {/* Search Section */}
          <div className="flex mt-6 gap-4">
            <input
              type="text"
              placeholder="Job title or skill"
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="City, state/province or country"
              className="border p-2 w-full"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>

          {/* Job Cards */}
          <div className="mt-8 space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border p-4 rounded shadow-sm flex justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                    {job.title}
                  </h3>
                  <p className="text-gray-500">{job.location}</p>
                  <p className="text-sm">{job.experience}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{job.jobType}</p>
                  <p className="text-gray-400">{job.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
