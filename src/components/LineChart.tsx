
import React from 'react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid
} from 'recharts';
import { useTheme } from '@/contexts/ThemeContext';

interface LineChartProps {
  xDataset?: string[];
  yDataset?: number[];
  color: string;
  title: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
}

const LineChart: React.FC<LineChartProps> = ({ 
  xDataset = [], 
  yDataset = [], 
  color, 
  title, 
  yAxisLabel,
  xAxisLabel 
}) => {
  const { theme } = useTheme();
  
  // Prepare data by combining x and y datasets
  const chartData = xDataset.map((xValue, index) => ({
    name: xValue,
    value: yDataset[index] || 0
  }));

  return (
    <div className={`rounded-lg p-4 ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <h3 className={`text-sm font-medium mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{title}</h3>
      <div className="h-[150px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke={theme === 'light' ? "#eee" : "#333"} 
            />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 10 }} 
              tickLine={false}
              axisLine={{ stroke: theme === 'light' ? "#ddd" : "#444" }}
              stroke={theme === 'light' ? "#888" : "#666"}
            />
            <YAxis 
              tick={{ fontSize: 10 }} 
              tickLine={false}
              axisLine={{ stroke: theme === 'light' ? "#ddd" : "#444" }}
              stroke={theme === 'light' ? "#888" : "#666"}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'light' ? 'white' : '#111',
                borderColor: theme === 'light' ? '#ddd' : '#333',
                borderRadius: '4px',
                fontSize: '12px',
                color: theme === 'light' ? '#333' : '#ddd'
              }}
              formatter={(value: number) => [`${value}`, yAxisLabel || 'Value']}
              labelFormatter={(label) => xAxisLabel ? `${xAxisLabel}: ${label}` : label}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: color, stroke: theme === 'light' ? 'white' : '#111' }}
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
