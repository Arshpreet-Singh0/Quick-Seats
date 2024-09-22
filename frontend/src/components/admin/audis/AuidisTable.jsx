import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AudisTable = ({ audis }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  // Function to toggle the action div visibility
  const toggleActionDiv = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[70%] mx-auto ">
      <table className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-gray-700">
            <th className="py-3 px-6 text-left">Audi Name</th>
            <th className="py-3 px-6 text-right">Action</th>
          </tr>
        </thead>
        {audis?.map((audi, index) => (
          <tbody key={index}>
            <tr className="bg-gray-800 hover:bg-gray-900 transition-colors">
              <td className="py-3 px-6 border-b border-gray-700">
                {audi.name}
              </td>
              <td className="py-3 px-4 border-b text-right border-gray-700 relative">
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                  onClick={() => toggleActionDiv(index)}
                >
                  Actions
                </button>
                {/* Conditional rendering of the action div */}
                {activeIndex === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg p-4 z-10">
                    <button
                      className="block w-full text-left py-2 px-4 hover:bg-gray-600 rounded-lg text-white"
                      onClick={() => navigate(`/theater/${theater._id}/audis`)}
                    >
                      View Seats
                    </button>
                    <button
                      className="block w-full text-left py-2 px-4 hover:bg-gray-600 rounded-lg text-white"
                    //   onClick={() => alert(`Edit ${theater.theaterName}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full text-left py-2 px-4 hover:bg-gray-600 rounded-lg text-white"
                    //   onClick={() => alert(`Delete ${theater.theaterName}`)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AudisTable;
