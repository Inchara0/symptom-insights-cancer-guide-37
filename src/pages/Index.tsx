import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RiskRadarChart from "@/components/RiskRadarChart";
import BodyDiagram from "@/components/BodyDiagram";
import AssessmentTool from "@/components/AssessmentTool";
import AIAssistant from "@/components/AIAssistant";
import { ArrowRight, Activity, Users, TrendingUp, Heart, Shield, Brain, MessageCircle, Send, CheckCircle, AlertTriangle, Info, BookOpen, Menu, X } from "lucide-react";

const Index = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { number: "10", label: "Cancer Types Covered", icon: BookOpen, color: "text-blue-400" },
    { number: "24/7", label: "AI Assistant Available", icon: MessageCircle, color: "text-green-400" },
    { number: "100%", label: "Free to Use", icon: CheckCircle, color: "text-purple-400" },
    { number: "11", label: "Assessment Tests", icon: Activity, color: "text-pink-400" },
  ];

  const riskData = [
    { factor: "Breast", risk: 75, maxRisk: 100 },
    { factor: "Lung", risk: 45, maxRisk: 100 },
    { factor: "Cervical", risk: 30, maxRisk: 100 },
    { factor: "Colorectal", risk: 55, maxRisk: 100 },
    { factor: "Skin", risk: 65, maxRisk: 100 },
    { factor: "Oral", risk: 25, maxRisk: 100 },
    { factor: "Prostate", risk: 40, maxRisk: 100 },
    { factor: "Brain", risk: 15, maxRisk: 100 },
    { factor: "Pancreatic", risk: 35, maxRisk: 100 },
    { factor: "Leukemia", risk: 20, maxRisk: 100 }
  ];

  const navigationItems = [
    { name: "Cancer Information", href: "#cancer-info" },
    { name: "Risk Assessments", href: "#assessment" },
    { name: "Women's Health", href: "#womens-health" },
    { name: "Prevention", href: "#prevention" },
    { name: "AI Assistant", href: "#ai-assistant" }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      {/* Top Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/src/assets/cancercare-logo.svg" alt="CancerCare Logo" className="h-8 w-8" />
              <h1 className="text-xl font-heading font-bold text-gradient">CancerCare</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-border">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Cancer Awareness</span>
              <br />
              <span className="text-foreground">& Early Detection</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering individuals with comprehensive cancer risk assessments, expert information, 
              and early detection tools. Take<br />
              <span className="text-gradient font-bold text-2xl">control</span> of your health with evidence-based resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="cancer-gradient text-white px-8 py-3 text-lg" onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Risk Assessment
                <Activity className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary/30 hover:bg-primary/5" onClick={() => document.getElementById('cancer-info')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Cancer Types
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 cancer-gradient rounded-full mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section id="assessment" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">Risk Assessment Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take comprehensive tests for each cancer type (5-10 questions) or our general assessment (30 questions)
            </p>
          </motion.div>
          
          <AssessmentTool />
        </div>
      </section>

      {/* Interactive Body Diagram */}
      <section id="cancer-info" className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Interactive <span className="text-gradient">Cancer Information</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore all 10 major cancer types: breast, oral, lung, brain, prostate, cervical, pancreatic, colorectal, leukemia, and skin. 
              Click on body areas to learn about symptoms, risk factors, and prevention strategies.
            </p>
          </motion.div>
          
          <BodyDiagram />
        </div>
      </section>

      {/* Women's Health Section */}
      <section id="womens-health" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">Women's Health Focus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized information for women's cancer awareness, prevention, and early detection
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="cancer-card">
              <CardHeader>
                <CardTitle className="text-2xl text-cancer-primary">Breast Cancer</CardTitle>
                <CardDescription>Most common cancer in women - 1 in 8 women will develop breast cancer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Risk Factors</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Age (risk increases after 50)</li>
                    <li>• Family history of breast/ovarian cancer</li>
                    <li>• BRCA1/BRCA2 gene mutations</li>
                    <li>• Dense breast tissue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prevention</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Monthly self-exams</li>
                    <li>• Annual mammograms after 40</li>
                    <li>• Maintain healthy weight</li>
                    <li>• Limit alcohol consumption</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="cancer-card">
              <CardHeader>
                <CardTitle className="text-2xl text-cancer-secondary">Cervical Cancer</CardTitle>
                <CardDescription>Highly preventable with regular screening - HPV-related cancer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Risk Factors</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• HPV infection (main cause)</li>
                    <li>• Multiple sexual partners</li>
                    <li>• Smoking</li>
                    <li>• Weakened immune system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prevention</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• HPV vaccination</li>
                    <li>• Regular Pap smears</li>
                    <li>• Safe sexual practices</li>
                    <li>• Don't smoke</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="cancer-card">
              <CardHeader>
                <CardTitle className="text-2xl text-cancer-accent">Ovarian Cancer</CardTitle>
                <CardDescription>"Silent killer" - often diagnosed in later stages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Risk Factors</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Age (most common after menopause)</li>
                    <li>• Family history</li>
                    <li>• BRCA mutations</li>
                    <li>• Never being pregnant</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Early Signs</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Bloating that doesn't go away</li>
                    <li>• Pelvic or abdominal pain</li>
                    <li>• Feeling full quickly</li>
                    <li>• Urinary urgency</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">Prevention & Early Detection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based strategies to reduce cancer risk and catch cancer early when treatment is most effective
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="cancer-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-cancer-success" />
                  Primary Prevention
                </CardTitle>
                <CardDescription>Lifestyle changes that reduce cancer risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-lg bg-cancer-success/10 border border-cancer-success/20">
                    <h4 className="font-semibold mb-2 text-cancer-success flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Vaccination
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>HPV Vaccine:</strong> Prevents cervical, anal, and other cancers</li>
                      <li>• <strong>Hepatitis B:</strong> Prevents liver cancer</li>
                      <li>• Most effective when given at ages 11-12</li>
                    </ul>
                    <a href="https://www.who.int/news-room/fact-sheets/detail/cancer" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 block">
                      WHO Cancer Facts →
                    </a>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-cancer-info/10 border border-cancer-info/20">
                    <h4 className="font-semibold mb-2 text-cancer-info">Healthy Diet</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Fruits and vegetables (5+ servings daily)</li>
                      <li>• Whole grains instead of refined grains</li>
                      <li>• Lean proteins (fish, poultry, beans)</li>
                      <li>• Limit processed meats and high-fat foods</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-cancer-warning/10 border border-cancer-warning/20">
                    <h4 className="font-semibold mb-2 text-cancer-warning">Avoid Risk Factors</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>Tobacco:</strong> Quit smoking and avoid secondhand smoke</li>
                      <li>• <strong>Sun Exposure:</strong> Use SPF 30+ sunscreen daily</li>
                      <li>• <strong>Alcohol:</strong> Limit to 1-2 drinks per day maximum</li>
                    </ul>
                    <a href="https://my.clevelandclinic.org/health/diseases/12194-cancer" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 block">
                      Cleveland Clinic Cancer Guide →
                    </a>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <h4 className="font-semibold mb-2 text-destructive">Environmental & Occupational Hazards</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <h5 className="font-medium mb-1">At Home</h5>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Test for radon levels</li>
                          <li>• Limit household chemicals</li>
                          <li>• Maintain good ventilation</li>
                          <li>• Filter drinking water if needed</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">At Work</h5>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Follow safety protocols with chemicals</li>
                          <li>• Use protective equipment</li>
                          <li>• Get regular occupational health checkups</li>
                          <li>• Report unsafe conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cancer-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Activity className="h-6 w-6 text-cancer-info" />
                  Early Detection
                </CardTitle>
                <CardDescription>Screening tests that can catch cancer early</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">Mammography</h4>
                    <p className="text-sm text-muted-foreground">Annual screening for breast cancer starting at age 40-50</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">Pap Smear</h4>
                    <p className="text-sm text-muted-foreground">Cervical cancer screening every 3 years starting at age 21</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">Colonoscopy</h4>
                    <p className="text-sm text-muted-foreground">Colorectal cancer screening starting at age 45-50</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">Low-Dose CT</h4>
                    <p className="text-sm text-muted-foreground">Lung cancer screening for high-risk smokers</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">PSA Test</h4>
                    <p className="text-sm text-muted-foreground">Prostate cancer screening discussion with doctor after age 50</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai-assistant" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">AI Health Assistant</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant answers about cancer symptoms, treatments, prevention, screening, and healthy habits
            </p>
          </motion.div>

          <AIAssistant />
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Important Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This platform provides general health information and is not intended to replace professional medical advice, 
                diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns. 
                In case of emergency, contact your local emergency services immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;