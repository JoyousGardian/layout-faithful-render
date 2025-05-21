
import React from 'react';
import { LineChart as RechartsLineChart, Line, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/contexts/ThemeContext';

interface LineChartProps {
  data: { value: number }[];
  color: string;
  title: string;
  yAxisLabel?: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, color, title, yAxisLabel }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg p-4 ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <h3 className={`text-lg font-semibold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h3>
      <div className="h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
        {yAxisLabel && (
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 rotate-90 origin-left">
            <span className="text-xs text-gray-500">{yAxisLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LineChart;
