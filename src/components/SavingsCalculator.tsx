
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SavingsCalculator = () => {
  const [location, setLocation] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [results, setResults] = useState<{ monthly: number; annual: number; twentyYear: number } | null>(null);

  const handleCalculate = () => {
    // Simple calculation logic - would be more complex in a real application
    const monthlyBillNum = parseFloat(monthlyBill) || 0;
    const monthlySavings = monthlyBillNum * 0.7; // 70% savings assumption
    
    setResults({
      monthly: monthlySavings,
      annual: monthlySavings * 12,
      twentyYear: monthlySavings * 12 * 20
    });
  };

  return (
    <div className="glassmorphism rounded-xl p-8 md:p-10">
      <h3 className="text-2xl font-bold mb-6 text-solar-white text-center">Calculate Your Solar Savings</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location" className="text-solar-white">Your Location</Label>
            <Select onValueChange={setLocation}>
              <SelectTrigger id="location" className="bg-white/10 border-solar-white/20 text-solar-white">
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="tx">Texas</SelectItem>
                <SelectItem value="fl">Florida</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="az">Arizona</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bill" className="text-solar-white">Monthly Electricity Bill ($)</Label>
            <Input 
              id="bill" 
              placeholder="e.g. 150" 
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
              className="bg-white/10 border-solar-white/20 text-solar-white"
              type="number"
            />
          </div>
          
          <Button 
            onClick={handleCalculate}
            className="glow-button text-solar-white w-full mt-4"
          >
            Calculate Savings
          </Button>
        </div>
        
        <div className={`space-y-4 transition-all duration-500 ${results ? 'opacity-100' : 'opacity-50'}`}>
          <h4 className="text-xl font-semibold text-solar-white">Your Estimated Savings</h4>
          
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm text-solar-white/80">Monthly Savings</p>
              <p className="text-2xl font-bold text-solar-gold glow-text">
                ${results ? results.monthly.toFixed(2) : '0.00'}
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm text-solar-white/80">Annual Savings</p>
              <p className="text-2xl font-bold text-solar-gold glow-text">
                ${results ? results.annual.toFixed(2) : '0.00'}
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm text-solar-white/80">20-Year Savings</p>
              <p className="text-2xl font-bold text-solar-gold glow-text">
                ${results ? results.twentyYear.toFixed(2) : '0.00'}
              </p>
            </div>
          </div>
          
          <Button className="glow-button text-solar-white w-full mt-4">
            Get Detailed Analysis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
