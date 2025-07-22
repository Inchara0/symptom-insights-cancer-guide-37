
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Heart, Users, AlertTriangle, ExternalLink } from "lucide-react";

const WomensHealth = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const breastCancerFaqs = [
    {
      id: "breast-1",
      question: "What does a breast lump feel like?",
      answer: "Breast lumps can vary in feel. Cancerous lumps are often hard, immovable, and have irregular edges. However, some can be soft or rounded. Any new lump should be examined by a healthcare provider, as benign lumps are also common and can feel similar."
    },
    {
      id: "breast-2",
      question: "At what age should I start getting mammograms?",
      answer: "Most guidelines recommend starting annual mammograms at age 40-50, depending on risk factors. Women with family history or genetic predisposition may need to start earlier. Discuss with your doctor to determine the best screening schedule for you."
    },
    {
      id: "breast-3",
      question: "Can breast cancer occur in young women?",
      answer: "Yes, though it's less common. About 5% of breast cancers occur in women under 40. Young women should be aware of their breast health and report any changes to their healthcare provider promptly."
    },
    {
      id: "breast-4",
      question: "Does wearing a bra cause breast cancer?",
      answer: "No, there is no scientific evidence that wearing bras, including underwire bras, increases breast cancer risk. This is a common myth that has been thoroughly debunked by medical research."
    },
    {
      id: "breast-5",
      question: "Can breast cancer be prevented?",
      answer: "While there's no guaranteed way to prevent breast cancer, you can reduce your risk by maintaining a healthy weight, exercising regularly, limiting alcohol consumption, and avoiding unnecessary hormone therapy."
    }
  ];

  const cervicalCancerFaqs = [
    {
      id: "cervical-1",
      question: "What is HPV and how is it related to cervical cancer?",
      answer: "HPV (Human Papillomavirus) is a common sexually transmitted infection. Certain high-risk types of HPV can cause cervical cancer over time. Most HPV infections clear up on their own, but persistent infections with high-risk types can lead to cancer."
    },
    {
      id: "cervical-2",
      question: "How often should I get a Pap smear?",
      answer: "Generally, women should start Pap smears at age 21. From 21-29, get screened every 3 years. From 30-65, you can get a Pap smear every 3 years or Pap + HPV test every 5 years. Your doctor may recommend different intervals based on your risk factors."
    },
    {
      id: "cervical-3",
      question: "Can the HPV vaccine prevent cervical cancer?",
      answer: "Yes, HPV vaccines are highly effective at preventing infections from the most common cancer-causing HPV types. The vaccine is most effective when given before becoming sexually active, typically recommended for ages 11-12, but can be given up to age 26."
    },
    {
      id: "cervical-4",
      question: "What does an abnormal Pap smear mean?",
      answer: "An abnormal Pap smear doesn't mean you have cancer. It indicates abnormal cells that need further evaluation. Many abnormal results are due to infections or minor cell changes that may resolve on their own. Follow-up testing will determine if treatment is needed."
    },
    {
      id: "cervical-5",
      question: "Can cervical cancer be cured?",
      answer: "When detected early through regular screening, cervical cancer is highly treatable and often curable. Even pre-cancerous changes can be treated successfully. This is why regular Pap smears are so important for early detection."
    }
  ];

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-pink-600 hover:text-pink-800">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <Badge variant="outline" className="text-pink-600 border-pink-200">
              <Users className="h-3 w-3 mr-1" />
              Women's Health Focus
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Heart className="h-10 w-10 text-pink-500 mr-3" />
            Women's Cancer Health Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive information about breast and cervical cancers - the most common cancers affecting women. 
            Get answers to frequently asked questions and learn about prevention and early detection.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="breast">Breast Cancer</TabsTrigger>
            <TabsTrigger value="cervical">Cervical Cancer</TabsTrigger>
            <TabsTrigger value="faq">Common Questions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-700">Breast Cancer Facts</CardTitle>
                  <CardDescription>Key statistics and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">Did You Know?</h4>
                    <ul className="text-sm text-pink-700 space-y-1">
                      <li>• 1 in 8 women will develop breast cancer in their lifetime</li>
                      <li>• Early detection increases survival rates to over 90%</li>
                      <li>• Regular mammograms can detect cancer before you can feel it</li>
                      <li>• Most breast lumps are not cancerous</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    Breast cancer is the second most common cancer in women. Regular screening and awareness of changes in your breasts are crucial for early detection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-700">Cervical Cancer Facts</CardTitle>
                  <CardDescription>Key statistics and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Did You Know?</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Nearly all cervical cancers are caused by HPV</li>
                      <li>• Regular Pap smears can prevent most cervical cancers</li>
                      <li>• HPV vaccine can prevent up to 90% of cervical cancers</li>
                      <li>• When caught early, cervical cancer is highly treatable</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    Cervical cancer is highly preventable through vaccination and regular screening. Most cases develop slowly over many years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="breast" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Breast Cancer: What Every Woman Should Know</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Understanding Breast Cancer</h3>
                  <p className="text-gray-700 mb-4">
                    Breast cancer occurs when cells in breast tissue grow uncontrollably. While it primarily affects women, 
                    men can also develop breast cancer. The exact cause is unknown, but certain risk factors increase the likelihood.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Warning Signs to Watch For</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>New lump in breast or underarm</li>
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Breast size or shape changes</li>
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Skin dimpling or puckering</li>
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Nipple discharge (non-milk)</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Nipple turning inward</li>
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Breast or nipple pain</li>
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Skin redness or scaling</li>
                      <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Swelling in breast area</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Risk Factors</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Cannot Control:</h4>
                        <ul className="space-y-1">
                          <li>• Age (risk increases)</li>
                          <li>• Gender (women at higher risk)</li>
                          <li>• Family history</li>
                          <li>• Genetic mutations (BRCA1/2)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Lifestyle Related:</h4>
                        <ul className="space-y-1">
                          <li>• Alcohol consumption</li>
                          <li>• Physical inactivity</li>
                          <li>• Obesity after menopause</li>
                          <li>• Hormone therapy use</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Reproductive:</h4>
                        <ul className="space-y-1">
                          <li>• Never having children</li>
                          <li>• First child after 30</li>
                          <li>• Early menstruation</li>
                          <li>• Late menopause</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Prevention Tips</h3>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• Maintain a healthy weight</li>
                      <li>• Exercise regularly (at least 150 minutes per week)</li>
                      <li>• Limit alcohol consumption</li>
                      <li>• Perform monthly breast self-exams</li>
                      <li>• Follow recommended mammogram schedule</li>
                      <li>• Consider genetic counseling if family history is present</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cervical" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Cervical Cancer: Prevention is Key</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Understanding Cervical Cancer</h3>
                  <p className="text-gray-700 mb-4">
                    Cervical cancer develops in the cervix, the lower part of the uterus that connects to the vagina. 
                    Almost all cervical cancers are caused by persistent infection with high-risk types of Human Papillomavirus (HPV).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Early Warning Signs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Unusual vaginal bleeding</li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Bleeding between periods</li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Bleeding after menopause</li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Pain during intercourse</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Unusual vaginal discharge</li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Pelvic pain</li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Heavier periods than usual</li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Strong vaginal odor</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">The HPV Connection</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800 mb-3">
                      <strong>What is HPV?</strong> Human Papillomavirus is the most common sexually transmitted infection. 
                      There are over 100 types of HPV, but only about 14 are considered high-risk for causing cancer.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Key Facts:</h4>
                        <ul className="space-y-1">
                          <li>• Most sexually active people get HPV</li>
                          <li>• Usually clears up on its own</li>
                          <li>• Persistent high-risk HPV can cause cancer</li>
                          <li>• Takes 10-20 years to develop into cancer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">High-Risk Types:</h4>
                        <ul className="space-y-1">
                          <li>• HPV 16 and 18 cause 70% of cervical cancers</li>
                          <li>• HPV 31, 33, 45, 52, 58 also high-risk</li>
                          <li>• Can be detected through HPV testing</li>
                          <li>• Regular screening can catch changes early</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Prevention Strategies</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">HPV Vaccination</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <ul className="space-y-1">
                          <li>• Protects against cancer-causing HPV types</li>
                          <li>• Most effective before sexual activity</li>
                          <li>• Recommended ages 11-12</li>
                          <li>• Can be given up to age 26</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">Regular Screening</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <ul className="space-y-1">
                          <li>• Pap smears every 3 years (21-29)</li>
                          <li>• Pap + HPV test every 5 years (30+)</li>
                          <li>• Can detect pre-cancerous changes</li>
                          <li>• Follow your doctor's recommendations</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-orange-700">Safe Practices</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <ul className="space-y-1">
                          <li>• Use condoms consistently</li>
                          <li>• Limit number of sexual partners</li>
                          <li>• Don't smoke</li>
                          <li>• Maintain good immune health</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-700">Breast Cancer FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {breastCancerFaqs.map((faq) => (
                      <div key={faq.id} className="border rounded-lg">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            <span className="text-pink-500">
                              {expandedFaq === faq.id ? '−' : '+'}
                            </span>
                          </div>
                        </button>
                        {expandedFaq === faq.id && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-700 text-sm">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-700">Cervical Cancer FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cervicalCancerFaqs.map((faq) => (
                      <div key={faq.id} className="border rounded-lg">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            <span className="text-purple-500">
                              {expandedFaq === faq.id ? '−' : '+'}
                            </span>
                          </div>
                        </button>
                        {expandedFaq === faq.id && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-700 text-sm">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
            <div>
              <h3 className="font-semibold text-red-800 mb-1">Important Reminder</h3>
              <p className="text-red-700 text-sm">
                This information is for educational purposes only and should not replace professional medical advice. 
                Always consult with your healthcare provider about your individual risk factors, screening schedule, 
                and any concerning symptoms. Early detection saves lives!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/assessment">
            <Button>Take Risk Assessment</Button>
          </Link>
          <Link to="/chat">
            <Button variant="outline">Chat with AI Assistant</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WomensHealth;
