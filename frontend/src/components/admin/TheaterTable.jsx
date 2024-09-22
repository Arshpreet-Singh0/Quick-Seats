import React from "react";

const TheaterTable = ({ theaters }) => {
  return (
    <div className="w-[70%]">
      <table className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-gray-700">
            <th className="py-3 px-6 text-left">Theater Name</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-right">Action</th>
          </tr>
        </thead>
        {theaters?.map((theater, index) => (
          <tbody key={index}>
            <tr className="bg-gray-800 hover:bg-gray-900 transition-colors">
              <td className="py-3 px-6 border-b border-gray-700">
                {theater.theaterName}
              </td>
              <td className="py-3 px-6 border-b border-gray-700">
                {theater.location}
              </td>
              <td className="py-3 px-4 border-b text-right border-gray-700">
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                  onClick={() => alert("Action Clicked!")}
                >
                  Action
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TheaterTable;
