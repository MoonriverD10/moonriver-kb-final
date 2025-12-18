import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useLocation } from "wouter";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // If already logged in, redirect to home
  if (isAuthenticated) {
    setLocation("/");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      setLocation("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <Card className="w-full max-w-md shadow-lg border-border/50">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Moon River Knowledge Base
          </CardTitle>
          <CardDescription>
            Enter the team password to access internal documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={error ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {error && (
                <p className="text-sm text-destructive font-medium">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <Button type="submit" className="w-full font-semibold">
              Access Knowledge Base
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
