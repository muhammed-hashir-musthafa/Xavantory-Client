"use client";

import { useState } from "react";
import { Button } from "@/components/ShadCN/ui/button";
import { Input } from "@/components/ShadCN/ui/input";
import { Label } from "@/components/ShadCN/ui/label";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ShadCN/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ShadCN/ui/card";
import { Textarea } from "@/components/ShadCN/ui/textarea";
import { FaPen } from "react-icons/fa"; // Pencil icon

// Sample admin data with new fields
const initialProfileData = {
  fullName: "John Doe",
  username: "johndoe123",
  email: "admin@lms.com",
  role: "Admin",
  bio: "Administrator of the LMS platform. Overseeing the management of courses, students, and staff.",
  avatarUrl: "https://i.pravatar.cc/150?img=7", // Placeholder avatar URL
  phoneNumber: "+1 234 567 890",
  location: "New York, USA",
  startedDate: "2020-01-15", // Started date
};

export default function AdminProfilePage() {
  const [profile, setProfile] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [newProfileData, setNewProfileData] = useState(profile);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  // Handle profile input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Save changes
  const handleSaveChanges = () => {
    setProfile(newProfileData);
    setIsEditing(false);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing((prevState) => !prevState);
  };

  // Handle profile image change
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfileData((prevData) => ({
          ...prevData,
          avatarUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Admin Profile
      </h2>

      <Card className="border shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-6">
            {/* Avatar Section with Pencil Icon */}
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={newProfileData.avatarUrl}
                  alt="Admin Avatar"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {isEditing && (
                <button
                  onClick={() => document.getElementById("avatar-upload")?.click()}
                  className="absolute top-0 right-0 bg-gray-200 p-2 rounded-full"
                >
                  <FaPen className="text-gray-800" />
                </button>
              )}
              {/* Invisible file input */}
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            <div>
              {/* Full Name and Role */}
              <div className="text-2xl font-semibold">
                {newProfileData.fullName}
              </div>
              <div className="text-sm text-muted-foreground">
                {newProfileData.role}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                @{newProfileData.username}
              </div>
            </div>
          </div>
        </CardHeader>

        {/* Replaced CardBody with CardContent */}
        <CardContent>
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              {isEditing ? (
                <Input
                  id="fullName"
                  name="fullName"
                  value={newProfileData.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-600">{newProfileData.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              {isEditing ? (
                <Input
                  id="email"
                  name="email"
                  value={newProfileData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-600">{newProfileData.email}</p>
              )}
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <Textarea
                  id="bio"
                  name="bio"
                  value={newProfileData.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={4}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-600">{newProfileData.bio}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              {isEditing ? (
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={newProfileData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-600">{newProfileData.phoneNumber}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location">Location</Label>
              {isEditing ? (
                <Input
                  id="location"
                  name="location"
                  value={newProfileData.location}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-600">{newProfileData.location}</p>
              )}
            </div>

            {/* Started Date */}
            <div>
              <Label htmlFor="startedDate">Started Date</Label>
              {isEditing ? (
                <Input
                  id="startedDate"
                  name="startedDate"
                  value={newProfileData.startedDate}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-600">{newProfileData.startedDate}</p>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-6 p-4">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="px-6 py-2"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleSaveChanges}
                className="px-6 py-2"
              >
                Save Changes
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              onClick={toggleEditMode}
              className="px-6 py-2"
            >
              Edit Profile
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
