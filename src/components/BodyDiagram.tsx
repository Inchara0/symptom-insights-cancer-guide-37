import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CancerArea {
  id: string;
  name: string;
  description: string;
  prevalence: string;
  symptoms: string[];
  affectedArea: string;
}

const BodyDiagram = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const cancerAreas: CancerArea[] = [
    {
      id: "brain",
      name: "Brain Cancer",
      description: "Tumors that develop in brain tissue",
      prevalence: "25,000 cases annually",
      symptoms: ["Headaches", "Seizures", "Memory problems", "Vision changes"],
      affectedArea: "brain"
    },
    {
      id: "oral",
      name: "Oral Cancer",
      description: "Cancer of the mouth, tongue, and throat",
      prevalence: "54,000 cases annually",
      symptoms: ["Mouth sores", "White patches", "Difficulty swallowing"],
      affectedArea: "head"
    },
    {
      id: "lung",
      name: "Lung Cancer",
      description: "Leading cause of cancer death",
      prevalence: "235,000 cases annually",
      symptoms: ["Persistent cough", "Shortness of breath", "Chest pain"],
      affectedArea: "lungs"
    },
    {
      id: "breast",
      name: "Breast Cancer",
      description: "Most common cancer in women",
      prevalence: "280,000 cases annually",
      symptoms: ["Breast lumps", "Shape changes", "Nipple discharge"],
      affectedArea: "breast"
    },
    {
      id: "pancreatic",
      name: "Pancreatic Cancer",
      description: "Aggressive cancer of the pancreas",
      prevalence: "62,000 cases annually",
      symptoms: ["Abdominal pain", "Jaundice", "Weight loss"],
      affectedArea: "abdomen"
    },
    {
      id: "colorectal",
      name: "Colorectal Cancer",
      description: "Cancer of the colon and rectum",
      prevalence: "150,000 cases annually",
      symptoms: ["Blood in stool", "Bowel habit changes", "Abdominal pain"],
      affectedArea: "abdomen"
    },
    {
      id: "prostate",
      name: "Prostate Cancer",
      description: "Most common cancer in men",
      prevalence: "268,000 cases annually",
      symptoms: ["Urination difficulty", "Blood in urine", "Pelvic pain"],
      affectedArea: "pelvis"
    },
    {
      id: "cervical",
      name: "Cervical Cancer",
      description: "HPV-related cancer of the cervix",
      prevalence: "14,000 cases annually",
      symptoms: ["Abnormal bleeding", "Pelvic pain", "Unusual discharge"],
      affectedArea: "pelvis"
    },
    {
      id: "ovarian",
      name: "Ovarian Cancer",
      description: "Silent killer affecting ovaries",
      prevalence: "22,000 cases annually",
      symptoms: ["Bloating", "Pelvic pain", "Feeling full quickly"],
      affectedArea: "pelvis"
    },
    {
      id: "skin",
      name: "Skin Cancer",
      description: "Most common form of cancer",
      prevalence: "5+ million cases annually",
      symptoms: ["New moles", "Changing spots", "Irregular borders"],
      affectedArea: "skin"
    }
  ];

  const selectedCancer = selectedArea ? cancerAreas.find(area => area.id === selectedArea) : null;

  return (
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
      {/* Body Diagram */}
      <div className="relative">
        <Card className="cancer-card p-6">
          <CardHeader>
            <CardTitle className="text-xl">Interactive Body Diagram</CardTitle>
            <CardDescription>Click on different body areas to learn about cancer types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full max-w-md mx-auto">
              <svg
                viewBox="0 0 200 400"
                className="w-full h-auto"
                style={{ maxHeight: "500px" }}
              >
                {/* Body outline */}
                <path
                  d="M100 20 
                     C110 20 120 30 120 40
                     L120 60
                     C130 65 140 70 145 80
                     L145 120
                     C145 130 140 140 130 145
                     L130 180
                     C135 185 135 195 130 200
                     L130 280
                     C135 285 135 295 130 300
                     L130 360
                     C130 370 125 375 115 375
                     L85 375
                     C75 375 70 370 70 360
                     L70 300
                     C65 295 65 285 70 280
                     L70 200
                     C65 195 65 185 70 180
                     L70 145
                     C60 140 55 130 55 120
                     L55 80
                     C60 70 70 65 80 60
                     L80 40
                     C80 30 90 20 100 20 Z"
                  fill="hsl(var(--muted))"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                />

                {/* Brain */}
                <motion.circle
                  cx="100"
                  cy="35"
                  r="12"
                  fill={selectedArea === 'brain' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-info))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'brain' ? null : 'brain')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Lungs */}
                <motion.ellipse
                  cx="85"
                  cy="100"
                  rx="12"
                  ry="15"
                  fill={selectedArea === 'lung' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-warning))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'lung' ? null : 'lung')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
                <motion.ellipse
                  cx="115"
                  cy="100"
                  rx="12"
                  ry="15"
                  fill={selectedArea === 'lung' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-warning))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'lung' ? null : 'lung')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Breast */}
                <motion.circle
                  cx="85"
                  cy="85"
                  r="8"
                  fill={selectedArea === 'breast' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-primary))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'breast' ? null : 'breast')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
                <motion.circle
                  cx="115"
                  cy="85"
                  r="8"
                  fill={selectedArea === 'breast' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-primary))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'breast' ? null : 'breast')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Pancreas/Stomach */}
                <motion.ellipse
                  cx="100"
                  cy="140"
                  rx="15"
                  ry="8"
                  fill={selectedArea === 'pancreatic' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-accent))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'pancreatic' ? null : 'pancreatic')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Colorectal */}
                <motion.ellipse
                  cx="100"
                  cy="180"
                  rx="12"
                  ry="20"
                  fill={selectedArea === 'colorectal' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-success))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'colorectal' ? null : 'colorectal')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Reproductive organs */}
                <motion.ellipse
                  cx="100"
                  cy="220"
                  rx="10"
                  ry="6"
                  fill={selectedArea === 'prostate' || selectedArea === 'cervical' || selectedArea === 'ovarian' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-secondary))'}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'prostate' || selectedArea === 'cervical' || selectedArea === 'ovarian' ? null : 'prostate')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Skin (outline) */}
                <motion.rect
                  x="60"
                  y="25"
                  width="80"
                  height="340"
                  rx="15"
                  fill="none"
                  stroke={selectedArea === 'skin' ? 'hsl(var(--primary))' : 'hsl(var(--cancer-warning))'}
                  strokeWidth={selectedArea === 'skin' ? "4" : "2"}
                  strokeDasharray="5,5"
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === 'skin' ? null : 'skin')}
                  whileHover={{ scale: 1.02 }}
                />

                {/* Labels */}
                <text x="100" y="15" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" className="font-body">
                  Click areas to explore
                </text>
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cancer Information Panel */}
      <div>
        {selectedCancer ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="cancer-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-gradient">{selectedCancer.name}</CardTitle>
                  <Badge variant="secondary">{selectedCancer.prevalence}</Badge>
                </div>
                <CardDescription className="text-base">{selectedCancer.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Common Symptoms</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedCancer.symptoms.map((symptom, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-2 rounded-lg bg-muted/50"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{symptom}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Click on different body areas to explore other cancer types. Each area shows specific cancer risks and symptoms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <Card className="cancer-card">
            <CardHeader>
              <CardTitle>Explore Cancer Types</CardTitle>
              <CardDescription>Click on different areas of the body diagram to learn about specific cancer types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {cancerAreas.slice(0, 6).map((cancer) => (
                  <motion.button
                    key={cancer.id}
                    onClick={() => setSelectedArea(cancer.id)}
                    className="p-3 rounded-lg bg-muted/30 hover:bg-muted/60 text-left transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-medium text-sm">{cancer.name}</div>
                    <div className="text-xs text-muted-foreground">{cancer.prevalence}</div>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BodyDiagram;