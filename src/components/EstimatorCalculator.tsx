import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, RefreshCw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

// Standard pricing constants (mock data based on industry standards)
const PRICING_DATA = {
  laborRate: 85, // per hour
  materials: {
    "acrylic-plaque": { base: 45, unit: "sqft" },
    "cast-aluminum": { base: 120, unit: "inch-height" },
    "vinyl-graphics": { base: 15, unit: "sqft" },
    "ada-sign": { base: 35, unit: "piece" }
  },
  markup: 1.4 // 40% markup
};

export default function EstimatorCalculator() {
  const [signType, setSignType] = useState("ada-sign");
  const [quantity, setQuantity] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 8, height: 8 }); // inches
  const [installHours, setInstallHours] = useState(0.5);
  const [totalCost, setTotalCost] = useState(0);

  // Calculate cost whenever inputs change
  useEffect(() => {
    calculateEstimate();
  }, [signType, quantity, dimensions, installHours]);

  const calculateEstimate = () => {
    let materialCost = 0;
    const material = PRICING_DATA.materials[signType as keyof typeof PRICING_DATA.materials];

    if (signType === "cast-aluminum") {
      // Price by letter height (approximate for demo)
      materialCost = material.base * (dimensions.height / 12) * quantity; 
    } else if (signType === "ada-sign") {
      // Price per piece
      materialCost = material.base * quantity;
    } else {
      // Price by sqft
      const sqft = (dimensions.width * dimensions.height) / 144;
      materialCost = material.base * sqft * quantity;
    }

    const laborCost = installHours * PRICING_DATA.laborRate;
    const subtotal = materialCost + laborCost;
    const total = subtotal * PRICING_DATA.markup;

    setTotalCost(total);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-t-4 border-t-blue-600">
      <CardHeader className="bg-slate-50 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calculator className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <CardTitle>Quick Estimate Calculator</CardTitle>
              <CardDescription>Internal tool for rough order of magnitude (ROM) pricing</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="bg-white">v1.0 Beta</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-8">
        
        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Sign Type</Label>
              <Select value={signType} onValueChange={setSignType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ada-sign">ADA Room ID (Standard)</SelectItem>
                  <SelectItem value="cast-aluminum">Cast Aluminum Letters</SelectItem>
                  <SelectItem value="acrylic-plaque">Acrylic Plaque</SelectItem>
                  <SelectItem value="vinyl-graphics">Vinyl Graphics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Quantity: {quantity}</Label>
              <Slider 
                value={[quantity]} 
                onValueChange={(val) => setQuantity(val[0])} 
                max={100} 
                step={1} 
                className="py-4"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Width (in)</Label>
                <Input 
                  type="number" 
                  value={dimensions.width} 
                  onChange={(e) => setDimensions({...dimensions, width: Number(e.target.value)})}
                />
              </div>
              <div className="space-y-2">
                <Label>Height (in)</Label>
                <Input 
                  type="number" 
                  value={dimensions.height} 
                  onChange={(e) => setDimensions({...dimensions, height: Number(e.target.value)})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Install Hours (Total)</Label>
              <Input 
                type="number" 
                step="0.5"
                value={installHours} 
                onChange={(e) => setInstallHours(Number(e.target.value))}
              />
              <p className="text-xs text-muted-foreground">Rate: ${PRICING_DATA.laborRate}/hr</p>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-inner flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Estimated Total</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-green-400">{formatCurrency(totalCost)}</span>
              <span className="text-slate-400 text-sm">incl. markup</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="secondary" size="sm" onClick={() => {
              setQuantity(1);
              setInstallHours(0.5);
            }}>
              <RefreshCw className="w-4 h-4 mr-2" /> Reset
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Save className="w-4 h-4 mr-2" /> Save Quote
            </Button>
          </div>
        </div>

        <div className="text-xs text-center text-muted-foreground bg-slate-50 p-2 rounded border border-dashed">
          * This is an estimate only. Final pricing must be approved by the Senior Estimator.
        </div>

      </CardContent>
    </Card>
  );
}
