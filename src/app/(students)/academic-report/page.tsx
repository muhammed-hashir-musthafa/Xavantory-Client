import React from "react";
import { Trophy, Medal, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ShadCN/ui/card";
import { Progress } from "@/components/ShadCN/ui/progress";

const RecordsPage = () => {
  const academicRecords = {
    examResults: [
      {
        exam: "First Term",
        subjects: [
          { name: "Mathematics", score: 92, grade: "A+", rank: 3 },
          { name: "Physics", score: 88, grade: "A", rank: 5 },
          { name: "Chemistry", score: 90, grade: "A+", rank: 4 },
          { name: "Biology", score: 85, grade: "A", rank: 7 },
        ],
      },
      {
        exam: "Mid Term",
        subjects: [
          { name: "Mathematics", score: 94, grade: "A+", rank: 2 },
          { name: "Physics", score: 89, grade: "A", rank: 4 },
          { name: "Chemistry", score: 91, grade: "A+", rank: 3 },
          { name: "Biology", score: 87, grade: "A", rank: 5 },
        ],
      },
    ],
    achievements: [
      {
        category: "Academic",
        items: [
          {
            title: "Mathematics Olympiad",
            position: "First Place",
            year: "2024",
          },
          { title: "Science Fair", position: "Gold Medal", year: "2024" },
        ],
      },
      {
        category: "Arts",
        items: [
          { title: "Classical Dance", position: "A Grade", year: "2024" },
          {
            title: "Drawing Competition",
            position: "Second Place",
            year: "2024",
          },
        ],
      },
    ],
  };

  const getGradeColor = (grade) => {
    const colors = {
      "A+": "text-green-600",
      A: "text-blue-600",
      "B+": "text-yellow-600",
      B: "text-orange-600",
    };
    return colors[grade] || "text-gray-600";
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Academic Records</h1>
        <p className="text-gray-600 mt-2">
          Complete academic history and achievements
        </p>
      </div>

      {/* Overall Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Overall Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Overall CGPA</p>
              <p className="text-3xl font-bold text-blue-600">3.8</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Class Rank</p>
              <p className="text-3xl font-bold text-blue-600">5/45</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Attendance</p>
              <p className="text-3xl font-bold text-blue-600">94.2%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exam Results */}
      {academicRecords.examResults.map((term) => (
        <Card key={term.exam} className="mb-8">
          <CardHeader>
            <CardTitle>{term.exam} Results</CardTitle>
            <CardDescription>Subject-wise performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {term.subjects.map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{subject.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span
                          className={`font-semibold ${getGradeColor(
                            subject.grade
                          )}`}
                        >
                          Grade: {subject.grade}
                        </span>
                        <span className="text-sm text-gray-500">
                          Rank: {subject.rank}
                        </span>
                      </div>
                    </div>
                    <span className="font-semibold">{subject.score}%</span>
                  </div>
                  <Progress value={subject.score} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-blue-600" />
            Achievements & Awards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {academicRecords.achievements.map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-lg mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((achievement) => (
                    <div
                      key={achievement.title}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Medal className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">
                          {achievement.position}
                        </p>
                        <p className="text-sm text-gray-500">
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecordsPage;
