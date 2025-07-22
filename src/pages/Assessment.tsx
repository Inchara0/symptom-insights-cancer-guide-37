
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, AlertTriangle, CheckCircle, ChevronRight, Target, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import RiskRadarChart from "@/components/RiskRadarChart";

interface Question {
  id: string;
  text: string;
}

interface TestType {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: Question[];
  minRequired: number;
}

interface RiskAssessment {
  testName: string;
  riskLevel: "Low" | "Moderate" | "High";
  positiveAnswers: number;
  totalAnswered: number;
  description: string;
}

const Assessment = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const testTypes: TestType[] = [
    {
      id: "lung",
      name: "Lung Cancer",
      description: "Assess symptoms related to lung cancer including breathing, coughing, and chest pain",
      icon: "🫁",
      minRequired: 5,
      questions: [
        { id: "lung_1", text: "Do you have a persistent cough that won't go away or has worsened?" },
        { id: "lung_2", text: "Have you coughed up blood or blood-stained mucus?" },
        { id: "lung_3", text: "Are you experiencing shortness of breath during normal activities?" },
        { id: "lung_4", text: "Do you have chest pain that worsens when breathing, coughing, or laughing?" },
        { id: "lung_5", text: "Have you experienced unexplained weight loss recently?" },
        { id: "lung_6", text: "Do you feel unusually tired or weak without obvious reason?" },
        { id: "lung_7", text: "Have you noticed hoarseness or voice changes?" },
        { id: "lung_8", text: "Do you frequently get respiratory infections like bronchitis or pneumonia?" },
        { id: "lung_9", text: "Have you ever been a smoker or regularly exposed to secondhand smoke?" },
        { id: "lung_10", text: "Do you have a family history of lung cancer?" }
      ]
    },
    {
      id: "oral",
      name: "Oral Cancer",
      description: "Check for symptoms affecting mouth, throat, tongue, and surrounding areas",
      icon: "👄",
      minRequired: 5,
      questions: [
        { id: "oral_1", text: "Do you have persistent mouth sores or ulcers that don't heal?" },
        { id: "oral_2", text: "Have you noticed white or red patches in your mouth?" },
        { id: "oral_3", text: "Do you experience persistent pain in your mouth or throat?" },
        { id: "oral_4", text: "Have you noticed lumps or thickening in your cheek, neck, or throat?" },
        { id: "oral_5", text: "Do you have difficulty swallowing or feel like something is stuck?" },
        { id: "oral_6", text: "Have you experienced persistent hoarseness or voice changes?" },
        { id: "oral_7", text: "Do you have numbness in your tongue, lip, or other mouth areas?" },
        { id: "oral_8", text: "Have you noticed loose teeth without obvious dental problems?" },
        { id: "oral_9", text: "Do you use tobacco products or drink alcohol regularly?" },
        { id: "oral_10", text: "Do you have a history of HPV infection?" }
      ]
    },
    {
      id: "breast",
      name: "Breast Cancer",
      description: "Evaluate breast health symptoms and changes",
      icon: "🎗️",
      minRequired: 5,
      questions: [
        { id: "breast_1", text: "Have you noticed any unusual lumps or thickening in your breast or underarm?" },
        { id: "breast_2", text: "Have you experienced changes in breast shape or size?" },
        { id: "breast_3", text: "Is there any nipple discharge that is not breast milk?" },
        { id: "breast_4", text: "Do you have persistent breast pain that doesn't go away?" },
        { id: "breast_5", text: "Have you seen skin changes on your breast (dimpling, redness, flaking)?" },
        { id: "breast_6", text: "Has a nipple suddenly turned inward (inverted)?" },
        { id: "breast_7", text: "Have you experienced swelling in part or all of the breast?" },
        { id: "breast_8", text: "Are there lumps that feel hard and don't move?" },
        { id: "breast_9", text: "Has your breast felt warmer than usual or looked inflamed?" },
        { id: "breast_10", text: "Do you have a family history of breast or ovarian cancer?" }
      ]
    },
    {
      id: "skin",
      name: "Skin Cancer",
      description: "Examine skin changes, moles, and sun exposure risks",
      icon: "🔍",
      minRequired: 5,
      questions: [
        { id: "skin_1", text: "Have you noticed any new moles or skin growths recently?" },
        { id: "skin_2", text: "Has an existing mole changed in size, shape, or color?" },
        { id: "skin_3", text: "Do you have moles with irregular, jagged, or blurred edges?" },
        { id: "skin_4", text: "Is there a mole or lesion that itches, bleeds, or won't heal?" },
        { id: "skin_5", text: "Do you have spots that are multicolored or unusually dark?" },
        { id: "skin_6", text: "Have you had significant sun exposure without sunscreen protection?" },
        { id: "skin_7", text: "Do you have fair skin, light eyes, or red/blonde hair?" },
        { id: "skin_8", text: "Has a family member had skin cancer or melanoma?" },
        { id: "skin_9", text: "Do you have more than 50 moles or unusually large moles?" },
        { id: "skin_10", text: "Have you used tanning beds or had severe sunburns?" }
      ]
    },
    {
      id: "cervical",
      name: "Cervical Cancer",
      description: "Screen for cervical and reproductive health symptoms",
      icon: "🌸",
      minRequired: 5,
      questions: [
        { id: "cervical_1", text: "Have you had unusual vaginal bleeding between periods or after menopause?" },
        { id: "cervical_2", text: "Have you noticed a strong or unusual vaginal odor?" },
        { id: "cervical_3", text: "Do you experience pain during sexual intercourse?" },
        { id: "cervical_4", text: "Do you have pelvic pain not related to menstruation?" },
        { id: "cervical_5", text: "Are your periods heavier or longer than usual?" },
        { id: "cervical_6", text: "Have you ever tested positive for HPV?" },
        { id: "cervical_7", text: "Have you missed a Pap smear in the last 3 years?" },
        { id: "cervical_8", text: "Have you had multiple sexual partners without consistent protection?" },
        { id: "cervical_9", text: "Have you noticed unexplained leg pain or swelling?" },
        { id: "cervical_10", text: "Do you have a weakened immune system or history of HIV?" }
      ]
    },
    {
      id: "colorectal",
      name: "Colorectal Cancer",
      description: "Assess digestive system and bowel-related symptoms",
      icon: "🩺",
      minRequired: 5,
      questions: [
        { id: "colorectal_1", text: "Have you noticed blood in your stool or on toilet paper?" },
        { id: "colorectal_2", text: "Have your bowel habits changed recently (lasting more than a few days)?" },
        { id: "colorectal_3", text: "Do you often feel your bowel doesn't empty completely?" },
        { id: "colorectal_4", text: "Have you experienced unexplained weight loss?" },
        { id: "colorectal_5", text: "Do you frequently feel tired or weak without reason?" },
        { id: "colorectal_6", text: "Have you had frequent abdominal cramps, pain, or bloating?" },
        { id: "colorectal_7", text: "Are you over the age of 45?" },
        { id: "colorectal_8", text: "Do you have a history of colon polyps or inflammatory bowel disease?" },
        { id: "colorectal_9", text: "Has a close family member had colon or rectal cancer?" },
        { id: "colorectal_10", text: "Do you have a diet high in red meat and low in fiber?" }
      ]
    },
    {
      id: "prostate",
      name: "Prostate Cancer",
      description: "Evaluate urinary and prostate-related symptoms",
      icon: "♂️",
      minRequired: 5,
      questions: [
        { id: "prostate_1", text: "Do you have difficulty starting or stopping urination?" },
        { id: "prostate_2", text: "Do you feel a frequent need to urinate, especially at night?" },
        { id: "prostate_3", text: "Do you experience a weak or interrupted urine stream?" },
        { id: "prostate_4", text: "Have you noticed blood in your urine or semen?" },
        { id: "prostate_5", text: "Do you have pain or burning while urinating?" },
        { id: "prostate_6", text: "Have you felt pain in your lower back, hips, or thighs?" },
        { id: "prostate_7", text: "Are you over the age of 50?" },
        { id: "prostate_8", text: "Do you have a family history of prostate cancer?" },
        { id: "prostate_9", text: "Have you experienced erectile dysfunction?" },
        { id: "prostate_10", text: "Do you have African ancestry (higher risk factor)?" }
      ]
    },
    {
      id: "pancreatic",
      name: "Pancreatic Cancer",
      description: "Check for pancreatic and upper abdominal symptoms",
      icon: "🫃",
      minRequired: 5,
      questions: [
        { id: "pancreatic_1", text: "Have you experienced upper abdominal pain radiating to your back?" },
        { id: "pancreatic_2", text: "Have you had unexplained weight loss recently?" },
        { id: "pancreatic_3", text: "Have you noticed yellowing of your skin or eyes (jaundice)?" },
        { id: "pancreatic_4", text: "Do you have dark-colored urine and/or light-colored stools?" },
        { id: "pancreatic_5", text: "Have you experienced loss of appetite or nausea?" },
        { id: "pancreatic_6", text: "Are you often fatigued without clear reason?" },
        { id: "pancreatic_7", text: "Have you recently developed diabetes or blood sugar changes?" },
        { id: "pancreatic_8", text: "Do you smoke or have a history of smoking?" },
        { id: "pancreatic_9", text: "Do you have a family history of pancreatic cancer?" },
        { id: "pancreatic_10", text: "Have you noticed blood clots or leg pain/swelling?" }
      ]
    },
    {
      id: "leukemia",
      name: "Leukemia",
      description: "Assess blood-related symptoms and immune system changes",
      icon: "🩸",
      minRequired: 5,
      questions: [
        { id: "leukemia_1", text: "Do you frequently feel weak, tired, or short of breath?" },
        { id: "leukemia_2", text: "Have you had frequent infections or fever?" },
        { id: "leukemia_3", text: "Do you bruise easily or have unusual bleeding?" },
        { id: "leukemia_4", text: "Have you noticed tiny red spots on your skin (petechiae)?" },
        { id: "leukemia_5", text: "Do you have swollen lymph nodes in your neck, armpits, or groin?" },
        { id: "leukemia_6", text: "Have you experienced bone or joint pain?" },
        { id: "leukemia_7", text: "Have you had unexplained weight loss?" },
        { id: "leukemia_8", text: "Do you feel full quickly or have abdominal discomfort?" },
        { id: "leukemia_9", text: "Have you had night sweats or chills?" },
        { id: "leukemia_10", text: "Do you have a family history of blood cancers?" }
      ]
    },
    {
      id: "ovarian",
      name: "Ovarian Cancer",
      description: "Screen for ovarian and pelvic health symptoms",
      icon: "🌺",
      minRequired: 5,
      questions: [
        { id: "ovarian_1", text: "Have you experienced persistent abdominal bloating?" },
        { id: "ovarian_2", text: "Do you feel full quickly after starting meals?" },
        { id: "ovarian_3", text: "Do you have pelvic or abdominal pain that persists?" },
        { id: "ovarian_4", text: "Have you had changes in bowel habits (constipation or diarrhea)?" },
        { id: "ovarian_5", text: "Are you urinating more frequently than usual?" },
        { id: "ovarian_6", text: "Have you experienced sudden or unexplained weight changes?" },
        { id: "ovarian_7", text: "Have you felt fatigue or lack of energy without reason?" },
        { id: "ovarian_8", text: "Do you have a family history of ovarian or breast cancer?" },
        { id: "ovarian_9", text: "Have you had irregular menstrual cycles or unusual bleeding?" },
        { id: "ovarian_10", text: "Have you never been pregnant or had fertility issues?" }
      ]
    },
    {
      id: "general",
      name: "General Cancer Screening",
      description: "Comprehensive assessment covering multiple cancer types and general symptoms",
      icon: "🔬",
      minRequired: 25,
      questions: [
        // General symptoms (10 questions)
        { id: "general_1", text: "Have you experienced unexplained weight loss of 10+ pounds?" },
        { id: "general_2", text: "Do you feel unusually tired or weak most days?" },
        { id: "general_3", text: "Have you had fever or night sweats without obvious cause?" },
        { id: "general_4", text: "Do you have persistent pain anywhere in your body?" },
        { id: "general_5", text: "Have you noticed any unusual lumps or swellings?" },
        { id: "general_6", text: "Have you had persistent nausea or loss of appetite?" },
        { id: "general_7", text: "Do you have any unusual bleeding or discharge?" },
        { id: "general_8", text: "Have you noticed changes in your skin, moles, or warts?" },
        { id: "general_9", text: "Do you have difficulty swallowing or persistent indigestion?" },
        { id: "general_10", text: "Have you had a cough or hoarseness that won't go away?" },
        
        // Respiratory/Chest (5 questions)
        { id: "general_11", text: "Do you have persistent chest pain or discomfort?" },
        { id: "general_12", text: "Are you experiencing shortness of breath during normal activities?" },
        { id: "general_13", text: "Have you coughed up blood or blood-stained mucus?" },
        { id: "general_14", text: "Do you frequently get respiratory infections?" },
        { id: "general_15", text: "Have you been exposed to asbestos, radon, or other carcinogens?" },
        
        // Digestive (8 questions)
        { id: "general_16", text: "Have you noticed blood in your stool or black, tarry stools?" },
        { id: "general_17", text: "Have your bowel habits changed significantly recently?" },
        { id: "general_18", text: "Do you have persistent abdominal pain or bloating?" },
        { id: "general_19", text: "Have you vomited blood or coffee-ground material?" },
        { id: "general_20", text: "Do you have persistent heartburn or indigestion?" },
        { id: "general_21", text: "Have you noticed yellowing of your skin or eyes?" },
        { id: "general_22", text: "Do you have dark urine or light-colored stools?" },
        { id: "general_23", text: "Have you felt full quickly when eating small amounts?" },
        
        // Reproductive/Genitourinary (7 questions)
        { id: "general_24", text: "Have you had unusual vaginal bleeding or discharge?" },
        { id: "general_25", text: "Do you have pelvic pain not related to menstruation?" },
        { id: "general_26", text: "Have you noticed blood in your urine?" },
        { id: "general_27", text: "Do you have difficulty or pain while urinating?" },
        { id: "general_28", text: "Have you experienced changes in urination frequency?" },
        { id: "general_29", text: "Do you have testicular pain or swelling?" },
        { id: "general_30", text: "Have you noticed changes in breast shape, size, or texture?" },
        
        // Skin/External (5 questions)
        { id: "general_31", text: "Have you noticed new or changing moles or skin spots?" },
        { id: "general_32", text: "Do you have sores that don't heal within 2-3 weeks?" },
        { id: "general_33", text: "Have you found unusual lumps in your neck, armpits, or groin?" },
        { id: "general_34", text: "Do you bruise easily or have unexplained bruising?" },
        { id: "general_35", text: "Have you noticed swollen lymph nodes?" },
        
        // Neurological (5 questions)
        { id: "general_36", text: "Have you experienced persistent headaches or vision changes?" },
        { id: "general_37", text: "Do you have numbness, tingling, or weakness in limbs?" },
        { id: "general_38", text: "Have you had seizures or balance problems?" },
        { id: "general_39", text: "Do you experience memory problems or confusion?" },
        { id: "general_40", text: "Have you noticed changes in speech or coordination?" },
        
        // Risk factors (10 questions)
        { id: "general_41", text: "Do you smoke or use tobacco products?" },
        { id: "general_42", text: "Do you drink alcohol regularly (more than 2 drinks/day)?" },
        { id: "general_43", text: "Are you significantly overweight or obese?" },
        { id: "general_44", text: "Do you have a family history of cancer?" },
        { id: "general_45", text: "Have you been exposed to radiation or chemotherapy?" },
        { id: "general_46", text: "Do you have a history of chronic infections (HPV, Hepatitis, H. pylori)?" },
        { id: "general_47", text: "Have you taken hormone replacement therapy or birth control for many years?" },
        { id: "general_48", text: "Do you have a diet high in processed meats and low in fruits/vegetables?" },
        { id: "general_49", text: "Are you over 50 years old?" },
        { id: "general_50", text: "Have you missed recommended cancer screenings (mammogram, colonoscopy, Pap smear)?" }
      ]
    }
  ];

  const calculateRisk = (test: TestType): RiskAssessment => {
    const answeredQuestions = test.questions.filter(q => answers[q.id] !== undefined);
    const positiveAnswers = answeredQuestions.filter(q => answers[q.id] === true).length;
    const totalAnswered = answeredQuestions.length;
    
    let riskLevel: "Low" | "Moderate" | "High" = "Low";
    let description = "";

    if (test.id === "general") {
      // General screening risk calculation
      if (positiveAnswers === 0) {
        riskLevel = "Low";
        description = "No concerning symptoms reported. Continue regular health screenings as recommended.";
      } else if (positiveAnswers <= 5) {
        riskLevel = "Low";
        description = "Few symptoms reported. Monitor these symptoms and discuss with your healthcare provider during routine visits.";
      } else if (positiveAnswers <= 15) {
        riskLevel = "Moderate";
        description = "Several symptoms reported. We recommend scheduling an appointment with your healthcare provider to discuss these symptoms.";
      } else {
        riskLevel = "High";
        description = "Multiple concerning symptoms reported. Please contact your healthcare provider promptly for evaluation.";
      }
    } else {
      // Cancer-specific risk calculation
      if (positiveAnswers === 0) {
        riskLevel = "Low";
        description = `No concerning symptoms reported for ${test.name}. Continue regular health screenings.`;
      } else if (positiveAnswers <= 2) {
        riskLevel = "Low";
        description = `Few symptoms reported for ${test.name}. Monitor and discuss with your healthcare provider.`;
      } else if (positiveAnswers <= 4) {
        riskLevel = "Moderate";
        description = `Several symptoms reported for ${test.name}. Schedule an appointment with your healthcare provider.`;
      } else {
        riskLevel = "High";
        description = `Multiple concerning symptoms for ${test.name}. Please contact your healthcare provider promptly.`;
      }
    }

    return {
      testName: test.name,
      riskLevel,
      positiveAnswers,
      totalAnswered,
      description
    };
  };

  const handleAnswer = (answer: boolean) => {
    const currentTest = testTypes.find(t => t.id === selectedTest);
    if (!currentTest) return;

    setAnswers(prev => ({
      ...prev,
      [currentTest.questions[currentQuestion].id]: answer
    }));

    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const canShowResults = () => {
    const currentTest = testTypes.find(t => t.id === selectedTest);
    if (!currentTest) return false;
    
    const answeredCount = currentTest.questions.filter(q => answers[q.id] !== undefined).length;
    return answeredCount >= currentTest.minRequired;
  };

  const skipToResults = () => {
    if (canShowResults()) {
      setShowResults(true);
    }
  };

  // Test selection screen
  if (!selectedTest) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Assessment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select a specific cancer screening test or take our comprehensive general assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {testTypes.slice(0, -1).map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedTest(test.id)}>
                <CardHeader>
                  <div className="text-center">
                    <div className="text-4xl mb-3">{test.icon}</div>
                    <CardTitle className="text-lg">{test.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">{test.description}</CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Questions:</span>
                      <span>{test.questions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minimum required:</span>
                      <span>{test.minRequired}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Target className="h-4 w-4 mr-2" />
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* General screening as featured option */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 bg-blue-50 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedTest('general')}>
              <CardHeader>
                <div className="text-center">
                  <div className="text-6xl mb-4">🔬</div>
                  <CardTitle className="text-2xl">General Cancer Screening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg mb-6">
                  Comprehensive assessment covering multiple cancer types and general warning signs. 
                  Perfect for overall health screening and early detection.
                </CardDescription>
                <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50</div>
                    <div className="text-sm text-gray-600">Total Questions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25</div>
                    <div className="text-sm text-gray-600">Minimum Required</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">Cancer Types</div>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  <Activity className="h-5 w-5 mr-2" />
                  Start Comprehensive Screening
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-semibold text-yellow-800 mb-2">How These Tests Work</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Each specific cancer test has 10 targeted questions</li>
              <li>• You need to answer at least 5 questions to get results</li>
              <li>• You can skip questions and finish early once minimum is reached</li>
              <li>• The general screening covers 50 questions across all cancer types</li>
              <li>• All assessments are for informational purposes only</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const currentTest = testTypes.find(t => t.id === selectedTest);
  if (!currentTest) return null;

  // Results screen
  if (showResults) {
    const riskAssessment = calculateRisk(currentTest);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => {
                setSelectedTest(null);
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
              }}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Choose Different Test
              </Button>
              <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">
                Back to Home
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentTest.name} Assessment Complete</h1>
            <p className="text-gray-600">Based on {riskAssessment.totalAnswered} answered questions</p>
          </div>

          <Card className={`border-l-4 mb-8 ${
            riskAssessment.riskLevel === "High" ? "border-l-red-500" :
            riskAssessment.riskLevel === "Moderate" ? "border-l-yellow-500" : 
            "border-l-green-500"
          }`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{riskAssessment.testName}</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {riskAssessment.positiveAnswers}/{riskAssessment.totalAnswered} symptoms
                  </span>
                  <Badge 
                    variant={riskAssessment.riskLevel === "High" ? "destructive" : 
                            riskAssessment.riskLevel === "Moderate" ? "default" : "secondary"}
                    className="text-base px-3 py-1"
                  >
                    {riskAssessment.riskLevel} Risk
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">{riskAssessment.description}</p>
            </CardContent>
          </Card>

          <div className="p-6 bg-red-50 border border-red-200 rounded-lg mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Important Medical Notice</h3>
                <p className="text-red-700 text-sm mb-4">
                  This assessment is for informational purposes only and should not replace professional medical advice. 
                  If you have concerning symptoms, please consult with a healthcare provider immediately.
                </p>
                <div className="text-red-800 text-sm">
                  <strong>Emergency Numbers:</strong> 112 (International) | 911 (US) | Contact your local emergency services
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/cancer-info">
              <Button>Learn About Cancer Types</Button>
            </Link>
            <Link to="/chat">
              <Button variant="outline">Ask AI Assistant</Button>
            </Link>
            <Button variant="outline" onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}>
              Retake This Test
            </Button>
            <Button variant="outline" onClick={() => {
              setSelectedTest(null);
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}>
              Try Different Test
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const progress = ((currentQuestion + 1) / currentTest.questions.length) * 100;
  const answeredCount = currentTest.questions.slice(0, currentQuestion + 1).filter(q => answers[q.id] !== undefined).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => setSelectedTest(null)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tests
            </Button>
            <Badge variant="outline">{currentTest.name}</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{currentTest.name} Assessment</h1>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {currentTest.questions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Answered: {answeredCount}</span>
            <span>Minimum required: {currentTest.minRequired}</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-4xl">{currentTest.icon}</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
            <CardTitle className="text-lg leading-relaxed">
              {currentTest.questions[currentQuestion].text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto p-6 text-lg"
                onClick={() => handleAnswer(true)}
              >
                Yes
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto p-6 text-lg"
                onClick={() => handleAnswer(false)}
              >
                No
              </Button>
              {canShowResults() && (
                <Button
                  variant="secondary"
                  className="w-full mt-4"
                  onClick={skipToResults}
                >
                  Skip Remaining Questions & See Results
                  <span className="ml-2 text-xs">({answeredCount}/{currentTest.minRequired} minimum reached)</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-700 text-sm">
            Answer honestly based on your current symptoms. You can finish this test once you've answered 
            at least {currentTest.minRequired} questions, or continue through all {currentTest.questions.length} for a more comprehensive assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
