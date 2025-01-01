import React from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ShadCN/ui/card';
 
 

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2025-02-15',
      time: '9:00 AM',
      location: 'School Ground',
      type: 'Sports',
      participants: 450,
      description: 'Annual inter-house sports competition featuring track and field events.',
    },
    {
      id: 2,
      title: 'Science Exhibition',
      date: '2025-02-20',
      time: '10:00 AM',
      location: 'School Auditorium',
      type: 'Academic',
      participants: 200,
      description: 'Showcase of student science projects and innovations.',
    },
    {
      id: 3,
      title: 'Cultural Festival',
      date: '2025-03-05',
      time: '5:00 PM',
      location: 'School Auditorium',
      type: 'Cultural',
      participants: 300,
      description: 'Annual cultural celebration featuring music, dance, and drama performances.',
    },
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      Sports: 'bg-green-100 text-green-800',
      Academic: 'bg-blue-100 text-blue-800',
      Cultural: 'bg-purple-100 text-purple-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">School Events</h1>
          <p className="text-gray-600 mt-2">Upcoming events and activities</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filter Events
        </button>
      </div>

      {/* Event Calendar Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Calendar Overview
          </CardTitle>
          <CardDescription>Events scheduled for the next 3 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['January', 'February', 'March'].map((month) => (
              <div key={month} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">{month}</h3>
                <div className="text-sm text-gray-600">
                  <p>3 Events scheduled</p>
                  <p className="text-xs mt-1">Click to view details</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="space-y-6">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      {event.participants} participants
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  Register
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;