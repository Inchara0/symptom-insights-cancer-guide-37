import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Heart, TrendingUp, Users, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

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
  stats: {
    newCases: number;
    mortalityRate: number;
    survivalRate: number;
  };
}

const CancerInfo = () => {
  const [selectedCancer, setSelectedCancer] = useState<string | null>(null);

  const cancerTypes: CancerType[] = [
    {
      id: "breast",
      name: "Breast Cancer",
      category: "Common",
      prevalence: "1 in 8 women",
      overview: "Breast cancer forms in the cells of the breast tissue and is one of the most common cancers affecting women, though it can also occur in men. Early detection through regular screening significantly improves treatment outcomes.",
      symptoms: ["Breast lumps or thickening", "Changes in breast size or shape", "Skin dimpling or puckering", "Nipple discharge or inversion", "Breast or nipple pain"],
      riskFactors: ["Age (over 50)", "Family history of breast/ovarian cancer", "BRCA gene mutations", "Dense breast tissue", "Previous breast cancer", "Hormonal factors"],
      prevention: "Regular mammograms starting at age 40-50, monthly self-examinations, maintaining a healthy weight, limiting alcohol consumption, staying physically active, and considering genetic counseling for high-risk individuals.",
      sources: [
        { name: "American Cancer Society", url: "https://www.cancer.org/cancer/breast-cancer.html" },
        { name: "National Cancer Institute", url: "https://www.cancer.gov/types/breast" }
      ],
      stats: { newCases: 287000, mortalityRate: 15, survivalRate: 91 }
    },
    {
      id: "colorectal",
      name: "Colorectal Cancer",
      category: "Common",
      prevalence: "1 in 23 people",
      overview: "Colorectal cancer develops in the colon or rectum and is often preventable through regular screening. It typically starts as small, benign clumps of cells called polyps that can become cancerous over time.",
      symptoms: ["Changes in bowel habits", "Blood in stool or rectal bleeding", "Persistent abdominal pain or cramping", "Unexplained weight loss", "Fatigue and weakness"],
      riskFactors: ["Age (over 50)", "Family history", "Inflammatory bowel disease", "Diet high in red meat", "Smoking", "Obesity", "Diabetes"],
      prevention: "Regular colonoscopy screening starting at age 45-50, maintaining a diet rich in fruits and vegetables, limiting red and processed meats, staying physically active, avoiding smoking, and limiting alcohol consumption.",
      sources: [
        { name: "Colorectal Cancer Alliance", url: "https://www.ccalliance.org/" },
        { name: "CDC Colorectal Cancer", url: "https://www.cdc.gov/cancer/colorectal/" }
      ],
      stats: { newCases: 153000, mortalityRate: 28, survivalRate: 65 }
    },
    {
      id: "lung",
      name: "Lung Cancer",
      category: "Leading Cause",
      prevalence: "Leading cancer killer",
      overview: "Lung cancer is the leading cause of cancer deaths worldwide and is primarily caused by smoking, though non-smokers can also develop the disease. There are two main types: non-small cell lung cancer and small cell lung cancer.",
      symptoms: ["Persistent cough that worsens", "Coughing up blood or rust-colored sputum", "Shortness of breath", "Chest pain that worsens with breathing", "Hoarseness", "Unexplained weight loss"],
      riskFactors: ["Smoking (85-90% of cases)", "Secondhand smoke", "Radon exposure", "Asbestos exposure", "Family history", "Air pollution", "Previous radiation therapy"],
      prevention: "Never start smoking or quit if you currently smoke, avoid secondhand smoke, test your home for radon, avoid exposure to carcinogenic chemicals, eat a diet rich in fruits and vegetables, and consider low-dose CT screening if you're at high risk.",
      sources: [
        { name: "Lung Cancer Alliance", url: "https://lungcanceralliance.org/" },
        { name: "American Lung Association", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/lung-cancer" }
      ],
      stats: { newCases: 238000, mortalityRate: 75, survivalRate: 25 }
    },
    {
      id: "prostate",
      name: "Prostate Cancer",
      category: "Men's Health",
      prevalence: "1 in 8 men",
      overview: "Prostate cancer occurs in the prostate gland, which produces seminal fluid. It's one of the most common types of cancer in men, typically growing slowly and remaining confined to the prostate gland initially.",
      symptoms: ["Difficulty urinating or weak urine stream", "Frequent urination, especially at night", "Blood in urine or semen", "Painful urination", "Bone pain", "Erectile dysfunction"],
      riskFactors: ["Age (over 50)", "Race (higher in African American men)", "Family history", "Obesity", "Geography (more common in North America)"],
      prevention: "Regular screening discussions with healthcare providers starting at age 50 (or 45 for high-risk men), maintaining a healthy diet rich in fruits and vegetables, staying physically active, and maintaining a healthy weight.",
      sources: [
        { name: "Prostate Cancer Foundation", url: "https://www.pcf.org/" },
        { name: "American Cancer Society - Prostate", url: "https://www.cancer.org/cancer/prostate-cancer.html" }
      ],
      stats: { newCases: 268000, mortalityRate: 11, survivalRate: 99 }
    },
    {
      id: "skin",
      name: "Skin Cancer",
      category: "Most Common",
      prevalence: "Most common cancer",
      overview: "Skin cancer is the most common form of cancer, with over 5 million cases treated annually in the United States. The three main types are basal cell carcinoma, squamous cell carcinoma, and melanoma.",
      symptoms: ["New moles or changes in existing moles", "Asymmetrical moles", "Irregular or jagged borders", "Color variations within moles", "Diameter larger than pencil eraser", "Evolving size, shape, or color"],
      riskFactors: ["UV radiation exposure", "Fair skin, light eyes, or red/blonde hair", "History of sunburns", "Family history", "Multiple moles", "Weakened immune system", "Tanning bed use"],
      prevention: "Use broad-spectrum sunscreen with SPF 30 or higher, seek shade during peak sun hours (10 AM - 4 PM), wear protective clothing and wide-brimmed hats, avoid tanning beds, perform monthly skin self-examinations, and have regular professional skin checks.",
      sources: [
        { name: "Skin Cancer Foundation", url: "https://www.skincancer.org/" },
        { name: "Melanoma Research Alliance", url: "https://www.curemelanoma.org/" }
      ],
      stats: { newCases: 5400000, mortalityRate: 2, survivalRate: 98 }
    }
  ];

  // Statistics for charts
  const cancerStatsData = cancerTypes.map(cancer => ({
    name: cancer.name.split(' ')[0],
    cases: cancer.stats.newCases,
    survival: cancer.stats.survivalRate
  })).slice(0, 5);

  const mortalityData = cancerTypes.map(cancer => ({
    name: cancer.name.split(' ')[0],
    rate: cancer.stats.mortalityRate
  })).slice(0, 5);

  const pieData = cancerTypes.slice(0, 4).map((cancer, index) => ({
    name: cancer.name,
    value: cancer.stats.newCases,
    color: ['hsl(var(--cancer-primary))', 'hsl(var(--cancer-secondary))', 'hsl(var(--cancer-accent))', 'hsl(var(--cancer-success))'][index]
  }));

  const selectedCancerData = selectedCancer ? cancerTypes.find(c => c.id === selectedCancer) : null;

  if (selectedCancerData) {
    return (
      <div className="min-h-screen hero-gradient">
        <Navigation />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <button 
              onClick={() => setSelectedCancer(null)}
              className="flex items-center text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Cancer Types
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h1 className="text-4xl font-heading font-bold mb-4 md:mb-0">
                <span className="text-gradient">{selectedCancerData.name}</span>
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary/30">{selectedCancerData.category}</Badge>
                <Badge variant="secondary" className="cancer-gradient text-white">{selectedCancerData.prevalence}</Badge>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Card className="cancer-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed text-lg">{selectedCancerData.overview}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Card className="cancer-card h-full">
                    <CardHeader>
                      <CardTitle className="text-primary">Common Symptoms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {selectedCancerData.symptoms.map((symptom, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-foreground">{symptom}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Card className="cancer-card h-full">
                    <CardHeader>
                      <CardTitle className="text-destructive">Risk Factors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {selectedCancerData.riskFactors.map((factor, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-foreground">{factor}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Card className="cancer-card">
                  <CardHeader>
                    <CardTitle className="text-green-400">Prevention & Early Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed text-lg">{selectedCancerData.prevention}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Statistics */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <Card className="cancer-card">
                  <CardHeader>
                    <CardTitle className="text-primary">Key Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-primary">{selectedCancerData.stats.newCases.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">New cases annually</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-green-400">{selectedCancerData.stats.survivalRate}%</div>
                      <div className="text-sm text-muted-foreground">5-year survival rate</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-destructive">{selectedCancerData.stats.mortalityRate}%</div>
                      <div className="text-sm text-muted-foreground">Mortality rate</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sources */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Card className="cancer-card">
                  <CardHeader>
                    <CardTitle>Trusted Sources</CardTitle>
                    <CardDescription>Learn more from medical organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedCancerData.sources.map((source, index) => (
                        <a
                          key={index}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 mr-3 text-primary" />
                          <span className="font-medium text-primary">{source.name}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <Card className="cancer-card border-primary/30">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold mb-3">Take Action</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Assess your risk factors for this cancer type
                    </p>
                    <Link to="/assessment">
                      <Button className="cancer-gradient text-white w-full">
                        Start Risk Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Cancer Information</span> Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive information about major cancer types, including symptoms, risk factors, 
            prevention strategies, and current statistics.
          </p>
        </motion.div>

        {/* Statistics Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="cancer-card">
              <CardHeader>
                <CardTitle>Annual New Cases by Cancer Type</CardTitle>
                <CardDescription>Estimated new cancer cases in the United States</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cancerStatsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                      <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }}
                      />
                      <Bar dataKey="cases" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Card className="cancer-card">
              <CardHeader>
                <CardTitle>Cancer Distribution Overview</CardTitle>
                <CardDescription>Relative distribution of major cancer types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Cancer Types Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Explore <span className="text-gradient">Cancer Types</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cancerTypes.map((cancer, index) => (
              <motion.div
                key={cancer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card 
                  className="cancer-card interactive-hover cursor-pointer h-full"
                  onClick={() => setSelectedCancer(cancer.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{cancer.name}</CardTitle>
                      <Badge variant="outline" className="border-primary/30">{cancer.category}</Badge>
                    </div>
                    <CardDescription className="text-primary font-medium">
                      {cancer.prevalence}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {cancer.overview.slice(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-green-400 font-medium">{cancer.stats.survivalRate}%</span>
                        <span className="text-muted-foreground"> survival rate</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card className="cancer-card max-w-4xl mx-auto glow-effect">
            <CardHeader>
              <CardTitle className="text-3xl font-heading">
                Early Detection Saves Lives
              </CardTitle>
              <CardDescription className="text-lg">
                Knowledge is power. Take our comprehensive risk assessment to understand your personal cancer risk factors.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button size="lg" className="cancer-gradient text-white px-8">
                    Take Risk Assessment
                  </Button>
                </Link>
                <Link to="/prevention">
                  <Button variant="outline" size="lg" className="px-8 border-primary/30">
                    Learn Prevention
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CancerInfo;