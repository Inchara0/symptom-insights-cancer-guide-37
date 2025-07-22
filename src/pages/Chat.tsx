
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Bot, User, AlertTriangle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI health assistant. I can help answer questions about cancer symptoms, prevention, and general health information. How can I assist you today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const { toast } = useToast();

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key to use the chat feature.",
        variant: "destructive"
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4.1-2025-04-14',
          messages: [
            {
              role: 'system',
              content: `You are a helpful AI health assistant specializing in cancer awareness and general health information. 
              
              IMPORTANT GUIDELINES:
              - Always emphasize that you provide general information only, not medical diagnosis
              - Encourage users to consult healthcare professionals for medical concerns
              - Be supportive and empathetic
              - Provide evidence-based information
              - Include relevant prevention tips when appropriate
              - If asked about specific symptoms, suggest professional medical evaluation
              - Always include disclaimers about not replacing professional medical advice
              
              Focus on:
              - Cancer awareness and prevention
              - General symptom information (not diagnosis)
              - Healthy lifestyle recommendations
              - When to seek medical attention
              - Support and resources`
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please check your API key and try again.",
        variant: "destructive"
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm currently unable to respond. Please ensure your API key is correct and try again. For immediate health concerns, please contact your healthcare provider.",
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <Badge variant="outline" className="text-green-600 border-green-200">
              <Bot className="h-3 w-3 mr-1" />
              AI Assistant Active
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Health Assistant</h1>
          <p className="text-gray-600">Ask questions about cancer awareness, symptoms, and general health information</p>
        </div>

        {showApiKeyInput && (
          <Card className="mb-6 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <AlertTriangle className="h-5 w-5 mr-2" />
                OpenAI API Key Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-yellow-700 text-sm">
                  To use the AI chat feature, you'll need an OpenAI API key. This allows the assistant to provide personalized health information and answer your cancer-related questions.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <h4 className="font-semibold text-yellow-800 mb-2">How to get your OpenAI API Key:</h4>
                  <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                    <li>Visit <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center">OpenAI Platform <ExternalLink className="h-3 w-3 ml-1" /></a></li>
                    <li>Sign up or log in to your account</li>
                    <li>Navigate to API Keys in your dashboard</li>
                    <li>Click "Create new secret key"</li>
                    <li>Copy the key and paste it below</li>
                  </ol>
                  <p className="text-xs text-yellow-600 mt-2">
                    Note: You may need to add billing information to your OpenAI account to use the API.
                  </p>
                </div>

                <div className="flex space-x-2">
                  <Input
                    type="password"
                    placeholder="sk-..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => {
                      if (apiKey.trim()) {
                        setShowApiKeyInput(false);
                        toast({
                          title: "API Key Saved",
                          description: "You can now start chatting with the AI assistant."
                        });
                      }
                    }}
                  >
                    Save Key
                  </Button>
                </div>
                
                <p className="text-xs text-yellow-600">
                  Your API key is stored locally in your browser and is only used for this chat session. It's never shared or stored on our servers.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center">
              <Bot className="h-5 w-5 mr-2 text-blue-600" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-600' 
                        : 'bg-gray-200'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Thinking...</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask about cancer symptoms, prevention, or general health questions..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading || showApiKeyInput}
                className="flex-1"
              />
              <Button 
                onClick={sendMessage} 
                disabled={isLoading || !inputMessage.trim() || showApiKeyInput}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
            <div>
              <h3 className="font-semibold text-red-800 mb-1">Medical Disclaimer</h3>
              <p className="text-red-700 text-sm">
                This AI assistant provides general health information only and should not replace professional medical advice, 
                diagnosis, or treatment. For health concerns or symptoms, please consult with qualified healthcare providers. 
                In emergencies, contact 112 (Global) or 911 (US) immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/assessment">
            <Button variant="outline">Take Health Assessment</Button>
          </Link>
          <Link to="/cancer-info">
            <Button variant="outline">Browse Cancer Information</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chat;
