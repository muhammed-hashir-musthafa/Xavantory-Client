import React, { useState } from "react";

const AttendanceStats: React.FC = () => {
  const [attendanceData] = useState({
    today: 85,
    lastDay: 90,
    thisWeek: 92,
    lastWeek: 88,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-700">Attendance Today</h3>
        <p className="text-2xl font-bold text-green-600">{attendanceData.today}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-700">Attendance Last Day</h3>
        <p className="text-2xl font-bold text-orange-600">{attendanceData.lastDay}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-700">Attendance This Week</h3>
        <p className="text-2xl font-bold text-blue-600">{attendanceData.thisWeek}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-700">Attendance Last Week</h3>
        <p className="text-2xl font-bold text-red-600">{attendanceData.lastWeek}%</p>
      </div>
    </div>
  );
};

export default AttendanceStats;
