"use client";

import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
  icon: JSX.Element;
  count: number | string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, count, label }) => (
  <div className="bg-white p-6 rounded-lg text-center shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
    <div className="flex justify-center items-center mb-4">{icon}</div>
    <h2 className="text-3xl font-semibold text-black">{count}</h2>
    <p className="text-gray-500">{label}</p>
  </div>
);

export default StatCard;
