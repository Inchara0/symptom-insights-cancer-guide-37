
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";

interface CancerType {
  id: string;
  name: string;
  category: string;
  prevalence: string;
  overview: string;
  symptoms: string[];
  riskFactors: string[];
  prevention: string;
  sources: { name: string; url: string }[];
}

const CancerInfo = () => {
  const [selectedCancer, setSelectedCancer] = useState<string | null>(null);

  const cancerTypes: CancerType[] = [
    {
      id: "breast",
      name: "Breast Cancer",
      category: "Common",
      prevalence: "1 in 8 women",
      overview: "Breast cancer forms in the cells of the breast tissue and is one of the most common cancers affecting women, though it can also occur in men. Early detection through regular screening significantly improves treatment outcomes. The cancer typically begins in the ducts that carry milk to the nipple or in the lobules that produce milk.",
      symptoms: ["Breast lumps", "Changes in breast size or shape", "Skin dimpling", "Nipple discharge", "Breast or nipple pain"],
      riskFactors: ["Age (over 50)", "Family history", "BRCA gene mutations", "Dense breast tissue", "Previous breast cancer"],
      prevention: "Regular mammograms starting at age 40-50, monthly self-examinations, maintaining a healthy weight, limiting alcohol consumption, and staying physically active. For high-risk individuals, genetic counseling and preventive medications may be recommended.",
      sources: [
        { name: "American Cancer Society", url: "https://www.cancer.org/cancer/breast-cancer.html" },
        { name: "National Cancer Institute", url: "https://www.cancer.gov/types/breast" }
      ]
    },
    {
      id: "colorectal",
      name: "Colorectal Cancer",
      category: "Common",
      prevalence: "1 in 23 people",
      overview: "Colorectal cancer develops in the colon or rectum and is often preventable through regular screening. It typically starts as small, benign clumps of cells called polyps that can become cancerous over time. Most colorectal cancers develop slowly over several years, making screening particularly effective for prevention and early detection.",
      symptoms: ["Changes in bowel habits", "Blood in stool", "Abdominal pain or cramping", "Unexplained weight loss", "Fatigue"],
      riskFactors: ["Age (over 50)", "Family history", "Inflammatory bowel disease", "Diet high in red meat", "Smoking", "Obesity"],
      prevention: "Regular colonoscopy screening starting at age 45-50, maintaining a diet rich in fruits and vegetables, limiting red and processed meats, staying physically active, avoiding smoking, and limiting alcohol consumption. Early removal of polyps during colonoscopy can prevent cancer development.",
      sources: [
        { name: "Colorectal Cancer Alliance", url: "https://www.ccalliance.org/" },
        { name: "CDC Colorectal Cancer", url: "https://www.cdc.gov/cancer/colorectal/" }
      ]
    },
    {
      id: "lung",
      name: "Lung Cancer",
      category: "Leading Cause",
      prevalence: "Leading cancer killer",
      overview: "Lung cancer is the leading cause of cancer deaths worldwide and is primarily caused by smoking, though non-smokers can also develop the disease. There are two main types: non-small cell lung cancer (most common) and small cell lung cancer. Early-stage lung cancer often has no symptoms, making screening important for high-risk individuals.",
      symptoms: ["Persistent cough", "Coughing up blood", "Shortness of breath", "Chest pain", "Hoarseness", "Unexplained weight loss"],
      riskFactors: ["Smoking", "Secondhand smoke", "Radon exposure", "Asbestos exposure", "Family history", "Air pollution"],
      prevention: "Never start smoking or quit if you currently smoke, avoid secondhand smoke, test your home for radon, avoid exposure to carcinogenic chemicals, eat a diet rich in fruits and vegetables, and consider low-dose CT screening if you're at high risk.",
      sources: [
        { name: "Lung Cancer Alliance", url: "https://lungcanceralliance.org/" },
        { name: "American Lung Association", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/lung-cancer" }
      ]
    },
    {
      id: "prostate",
      name: "Prostate Cancer",
      category: "Men's Health",
      prevalence: "1 in 8 men",
      overview: "Prostate cancer occurs in the prostate gland, which produces seminal fluid that nourishes and transports sperm. It's one of the most common types of cancer in men, typically growing slowly and remaining confined to the prostate gland initially. Some types are aggressive and can spread quickly, while others grow so slowly they may never cause serious harm.",
      symptoms: ["Difficulty urinating", "Decreased force in urine stream", "Blood in urine or semen", "Bone pain", "Erectile dysfunction"],
      riskFactors: ["Age (over 50)", "Race (higher in African American men)", "Family history", "Obesity", "Geography"],
      prevention: "Regular screening discussions with healthcare providers starting at age 50 (or 45 for high-risk men), maintaining a healthy diet rich in fruits and vegetables, staying physically active, and maintaining a healthy weight. The decision to screen should be individualized based on risk factors.",
      sources: [
        { name: "Prostate Cancer Foundation", url: "https://www.pcf.org/" },
        { name: "American Cancer Society - Prostate", url: "https://www.cancer.org/cancer/prostate-cancer.html" }
      ]
    },
    {
      id: "skin",
      name: "Skin Cancer",
      category: "Most Common",
      prevalence: "Most common cancer",
      overview: "Skin cancer is the most common form of cancer, with over 5 million cases treated annually in the United States. The three main types are basal cell carcinoma, squamous cell carcinoma, and melanoma. While basal and squamous cell carcinomas are highly treatable when caught early, melanoma can be more aggressive and life-threatening if not detected and treated promptly.",
      symptoms: ["New moles or changes in existing moles", "Asymmetrical moles", "Irregular borders", "Color variations", "Diameter larger than pencil eraser"],
      riskFactors: ["UV radiation exposure", "Fair skin", "History of sunburns", "Family history", "Multiple moles", "Weakened immune system"],
      prevention: "Use broad-spectrum sunscreen with SPF 30 or higher, seek shade during peak sun hours (10 AM - 4 PM), wear protective clothing and wide-brimmed hats, avoid tanning beds, perform monthly skin self-examinations, and have regular professional skin checks.",
      sources: [
        { name: "Skin Cancer Foundation", url: "https://www.skincancer.org/" },
        { name: "Melanoma Research Alliance", url: "https://www.curemelanoma.org/" }
      ]
    },
    {
      id: "cervical",
      name: "Cervical Cancer",
      category: "Women's Health",
      prevalence: "Highly preventable",
      overview: "Cervical cancer occurs in the cells of the cervix and is primarily caused by persistent infection with high-risk types of human papillomavirus (HPV). It's one of the most preventable cancers through regular screening with Pap tests and HPV testing. When detected early through screening, cervical cancer is highly treatable with excellent outcomes.",
      symptoms: ["Abnormal vaginal bleeding", "Bleeding between periods", "Bleeding after menopause", "Unusual vaginal discharge", "Pelvic pain"],
      riskFactors: ["HPV infection", "Multiple sexual partners", "Early sexual activity", "Smoking", "Weakened immune system", "Long-term oral contraceptive use"],
      prevention: "Regular Pap tests starting at age 21, HPV vaccination (recommended for ages 11-12, catch-up through age 26), practicing safe sex, limiting number of sexual partners, and avoiding smoking. The HPV vaccine can prevent the types of HPV that cause most cervical cancers.",
      sources: [
        { name: "National Cervical Cancer Coalition", url: "https://www.nccc-online.org/" },
        { name: "CDC Cervical Cancer", url: "https://www.cdc.gov/cancer/cervical/" }
      ]
    },
    {
      id: "ovarian",
      name: "Ovarian Cancer",
      category: "Women's Health",
      prevalence: "Silent killer",
      overview: "Ovarian cancer often goes undetected until it has spread within the pelvis and abdomen, earning it the nickname 'silent killer.' However, recent studies suggest that early symptoms may be present but are often subtle and easily attributed to other conditions. There are several types of ovarian cancer, with epithelial ovarian cancer being the most common.",
      symptoms: ["Abdominal bloating", "Pelvic pain", "Feeling full quickly when eating", "Urinary urgency or frequency", "Fatigue", "Back pain"],
      riskFactors: ["Age (over 50)", "Family history", "BRCA gene mutations", "Never being pregnant", "Hormone replacement therapy", "Endometriosis"],
      prevention: "While there's no reliable screening test, women with family history should consider genetic counseling. Birth control pills may reduce risk, as may pregnancy and breastfeeding. For high-risk women, preventive surgery may be an option after completing childbearing.",
      sources: [
        { name: "Ovarian Cancer Research Alliance", url: "https://ocrahope.org/" },
        { name: "National Ovarian Cancer Coalition", url: "https://ovarian.org/" }
      ]
    },
    {
      id: "pancreatic",
      name: "Pancreatic Cancer",
      category: "Aggressive",
      prevalence: "4% of cancers",
      overview: "Pancreatic cancer is one of the most aggressive forms of cancer, often diagnosed at advanced stages because early symptoms are vague and easily overlooked. The pancreas produces enzymes that help digestion and hormones like insulin that regulate blood sugar. Most pancreatic cancers begin in the ducts that carry digestive enzymes.",
      symptoms: ["Abdominal pain radiating to back", "Unexplained weight loss", "Jaundice (yellowing of skin/eyes)", "Loss of appetite", "New-onset diabetes", "Blood clots"],
      riskFactors: ["Smoking", "Obesity", "Diabetes", "Chronic pancreatitis", "Family history", "Age (over 60)", "Certain genetic syndromes"],
      prevention: "Maintain a healthy weight, don't smoke, limit alcohol consumption, eat a diet rich in fruits and vegetables, stay physically active, and manage diabetes effectively. For those with strong family history, genetic counseling may be beneficial.",
      sources: [
        { name: "Pancreatic Cancer Action Network", url: "https://www.pancan.org/" },
        { name: "Lustgarten Foundation", url: "https://www.lustgarten.org/" }
      ]
    },
    {
      id: "oral",
      name: "Oral Cancer",
      category: "Head & Neck",
      prevalence: "54,000 new cases yearly",
      overview: "Oral cancer includes cancers of the mouth, tongue, lips, gums, and throat. It's often linked to tobacco and alcohol use, though HPV-related oral cancers are increasing, particularly in younger adults. Early detection significantly improves treatment outcomes, making regular dental checkups important for prevention and early diagnosis.",
      symptoms: ["Persistent mouth sores", "White or red patches", "Difficulty swallowing", "Persistent hoarseness", "Numbness in mouth", "Jaw pain or stiffness"],
      riskFactors: ["Tobacco use", "Heavy alcohol consumption", "HPV infection", "Sun exposure (lip cancer)", "Poor oral hygiene", "Male gender"],
      prevention: "Avoid tobacco in all forms, limit alcohol consumption, practice good oral hygiene, use lip balm with SPF, get regular dental checkups, and consider HPV vaccination. Self-examination of the mouth and regular professional screenings are crucial.",
      sources: [
        { name: "Oral Cancer Foundation", url: "https://oralcancerfoundation.org/" },
        { name: "Head and Neck Cancer Alliance", url: "https://www.headandneck.org/" }
      ]
    },
    {
      id: "leukemia",
      name: "Leukemia",
      category: "Blood Cancer",
      prevalence: "Most common childhood cancer",
      overview: "Leukemia is cancer of the blood-forming tissues, including bone marrow and lymphatic system. There are several types, including acute lymphoblastic leukemia (ALL), acute myeloid leukemia (AML), chronic lymphocytic leukemia (CLL), and chronic myeloid leukemia (CML). It's the most common cancer in children but also affects adults, with different types more common at different ages.",
      symptoms: ["Frequent infections", "Easy bruising or bleeding", "Fatigue and weakness", "Swollen lymph nodes", "Fever", "Bone pain"],
      riskFactors: ["Previous cancer treatment", "Genetic disorders", "Radiation exposure", "Chemical exposure", "Smoking", "Family history"],
      prevention: "While most cases can't be prevented, avoid unnecessary radiation exposure, don't smoke, avoid exposure to chemicals like benzene, and maintain overall good health. For those with genetic predispositions, regular monitoring may be recommended.",
      sources: [
        { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/" },
        { name: "Children's Leukemia Research Association", url: "https://www.childrensleukemia.org/" }
      ]
    }
  ];

  const selectedCancerData = selectedCancer ? cancerTypes.find(c => c.id === selectedCancer) : null;

  if (selectedCancerData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedCancer(null)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Cancer Types
              </button>
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{selectedCancerData.name}</h1>
              <div className="flex space-x-2">
                <Badge variant="outline">{selectedCancerData.category}</Badge>
                <Badge variant="secondary">{selectedCancerData.prevalence}</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{selectedCancerData.overview}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Common Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedCancerData.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedCancerData.riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Prevention & Early Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{selectedCancerData.prevention}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Authoritative Sources</CardTitle>
                <CardDescription>Learn more from trusted medical organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedCancerData.sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-3 text-blue-600" />
                      <span className="font-medium text-blue-600">{source.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link to="/assessment">
              <Button size="lg">Take Health Assessment</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Cancer Information</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed information about 10 major cancer types, including symptoms, risk factors, and prevention strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cancerTypes.map((cancer) => (
            <Card key={cancer.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{cancer.name}</CardTitle>
                  <Badge variant="outline">{cancer.category}</Badge>
                </div>
                <CardDescription>{cancer.prevalence}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {cancer.overview.substring(0, 120)}...
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedCancer(cancer.id)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Educational Resources</h3>
          <p className="text-blue-700 text-sm mb-4">
            This information is sourced from reputable medical organizations and cancer research institutions. 
            Always consult with healthcare professionals for personalized medical advice.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/assessment">
              <Button>Take Assessment</Button>
            </Link>
            <Link to="/chat">
              <Button variant="outline">Ask AI Questions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancerInfo;
