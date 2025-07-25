import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, AlertTriangle, Loader2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI health assistant. I can help you with questions about cancer symptoms, prevention strategies, treatment options, screening guidelines, and healthy lifestyle habits. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cancerTopics = [
    "What are the early symptoms of breast cancer?",
    "How can I reduce my risk of lung cancer?", 
    "What screening tests are recommended for colorectal cancer?",
    "What lifestyle changes help prevent cancer?",
    "How effective is the HPV vaccine?",
    "What are the warning signs of skin cancer?"
  ];

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Symptoms responses
    if (message.includes('symptom') || message.includes('sign') || message.includes('warning')) {
      if (message.includes('breast')) {
        return "Common breast cancer symptoms include: a lump or thickening in the breast or underarm, changes in breast size or shape, dimpling of the skin, nipple discharge (especially bloody), changes in nipple appearance, or skin changes like redness or scaling. Remember, many breast changes are not cancer, but it's important to have any changes evaluated by a healthcare professional.";
      }
      if (message.includes('lung')) {
        return "Lung cancer symptoms may include: persistent cough that doesn't go away, cough that produces blood, shortness of breath, chest pain, hoarseness, unexplained weight loss, bone pain, or recurrent respiratory infections. Many of these symptoms can have other causes, so see a doctor if symptoms persist.";
      }
      if (message.includes('skin')) {
        return "Watch for the ABCDEs of melanoma: Asymmetry (one half doesn't match the other), Border irregularity, Color variation within the same mole, Diameter larger than 6mm, and Evolving (changing) moles. Also watch for new growths, sores that don't heal, or changes in existing moles.";
      }
      if (message.includes('colorectal') || message.includes('colon')) {
        return "Colorectal cancer symptoms include: changes in bowel habits lasting more than a few days, blood in stool, persistent abdominal discomfort, weakness or fatigue, and unexplained weight loss. Many of these symptoms can be caused by other conditions, but persistent symptoms warrant medical evaluation.";
      }
      return "Cancer symptoms vary by type and location. Common warning signs include unexplained weight loss, persistent fatigue, changes in bowel or bladder habits, unusual bleeding, lumps or thickening, persistent cough, and changes in skin moles. Early detection saves lives - consult a healthcare provider if you notice persistent changes.";
    }

    // Prevention responses
    if (message.includes('prevent') || message.includes('reduce risk') || message.includes('healthy')) {
      if (message.includes('diet') || message.includes('food')) {
        return "A cancer-preventive diet includes: 5+ servings of fruits and vegetables daily, whole grains instead of refined grains, lean proteins (fish, poultry, legumes), limited red and processed meats, minimal alcohol consumption, and plenty of water. Foods rich in antioxidants, fiber, and phytochemicals are particularly beneficial.";
      }
      return "Key cancer prevention strategies: 1) Don't smoke or use tobacco, 2) Maintain a healthy weight, 3) Exercise regularly (150+ minutes weekly), 4) Eat a healthy diet rich in fruits and vegetables, 5) Limit alcohol, 6) Protect yourself from sun exposure, 7) Get vaccinated (HPV, Hepatitis B), 8) Follow screening guidelines, and 9) Avoid environmental toxins.";
    }

    // Treatment responses
    if (message.includes('treatment') || message.includes('therapy') || message.includes('cure')) {
      return "Cancer treatments vary by type and stage but may include: surgery (removing tumors), chemotherapy (drugs that kill cancer cells), radiation therapy (high-energy beams), immunotherapy (boosting immune system), targeted therapy (drugs targeting specific cancer features), and hormone therapy. Treatment plans are personalized based on the specific cancer, stage, and patient factors. Always work with an oncology team for proper treatment.";
    }

    // Screening responses
    if (message.includes('screening') || message.includes('test') || message.includes('mammogram') || message.includes('colonoscopy')) {
      return "Important cancer screenings include: Mammograms for breast cancer (annually starting at 40-50), Pap smears for cervical cancer (every 3 years from age 21), Colonoscopy for colorectal cancer (every 10 years starting at 45-50), Low-dose CT for lung cancer (high-risk individuals), and regular skin checks. Screening frequency may vary based on risk factors - consult your healthcare provider.";
    }

    // Vaccination responses
    if (message.includes('vaccine') || message.includes('hpv') || message.includes('hepatitis')) {
      return "Cancer-preventing vaccines include: HPV vaccine (prevents cervical, anal, and other cancers - recommended for ages 9-26, most effective before sexual activity begins), and Hepatitis B vaccine (prevents liver cancer). These vaccines are highly effective when given at recommended ages and can significantly reduce cancer risk.";
    }

    // General health responses
    if (message.includes('exercise') || message.includes('physical activity')) {
      return "Regular physical activity reduces cancer risk by 20-30%. Aim for at least 150 minutes of moderate-intensity exercise weekly, plus strength training twice weekly. Exercise helps maintain healthy weight, boosts immune function, improves hormone levels, and reduces inflammation. Even light activity like walking provides benefits.";
    }

    // Risk factors
    if (message.includes('risk') || message.includes('cause')) {
      return "Major cancer risk factors include: tobacco use (leading cause), excessive alcohol consumption, unhealthy diet, lack of physical activity, obesity, certain infections (HPV, Hepatitis B/C), radiation exposure, family history/genetics, age, and environmental toxins. While some factors like genetics can't be changed, many lifestyle factors can be modified to reduce risk.";
    }

    // Default comprehensive response
    return "I can provide information about cancer symptoms, prevention strategies, screening guidelines, treatment options, risk factors, and healthy lifestyle habits. For specific questions about: symptoms (breast, lung, skin, colorectal cancers), prevention methods (diet, exercise, vaccines), screening tests (mammograms, Pap smears, colonoscopies), or general health tips, please ask! Remember, this information is educational - always consult healthcare professionals for personalized medical advice.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTopicClick = (topic: string) => {
    setInputMessage(topic);
  };

  return (
    <Card className="cancer-card max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-cancer-info" />
          AI Health Assistant
          <Badge variant="secondary" className="ml-2">
            Online
          </Badge>
        </CardTitle>
        <CardDescription>
          Ask about cancer symptoms, prevention, treatments, screening, and healthy habits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Suggested Topics */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-muted-foreground">Popular Questions:</h4>
            <div className="flex flex-wrap gap-2">
              {cancerTopics.map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleTopicClick(topic)}
                  className="text-xs h-8"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="min-h-[400px] max-h-[500px] overflow-y-auto space-y-4 p-4 rounded-lg bg-muted/10 border border-border">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-cancer-primary text-white' 
                      : 'bg-cancer-info text-white'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-cancer-primary text-white'
                      : 'bg-card border border-border'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 justify-start"
              >
                <div className="w-8 h-8 rounded-full bg-cancer-info text-white flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <Textarea
                placeholder="Ask me about cancer symptoms, prevention, treatments, or healthy habits..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 min-h-[60px]"
                disabled={isLoading}
              />
              <Button 
                size="lg" 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="cancer-gradient text-white px-6"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4" />
              <span>This AI assistant provides educational information only. Always consult healthcare professionals for medical advice.</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;