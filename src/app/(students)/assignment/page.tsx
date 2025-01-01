import React from 'react';
import { Clock, FileText, CheckCircle, AlertCircle, Filter, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ShadCN/ui/card';
import { Progress } from '@/components/ShadCN/ui/progress';
 

const AssignmentsPage = () => {
  const assignments = [
    {
      id: 1,
      title: 'Mathematics Problem Set 3',
      subject: 'Mathematics',
      dueDate: '2025-01-20',
      status: 'pending',
      progress: 60,
      priority: 'high',
      description: 'Complete problems 1-10 from Chapter 4: Calculus',
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      subject: 'Physics',
      dueDate: '2025-01-25',
      status: 'in-progress',
      progress: 30,
      priority: 'medium',
      description: 'Write a detailed report on the Simple Pendulum experiment',
    },
    {
      id: 3,
      title: 'Chemistry Assignment',
      subject: 'Chemistry',
      dueDate: '2025-01-15',
      status: 'completed',
      progress: 100,
      priority: 'low',
      description: 'Balancing chemical equations worksheet',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'completed': 'bg-green-100 text-green-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'text-red-600',
      'medium': 'text-yellow-600',
      'low': 'text-green-600',
    };
    return colors[priority] || 'text-gray-600';
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600 mt-2">Track and manage your assignments</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search assignments..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter Assignments
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-6">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{assignment.title}</h3>
                    <p className="text-gray-600 text-sm">{assignment.subject}</p>
                  </div>
                  <p className="text-gray-600">{assignment.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FileText className="h-4 w-4" />
                      {assignment.progress}% Completed
                    </div>
                    <div className={`flex items-center gap-2 ${getPriorityColor(assignment.priority)}`}>
                      <CheckCircle className="h-4 w-4" />
                      Priority: {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                    </div>
                  </div>
                </div>
                <Progress value={assignment.progress} className="w-1/4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
