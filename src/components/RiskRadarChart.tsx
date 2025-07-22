import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface RiskData {
  factor: string;
  risk: number;
  maxRisk: number;
}

interface RiskRadarChartProps {
  riskData: RiskData[];
  title?: string;
  description?: string;
}

const RiskRadarChart = ({ 
  riskData, 
  title = "Cancer Risk Assessment", 
  description = "Your personalized risk factors across different categories" 
}: RiskRadarChartProps) => {
  const getRiskLevel = (risk: number) => {
    if (risk < 30) return { level: "Low", color: "hsl(var(--cancer-success))" };
    if (risk < 60) return { level: "Moderate", color: "hsl(var(--cancer-warning))" };
    return { level: "High", color: "hsl(var(--destructive))" };
  };

  const averageRisk = riskData.reduce((sum, item) => sum + item.risk, 0) / riskData.length;
  const overallRisk = getRiskLevel(averageRisk);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="cancer-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: overallRisk.color }}
              ></div>
              <span className="text-sm font-medium">{overallRisk.level} Risk</span>
            </div>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={riskData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="factor" 
                  tick={{ 
                    fill: 'hsl(var(--foreground))', 
                    fontSize: 12,
                    fontFamily: 'IBM Plex Sans'
                  }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ 
                    fill: 'hsl(var(--muted-foreground))', 
                    fontSize: 10 
                  }}
                />
                <Radar
                  name="Risk Level"
                  dataKey="risk"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Legend 
                  wrapperStyle={{ 
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'IBM Plex Sans'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 space-y-3">
            <h4 className="font-semibold text-primary">Risk Factor Breakdown</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {riskData.map((item, index) => {
                const risk = getRiskLevel(item.risk);
                return (
                  <motion.div
                    key={item.factor}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: risk.color }}
                      ></div>
                      <span className="text-sm">{item.factor}</span>
                    </div>
                    <span className="text-sm font-medium">{item.risk}%</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RiskRadarChart;