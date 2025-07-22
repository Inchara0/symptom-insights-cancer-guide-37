
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Clock, Eye, AlertTriangle, Calendar, Activity } from "lucide-react";

const Prevention = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-green-600 hover:text-green-800">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <Badge variant="outline" className="text-green-600 border-green-200">
              <Shield className="h-3 w-3 mr-1" />
              Prevention & Early Detection
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Shield className="h-10 w-10 text-green-500 mr-3" />
            Cancer Prevention & Early Detection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about prevention strategies and early detection methods that can significantly reduce your cancer risk 
            and improve treatment outcomes through early intervention.
          </p>
        </div>

        <Tabs defaultValue="prevention" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prevention">Prevention</TabsTrigger>
            <TabsTrigger value="screening">Screening Tests</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle Changes</TabsTrigger>
            <TabsTrigger value="warning-signs">Warning Signs</TabsTrigger>
          </TabsList>

          <TabsContent value="prevention" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700">Vaccination</CardTitle>
                  <CardDescription>Prevent virus-related cancers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">HPV Vaccine</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Prevents cervical, anal, and other cancers</li>
                      <li>• Most effective when given at ages 11-12</li>
                      <li>• Can be given up to age 26</li>
                      <li>• Protects against 9 HPV types</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Hepatitis B Vaccine</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Prevents liver cancer</li>
                      <li>• Usually given in infancy</li>
                      <li>• Available for adults at risk</li>
                      <li>• Highly effective protection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-700">Healthy Diet</CardTitle>
                  <CardDescription>Nutrition for cancer prevention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <h4 className="font-semibold text-gray-800">Foods to Include:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Fruits and vegetables (5+ servings daily)</li>
                      <li>• Whole grains instead of refined grains</li>
                      <li>• Lean proteins (fish, poultry, beans)</li>
                      <li>• Foods rich in fiber</li>
                      <li>• Green tea and antioxidant-rich foods</li>
                    </ul>
                  </div>
                  <div className="space-y-2 text-sm">
                    <h4 className="font-semibold text-gray-800">Foods to Limit:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Processed meats (bacon, sausage)</li>
                      <li>• Red meat (limit to 3 servings/week)</li>
                      <li>• Alcohol (no more than 1-2 drinks/day)</li>
                      <li>• High-fat and sugary foods</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700">Avoid Risk Factors</CardTitle>
                  <CardDescription>Eliminate known cancer causes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Tobacco</h4>
                      <ul className="text-red-700 space-y-1">
                        <li>• Quit smoking (increases risk of 12+ cancers)</li>
                        <li>• Avoid secondhand smoke</li>
                        <li>• Don't use chewing tobacco</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Sun Exposure</h4>
                      <ul className="text-orange-700 space-y-1">
                        <li>• Use SPF 30+ sunscreen daily</li>
                        <li>• Avoid tanning beds</li>
                        <li>• Wear protective clothing</li>
                        <li>• Seek shade during peak hours</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental & Occupational Precautions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">At Home</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Test home for radon levels</li>
                        <li>• Limit exposure to household chemicals</li>
                        <li>• Maintain good ventilation</li>
                        <li>• Use natural cleaning products when possible</li>
                        <li>• Filter drinking water if needed</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">At Work</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Follow safety protocols with chemicals</li>
                        <li>• Use protective equipment</li>
                        <li>• Know your workplace hazards</li>
                        <li>• Get regular occupational health checkups</li>
                        <li>• Report unsafe conditions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="screening" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Recommended Screening Schedule
                  </CardTitle>
                  <CardDescription>Regular screenings can catch cancer early when it's most treatable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-pink-800 mb-3">Women's Screenings</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h4 className="font-medium">Mammograms (Breast Cancer)</h4>
                            <p className="text-gray-600">• Ages 40-44: Consider starting</p>
                            <p className="text-gray-600">• Ages 45-54: Annual screening</p>
                            <p className="text-gray-600">• Ages 55+: Every 1-2 years</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Pap Smears (Cervical Cancer)</h4>
                            <p className="text-gray-600">• Ages 21-29: Every 3 years</p>
                            <p className="text-gray-600">• Ages 30-65: Every 3 years (Pap) or every 5 years (Pap + HPV)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-3">Men's Screenings</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h4 className="font-medium">PSA Test (Prostate Cancer)</h4>
                            <p className="text-gray-600">• Age 50+: Discuss with doctor</p>
                            <p className="text-gray-600">• Age 45+ (high risk): Consider testing</p>
                            <p className="text-gray-600">• Annual or biennial based on results</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-3">Universal Screenings (All Adults)</h3>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium">Colonoscopy (Colorectal Cancer)</h4>
                          <p className="text-gray-600">• Age 45+: Every 10 years</p>
                          <p className="text-gray-600">• Or FIT test annually</p>
                          <p className="text-gray-600">• Earlier if family history</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Skin Cancer Screening</h4>
                          <p className="text-gray-600">• Annual skin exams</p>
                          <p className="text-gray-600">• Monthly self-examinations</p>
                          <p className="text-gray-600">• More frequent if high risk</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Lung Cancer Screening</h4>
                          <p className="text-gray-600">• Ages 50-80 with smoking history</p>
                          <p className="text-gray-600">• Low-dose CT scan annually</p>
                          <p className="text-gray-600">• Discuss with doctor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Expect During Screenings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h3 className="font-semibold mb-3">Before Your Screening</h3>
                      <ul className="space-y-1">
                        <li>• Follow pre-test instructions</li>
                        <li>• Ask about preparation requirements</li>
                        <li>• Bring insurance information</li>
                        <li>• List current medications</li>
                        <li>• Prepare questions for your doctor</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Understanding Results</h3>
                      <ul className="space-y-1">
                        <li>• Normal: Continue regular screening</li>
                        <li>• Abnormal: May need follow-up tests</li>
                        <li>• False positives are common</li>
                        <li>• Ask your doctor to explain results</li>
                        <li>• Don't panic - most abnormal results aren't cancer</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lifestyle" className="mt-6">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <Activity className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg text-green-700">Exercise Regularly</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1 text-green-800">
                      <li>• 150+ minutes moderate exercise/week</li>
                      <li>• Or 75+ minutes vigorous exercise</li>
                      <li>• Include strength training 2x/week</li>
                      <li>• Reduces risk of multiple cancers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg text-blue-700">Maintain Healthy Weight</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1 text-blue-800">
                      <li>• Keep BMI between 18.5-24.9</li>
                      <li>• Obesity linked to 13 cancer types</li>
                      <li>• Focus on gradual, sustainable changes</li>
                      <li>• Combine diet and exercise</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg text-purple-700">Get Quality Sleep</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1 text-purple-800">
                      <li>• 7-9 hours per night for adults</li>
                      <li>• Maintain consistent sleep schedule</li>
                      <li>• Poor sleep linked to cancer risk</li>
                      <li>• Create a dark, cool environment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                      <Eye className="h-5 w-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg text-orange-700">Manage Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1 text-orange-800">
                      <li>• Practice relaxation techniques</li>
                      <li>• Try meditation or yoga</li>
                      <li>• Maintain social connections</li>
                      <li>• Seek help when needed</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Creating Your Personal Prevention Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">Week 1-2: Assessment</h3>
                      <ul className="space-y-1 text-green-700">
                        <li>• Complete our risk assessment</li>
                        <li>• Review family health history</li>
                        <li>• Schedule overdue screenings</li>
                        <li>• Talk to your doctor about risks</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">Week 3-4: Lifestyle Changes</h3>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Start with small dietary changes</li>
                        <li>• Begin regular exercise routine</li>
                        <li>• Quit smoking if applicable</li>
                        <li>• Improve sleep habits</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">Ongoing: Maintenance</h3>
                      <ul className="space-y-1 text-purple-700">
                        <li>• Track progress monthly</li>
                        <li>• Stick to screening schedule</li>
                        <li>• Stay informed about new guidelines</li>
                        <li>• Review and adjust plan annually</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="warning-signs" className="mt-6">
            <div className="space-y-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    General Cancer Warning Signs
                  </CardTitle>
                  <CardDescription>Contact your doctor if you experience any of these symptoms persistently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Physical Changes</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Unexplained weight loss (10+ pounds without trying)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Persistent fatigue not relieved by rest</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Fever that doesn't go away</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>New lumps or thickening anywhere on body</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Changes in skin color, texture, or moles</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Functional Changes</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Persistent cough or hoarseness</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Changes in bowel or bladder habits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Difficulty swallowing or persistent indigestion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Unusual bleeding or discharge</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Persistent pain in specific area</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-700">When to See a Doctor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Immediately</h4>
                      <ul className="space-y-1 text-orange-700">
                        <li>• Severe pain that's getting worse</li>
                        <li>• Heavy bleeding</li>
                        <li>• Difficulty breathing</li>
                        <li>• High fever with other symptoms</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Within a Few Days</h4>
                      <ul className="space-y-1 text-yellow-700">
                        <li>• New lumps or growths</li>
                        <li>• Persistent symptoms lasting 2+ weeks</li>
                        <li>• Changes in existing moles or skin lesions</li>
                        <li>• Unusual discharge or bleeding</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-700">Self-Examination Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Checks</h4>
                      <ul className="space-y-1">
                        <li>• Breast self-exam (all genders)</li>
                        <li>• Skin examination for new or changing moles</li>
                        <li>• Check lymph nodes (neck, armpit, groin)</li>
                        <li>• Testicular self-exam (males)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What to Look For</h4>
                      <ul className="space-y-1">
                        <li>• Changes in size, shape, or texture</li>
                        <li>• New growths or lumps</li>
                        <li>• Changes in color</li>
                        <li>• Sores that don't heal</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start">
            <Shield className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
            <div>
              <h3 className="font-semibold text-green-800 mb-1">Remember</h3>
              <p className="text-green-700 text-sm">
                Prevention and early detection are your best defenses against cancer. While not all cancers can be prevented, 
                following these guidelines can significantly reduce your risk and improve outcomes if cancer does develop. 
                Always consult with healthcare professionals for personalized advice.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/assessment">
            <Button>Take Risk Assessment</Button>
          </Link>
          <Link to="/cancer-info">
            <Button variant="outline">Learn About Cancer Types</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prevention;
