import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  BookOpen, 
  Users, 
  Shield, 
  Activity,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import BodyDiagram from "@/components/BodyDiagram";

const Index = () => {
  const stats = [
    { number: "10+", label: "Cancer Types Covered", icon: BookOpen, color: "text-blue-400" },
    { number: "24/7", label: "AI Assistant Available", icon: MessageCircle, color: "text-green-400" },
    { number: "100%", label: "Free to Use", icon: CheckCircle, color: "text-purple-400" },
    { number: "Expert", label: "Medical Information", icon: Shield, color: "text-pink-400" },
  ];

  const features = [
    {
      title: "Interactive Risk Assessment",
      description: "Advanced questionnaire system that evaluates your symptoms across 10+ cancer types with personalized risk insights.",
      icon: Activity,
      color: "cancer-primary",
      path: "/assessment"
    },
    {
      title: "Comprehensive Cancer Database",
      description: "Detailed information about symptoms, risk factors, and prevention strategies for major cancer types.",
      icon: BookOpen,
      color: "cancer-info",
      path: "/cancer-info"
    },
    {
      title: "Women's Health Focus",
      description: "Specialized section covering breast, cervical, and ovarian cancer with gender-specific guidance.",
      icon: Users,
      color: "cancer-secondary",
      path: "/womens-health"
    },
    {
      title: "Prevention & Early Detection",
      description: "Evidence-based strategies for cancer prevention and screening recommendations by age and risk factors.",
      icon: Shield,
      color: "cancer-success",
      path: "/prevention"
    }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
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
              and early detection tools. Take control of your health with evidence-based resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="cancer-gradient text-white px-8 py-3 text-lg">
                  Start Risk Assessment
                  <Activity className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cancer-info">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary/30 hover:bg-primary/5">
                  Explore Cancer Types
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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

      {/* Interactive Body Diagram */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Interactive <span className="text-gradient">Cancer Map</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different cancer types by clicking on body areas. Learn about symptoms, 
              risk factors, and prevention strategies for each cancer type.
            </p>
          </motion.div>
          
          <BodyDiagram />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Comprehensive <span className="text-gradient">Health Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based tools and resources designed to support your cancer awareness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Link to={feature.path} className="block h-full">
                    <Card className="cancer-card h-full interactive-hover">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="cancer-gradient p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Card className="cancer-card p-8 glow-effect">
              <CardHeader>
                <CardTitle className="text-3xl font-heading">
                  Take Charge of Your Health Today
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Early detection saves lives. Start with our comprehensive risk assessment 
                  and get personalized insights based on your health profile.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/assessment">
                    <Button size="lg" className="cancer-gradient text-white px-8">
                      Start Assessment Now
                    </Button>
                  </Link>
                  <Link to="/chat">
                    <Button variant="outline" size="lg" className="px-8 border-primary/30">
                      Chat with AI Assistant
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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