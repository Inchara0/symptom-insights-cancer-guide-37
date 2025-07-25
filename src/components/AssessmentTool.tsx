import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { value: number; label: string }[];
}

interface AssessmentData {
  [key: string]: {
    name: string;
    questions: Question[];
  };
}

const AssessmentTool = () => {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const assessmentData: AssessmentData = {
    general: {
      name: "General Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 1, label: "Under 30" },
          { value: 2, label: "30-40" },
          { value: 3, label: "40-50" },
          { value: 4, label: "50-60" },
          { value: 5, label: "Over 60" }
        ]},
        { id: "family_history", question: "Do you have a family history of cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "Distant relatives" },
          { value: 5, label: "Close relatives (parents, siblings)" }
        ]},
        { id: "smoking", question: "What is your smoking status?", options: [
          { value: 1, label: "Never smoked" },
          { value: 2, label: "Former smoker (quit >5 years ago)" },
          { value: 3, label: "Former smoker (quit <5 years ago)" },
          { value: 5, label: "Current smoker" }
        ]},
        { id: "alcohol", question: "How often do you consume alcohol?", options: [
          { value: 1, label: "Never/Rarely" },
          { value: 2, label: "1-2 drinks per week" },
          { value: 3, label: "3-7 drinks per week" },
          { value: 4, label: "More than 7 drinks per week" }
        ]},
        { id: "diet", question: "How would you describe your diet?", options: [
          { value: 1, label: "Very healthy (lots of fruits/vegetables)" },
          { value: 2, label: "Moderately healthy" },
          { value: 3, label: "Average" },
          { value: 4, label: "Poor (processed foods, limited fruits/vegetables)" }
        ]},
        { id: "exercise", question: "How often do you exercise?", options: [
          { value: 1, label: "5+ times per week" },
          { value: 2, label: "3-4 times per week" },
          { value: 3, label: "1-2 times per week" },
          { value: 4, label: "Rarely/Never" }
        ]},
        { id: "weight", question: "What is your BMI status?", options: [
          { value: 1, label: "Normal weight (BMI 18.5-24.9)" },
          { value: 2, label: "Slightly overweight (BMI 25-29.9)" },
          { value: 3, label: "Obese (BMI 30-34.9)" },
          { value: 4, label: "Severely obese (BMI 35+)" }
        ]},
        { id: "sun_exposure", question: "How often do you protect yourself from sun exposure?", options: [
          { value: 1, label: "Always use sunscreen and protective clothing" },
          { value: 2, label: "Usually protect myself" },
          { value: 3, label: "Sometimes protect myself" },
          { value: 4, label: "Rarely protect myself" }
        ]}
      ]
    },
    breast: {
      name: "Breast Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 1, label: "Under 40" },
          { value: 2, label: "40-49" },
          { value: 3, label: "50-59" },
          { value: 4, label: "60-69" },
          { value: 5, label: "70+" }
        ]},
        { id: "family_history", question: "Family history of breast or ovarian cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "One relative with breast cancer" },
          { value: 5, label: "Multiple relatives or BRCA mutation" }
        ]},
        { id: "personal_history", question: "Any personal history of breast problems?", options: [
          { value: 1, label: "No history" },
          { value: 3, label: "Benign breast disease" },
          { value: 4, label: "Previous breast cancer" }
        ]},
        { id: "reproductive_history", question: "At what age did you have your first child?", options: [
          { value: 1, label: "Before 20" },
          { value: 2, label: "20-24" },
          { value: 3, label: "25-29" },
          { value: 4, label: "30 or older" },
          { value: 5, label: "Never had children" }
        ]},
        { id: "menstrual_history", question: "At what age did you start menstruating?", options: [
          { value: 1, label: "14 or older" },
          { value: 2, label: "13" },
          { value: 3, label: "12" },
          { value: 4, label: "11 or younger" }
        ]},
        { id: "hormone_therapy", question: "Have you used hormone replacement therapy?", options: [
          { value: 1, label: "Never used" },
          { value: 2, label: "Used for less than 5 years" },
          { value: 4, label: "Used for 5+ years" }
        ]},
        { id: "breast_density", question: "What is your breast density (if known)?", options: [
          { value: 1, label: "Low density" },
          { value: 2, label: "Moderate density" },
          { value: 3, label: "High density" },
          { value: 2, label: "Unknown" }
        ]}
      ]
    },
    lung: {
      name: "Lung Cancer Risk Assessment",
      questions: [
        { id: "smoking_status", question: "What is your smoking history?", options: [
          { value: 1, label: "Never smoked" },
          { value: 3, label: "Former smoker (quit >15 years ago)" },
          { value: 4, label: "Former smoker (quit 5-15 years ago)" },
          { value: 5, label: "Current smoker or quit <5 years ago" }
        ]},
        { id: "pack_years", question: "If you smoked, how many pack-years?", options: [
          { value: 1, label: "Never smoked" },
          { value: 2, label: "Less than 10 pack-years" },
          { value: 3, label: "10-20 pack-years" },
          { value: 4, label: "20-30 pack-years" },
          { value: 5, label: "More than 30 pack-years" }
        ]},
        { id: "secondhand_smoke", question: "Exposure to secondhand smoke?", options: [
          { value: 1, label: "Minimal exposure" },
          { value: 2, label: "Moderate exposure" },
          { value: 3, label: "Heavy exposure" }
        ]},
        { id: "occupational_exposure", question: "Occupational exposure to carcinogens?", options: [
          { value: 1, label: "No known exposure" },
          { value: 3, label: "Some exposure (asbestos, radon, etc.)" },
          { value: 4, label: "High exposure" }
        ]},
        { id: "family_history", question: "Family history of lung cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "One relative" },
          { value: 4, label: "Multiple relatives" }
        ]}
      ]
    },
    colorectal: {
      name: "Colorectal Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 1, label: "Under 45" },
          { value: 2, label: "45-49" },
          { value: 3, label: "50-59" },
          { value: 4, label: "60-69" },
          { value: 5, label: "70+" }
        ]},
        { id: "family_history", question: "Family history of colorectal cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "One relative diagnosed after 60" },
          { value: 4, label: "One relative diagnosed before 60" },
          { value: 5, label: "Multiple relatives" }
        ]},
        { id: "personal_history", question: "Personal history of polyps or IBD?", options: [
          { value: 1, label: "No history" },
          { value: 3, label: "History of polyps" },
          { value: 4, label: "Inflammatory bowel disease" }
        ]},
        { id: "diet", question: "How often do you eat red or processed meat?", options: [
          { value: 1, label: "Rarely" },
          { value: 2, label: "1-2 times per week" },
          { value: 3, label: "3-4 times per week" },
          { value: 4, label: "Daily" }
        ]},
        { id: "lifestyle", question: "Physical activity level?", options: [
          { value: 1, label: "Very active" },
          { value: 2, label: "Moderately active" },
          { value: 3, label: "Somewhat active" },
          { value: 4, label: "Sedentary" }
        ]}
      ]
    },
    prostate: {
      name: "Prostate Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 1, label: "Under 50" },
          { value: 2, label: "50-59" },
          { value: 3, label: "60-69" },
          { value: 4, label: "70-79" },
          { value: 5, label: "80+" }
        ]},
        { id: "race", question: "What is your race/ethnicity?", options: [
          { value: 2, label: "White" },
          { value: 3, label: "Hispanic" },
          { value: 4, label: "African American" },
          { value: 2, label: "Asian" },
          { value: 2, label: "Other" }
        ]},
        { id: "family_history", question: "Family history of prostate cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "One relative" },
          { value: 4, label: "Multiple relatives" }
        ]},
        { id: "psa_levels", question: "Previous PSA test results?", options: [
          { value: 1, label: "Normal PSA levels" },
          { value: 2, label: "Slightly elevated PSA" },
          { value: 3, label: "Moderately elevated PSA" },
          { value: 4, label: "High PSA levels" },
          { value: 2, label: "Never tested" }
        ]},
        { id: "symptoms", question: "Any urinary symptoms?", options: [
          { value: 1, label: "No symptoms" },
          { value: 2, label: "Mild symptoms" },
          { value: 3, label: "Moderate symptoms" },
          { value: 4, label: "Severe symptoms" }
        ]}
      ]
    },
    skin: {
      name: "Skin Cancer Risk Assessment",
      questions: [
        { id: "skin_type", question: "What is your skin type?", options: [
          { value: 1, label: "Dark skin, never burns" },
          { value: 2, label: "Medium skin, rarely burns" },
          { value: 3, label: "Light skin, sometimes burns" },
          { value: 4, label: "Very light skin, always burns" }
        ]},
        { id: "sun_exposure", question: "History of sun exposure?", options: [
          { value: 1, label: "Minimal sun exposure" },
          { value: 2, label: "Moderate sun exposure" },
          { value: 3, label: "High sun exposure" },
          { value: 4, label: "Extreme sun exposure" }
        ]},
        { id: "sunburns", question: "History of severe sunburns?", options: [
          { value: 1, label: "Never had severe sunburns" },
          { value: 2, label: "1-2 severe sunburns" },
          { value: 3, label: "3-5 severe sunburns" },
          { value: 4, label: "More than 5 severe sunburns" }
        ]},
        { id: "moles", question: "Number of moles on your body?", options: [
          { value: 1, label: "Few moles (under 25)" },
          { value: 2, label: "Some moles (25-50)" },
          { value: 3, label: "Many moles (50-100)" },
          { value: 4, label: "Very many moles (over 100)" }
        ]},
        { id: "family_history", question: "Family history of skin cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "One relative" },
          { value: 4, label: "Multiple relatives" }
        ]}
      ]
    },
    cervical: {
      name: "Cervical Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 1, label: "Under 25" },
          { value: 2, label: "25-34" },
          { value: 3, label: "35-44" },
          { value: 4, label: "45-54" },
          { value: 3, label: "55+" }
        ]},
        { id: "hpv_status", question: "HPV vaccination status?", options: [
          { value: 1, label: "Fully vaccinated" },
          { value: 2, label: "Partially vaccinated" },
          { value: 4, label: "Not vaccinated" },
          { value: 3, label: "Unknown" }
        ]},
        { id: "screening_history", question: "When was your last Pap smear?", options: [
          { value: 1, label: "Within last year" },
          { value: 2, label: "1-3 years ago" },
          { value: 3, label: "3-5 years ago" },
          { value: 4, label: "More than 5 years ago" },
          { value: 5, label: "Never had one" }
        ]},
        { id: "sexual_history", question: "Age at first sexual intercourse?", options: [
          { value: 1, label: "18 or older" },
          { value: 2, label: "16-17" },
          { value: 3, label: "14-15" },
          { value: 4, label: "Under 14" }
        ]},
        { id: "smoking", question: "Smoking status?", options: [
          { value: 1, label: "Never smoked" },
          { value: 2, label: "Former smoker" },
          { value: 4, label: "Current smoker" }
        ]}
      ]
    },
    pancreatic: {
      name: "Pancreatic Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 1, label: "Under 50" },
          { value: 2, label: "50-59" },
          { value: 3, label: "60-69" },
          { value: 4, label: "70-79" },
          { value: 5, label: "80+" }
        ]},
        { id: "family_history", question: "Family history of pancreatic cancer?", options: [
          { value: 1, label: "No family history" },
          { value: 4, label: "One relative" },
          { value: 5, label: "Multiple relatives" }
        ]},
        { id: "diabetes", question: "History of diabetes?", options: [
          { value: 1, label: "No diabetes" },
          { value: 2, label: "Type 2 diabetes >5 years" },
          { value: 3, label: "Type 2 diabetes <5 years" },
          { value: 4, label: "Recent onset diabetes" }
        ]},
        { id: "smoking", question: "Smoking history?", options: [
          { value: 1, label: "Never smoked" },
          { value: 2, label: "Former smoker" },
          { value: 4, label: "Current smoker" }
        ]},
        { id: "pancreatitis", question: "History of pancreatitis?", options: [
          { value: 1, label: "No history" },
          { value: 3, label: "Acute pancreatitis" },
          { value: 4, label: "Chronic pancreatitis" }
        ]}
      ]
    },
    brain: {
      name: "Brain Cancer Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 2, label: "Under 20" },
          { value: 1, label: "20-39" },
          { value: 2, label: "40-59" },
          { value: 3, label: "60+" }
        ]},
        { id: "family_history", question: "Family history of brain tumors?", options: [
          { value: 1, label: "No family history" },
          { value: 4, label: "One relative" },
          { value: 5, label: "Multiple relatives or genetic syndrome" }
        ]},
        { id: "radiation_exposure", question: "Previous radiation to head/neck?", options: [
          { value: 1, label: "No radiation exposure" },
          { value: 3, label: "Medical radiation (CT scans, etc.)" },
          { value: 4, label: "Therapeutic radiation" }
        ]},
        { id: "immune_system", question: "Immune system status?", options: [
          { value: 1, label: "Normal immune system" },
          { value: 3, label: "Immunocompromised" }
        ]},
        { id: "symptoms", question: "Any neurological symptoms?", options: [
          { value: 1, label: "No symptoms" },
          { value: 2, label: "Occasional headaches" },
          { value: 3, label: "Persistent headaches" },
          { value: 4, label: "Seizures or other neurological symptoms" }
        ]}
      ]
    },
    oral: {
      name: "Oral Cancer Risk Assessment",
      questions: [
        { id: "tobacco_use", question: "Tobacco use history?", options: [
          { value: 1, label: "Never used tobacco" },
          { value: 2, label: "Former user" },
          { value: 4, label: "Current smoker" },
          { value: 5, label: "Current smokeless tobacco user" }
        ]},
        { id: "alcohol_use", question: "Alcohol consumption?", options: [
          { value: 1, label: "Never/Rarely drink" },
          { value: 2, label: "Moderate drinking" },
          { value: 4, label: "Heavy drinking" }
        ]},
        { id: "hpv_exposure", question: "HPV exposure risk?", options: [
          { value: 1, label: "Low risk" },
          { value: 2, label: "Moderate risk" },
          { value: 4, label: "High risk" }
        ]},
        { id: "dental_health", question: "Dental and oral health?", options: [
          { value: 1, label: "Excellent oral health" },
          { value: 2, label: "Good oral health" },
          { value: 3, label: "Fair oral health" },
          { value: 4, label: "Poor oral health" }
        ]},
        { id: "sun_exposure", question: "Sun exposure to lips?", options: [
          { value: 1, label: "Always use lip protection" },
          { value: 2, label: "Sometimes use protection" },
          { value: 3, label: "Rarely use protection" },
          { value: 4, label: "Never use protection" }
        ]}
      ]
    },
    leukemia: {
      name: "Leukemia Risk Assessment",
      questions: [
        { id: "age", question: "What is your age?", options: [
          { value: 3, label: "Under 15" },
          { value: 1, label: "15-39" },
          { value: 2, label: "40-59" },
          { value: 3, label: "60+" }
        ]},
        { id: "family_history", question: "Family history of blood cancers?", options: [
          { value: 1, label: "No family history" },
          { value: 3, label: "One relative" },
          { value: 4, label: "Multiple relatives" }
        ]},
        { id: "chemical_exposure", question: "Exposure to chemicals or radiation?", options: [
          { value: 1, label: "No known exposure" },
          { value: 2, label: "Minimal exposure" },
          { value: 3, label: "Moderate exposure" },
          { value: 4, label: "High exposure" }
        ]},
        { id: "previous_cancer", question: "Previous cancer treatment?", options: [
          { value: 1, label: "No previous cancer" },
          { value: 3, label: "Previous chemotherapy" },
          { value: 4, label: "Previous radiation therapy" }
        ]},
        { id: "blood_disorders", question: "History of blood disorders?", options: [
          { value: 1, label: "No blood disorders" },
          { value: 3, label: "Anemia or other blood conditions" },
          { value: 4, label: "Genetic blood disorders" }
        ]}
      ]
    }
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateRisk = () => {
    if (!selectedAssessment) return 0;
    const assessment = assessmentData[selectedAssessment];
    const totalQuestions = assessment.questions.length;
    const maxScore = totalQuestions * 5;
    const currentScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    return Math.round((currentScore / maxScore) * 100);
  };

  const getRiskLevel = (risk: number) => {
    if (risk < 30) return { level: "Low", color: "text-cancer-success", bgColor: "bg-cancer-success/10" };
    if (risk < 60) return { level: "Moderate", color: "text-cancer-warning", bgColor: "bg-cancer-warning/10" };
    return { level: "High", color: "text-destructive", bgColor: "bg-destructive/10" };
  };

  const currentAssessment = selectedAssessment ? assessmentData[selectedAssessment] : null;
  const currentQuestionData = currentAssessment?.questions[currentQuestion];
  const progress = currentAssessment ? ((currentQuestion + 1) / currentAssessment.questions.length) * 100 : 0;

  if (showResults && selectedAssessment) {
    const risk = calculateRisk();
    const riskInfo = getRiskLevel(risk);
    
    return (
      <Card className="cancer-card max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gradient">Assessment Results</CardTitle>
          <CardDescription>{currentAssessment?.name}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${riskInfo.bgColor} mb-4`}>
              <span className={`text-3xl font-bold ${riskInfo.color}`}>{risk}%</span>
            </div>
            <h3 className={`text-xl font-semibold ${riskInfo.color}`}>{riskInfo.level} Risk</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">What this means:</h4>
              {risk < 30 && (
                <p className="text-sm text-muted-foreground">
                  Your risk appears to be in the lower range. Continue with recommended preventive measures and regular screening.
                </p>
              )}
              {risk >= 30 && risk < 60 && (
                <p className="text-sm text-muted-foreground">
                  Your risk is moderate. Consider discussing enhanced screening options with your healthcare provider.
                </p>
              )}
              {risk >= 60 && (
                <p className="text-sm text-muted-foreground">
                  Your risk appears elevated. It's important to discuss these results with your healthcare provider for personalized recommendations.
                </p>
              )}
            </div>
            
            <div className="p-4 rounded-lg bg-primary/5">
              <h4 className="font-semibold mb-2">Important Note:</h4>
              <p className="text-sm text-muted-foreground">
                This assessment is for educational purposes only and should not replace professional medical advice. 
                Please consult with your healthcare provider for personalized risk assessment and screening recommendations.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
              }}
              className="flex-1"
            >
              Take Another Assessment
            </Button>
            <Button 
              onClick={() => {
                setSelectedAssessment(null);
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
              }}
              className="flex-1"
            >
              Back to Menu
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (selectedAssessment && currentQuestionData) {
    return (
      <Card className="cancer-card max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(prev => prev - 1);
                } else {
                  setSelectedAssessment(null);
                  setAnswers({});
                }
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {currentAssessment.questions.length}
            </span>
          </div>
          <CardTitle className="text-xl">{currentAssessment.name}</CardTitle>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentQuestionData.question}</h3>
            <RadioGroup
              value={answers[currentQuestionData.id]?.toString() || ""}
              onValueChange={(value) => handleAnswer(currentQuestionData.id, parseInt(value))}
              className="space-y-3"
            >
              {currentQuestionData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/20 transition-colors">
                  <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1 text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(prev => prev - 1)}
              disabled={currentQuestion === 0}
              className="flex-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentQuestion < currentAssessment.questions.length - 1) {
                  setCurrentQuestion(prev => prev + 1);
                } else {
                  setShowResults(true);
                }
              }}
              disabled={!answers[currentQuestionData.id]}
              className="flex-1"
            >
              {currentQuestion < currentAssessment.questions.length - 1 ? (
                <>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              ) : (
                <>
                  View Results
                  <CheckCircle className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="cancer-card mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gradient">Cancer Risk Assessments</CardTitle>
          <CardDescription className="text-lg">
            Take targeted assessments to understand your risk factors for specific cancer types
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(assessmentData).map(([key, assessment]) => (
          <motion.div key={key} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card 
              className="cancer-card cursor-pointer h-full hover:bg-muted/20 transition-colors"
              onClick={() => setSelectedAssessment(key)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{assessment.name}</CardTitle>
                <CardDescription>
                  {key === 'general' ? '8 questions' : '5-7 questions'} • 
                  {key === 'general' ? ' Comprehensive overview' : ' Targeted assessment'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start p-0">
                  Start Assessment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentTool;