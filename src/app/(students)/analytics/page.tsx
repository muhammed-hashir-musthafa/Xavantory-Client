"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Award, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ShadCN/ui/card';
 

const AnalyticsPage = () => {
  const performanceData = [
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 88 },
    { month: 'Mar', score: 86 },
    { month: 'Apr', score: 89 },
    { month: 'May', score: 92 },
    { month: 'Jun', score: 90 },
  ];

  const subjectAnalytics = [
    { subject: 'Mathematics', current: 92, previous: 88, target: 95 },
    { subject: 'Physics', current: 88, previous: 85, target: 90 },
    { subject: 'Chemistry', current: 85, previous: 87, target: 90 },
    { subject: 'Biology', current: 90, previous: 86, target: 92 },
  ];

  const getPerformanceIndicator = (current, previous) => {
    const difference = current - previous;
    return {
      icon: difference >= 0 ? ArrowUp : ArrowDown,
      color: difference >= 0 ? 'text-green-600' : 'text-red-600',
      value: Math.abs(difference),
    };
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Academic Analytics</h1>
        <p className="text-gray-600 mt-2">Performance insights and trends</p>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">88.3%</div>
            <div className="flex items-center gap-2 mt-2 text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">3.2% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Subjects Above Target
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2/4</div>
            <p className="text-sm text-gray-500 mt-2">Subjects meeting goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Performance Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Top 10%</div>
            <p className="text-sm text-gray-500 mt-2">Class percentile</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trend */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Performance Trend
          </CardTitle>
          <CardDescription>Monthly academic performance analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[60, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={{ fill: '#2563eb' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Subject Analysis
          </CardTitle>
          <CardDescription>Compare performance against targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {subjectAnalytics.map((subject) => {
              const indicator = getPerformanceIndicator(subject.current, subject.previous);
              return (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{subject.subject}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <indicator.icon className={`h-4 w-4 ${indicator.color}`} />
                        <span className={`text-sm ${indicator.color}`}>
                          {indicator.value}% change
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{subject.current}%</div>
                      <p className="text-sm text-gray-500">Target: {subject.target}%</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${(subject.current / subject.target) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;