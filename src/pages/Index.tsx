
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, BookOpen, Phone, Users, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">CancerCare Assistant</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-red-600 border-red-200">
                <Phone className="h-3 w-3 mr-1" />
                Emergency: 112 | 911
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Health Companion for Cancer Awareness
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get personalized risk assessments, comprehensive cancer information, and expert guidance 
            to help you make informed decisions about your health.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Symptom Assessment</CardTitle>
              <CardDescription>
                Interactive questionnaire to assess your symptoms and provide personalized risk insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/assessment">
                <Button className="w-full">Start Assessment</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Cancer Information</CardTitle>
              <CardDescription>
                Comprehensive information about 10 different cancer types, symptoms, and prevention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/cancer-info">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>AI Health Assistant</CardTitle>
              <CardDescription>
                Chat with our AI assistant for personalized cancer-related questions and guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/chat">
                <Button variant="outline" className="w-full">Start Chat</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-pink-200 bg-pink-50">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <CardTitle className="text-pink-700">Women's Health</CardTitle>
              <CardDescription>
                Dedicated section for breast and cervical cancer information with common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/womens-health">
                <Button variant="outline" className="w-full border-pink-300 text-pink-700 hover:bg-pink-100">Explore</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-200 bg-green-50">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-green-700">Prevention & Early Detection</CardTitle>
              <CardDescription>
                Learn prevention strategies and early detection methods to catch cancer faster
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/prevention">
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-100">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">10</div>
            <div className="text-gray-600">Cancer Types Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">AI Assistant Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Free to Use</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">Expert</div>
            <div className="text-gray-600">Medical Information</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
          <p className="text-yellow-700 text-sm">
            This platform provides general health information and is not intended to replace professional medical advice, 
            diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns. 
            In case of emergency, contact your local emergency services immediately.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
