import Layout from "@/components/Layout";
import { useLocation } from "wouter";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PlaceholderPage() {
  const [location] = useLocation();
  const title = location.split("/")[1].replace("-", " ").replace(/^\w/, c => c.toUpperCase());

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="p-6 rounded-full bg-muted/50 border border-border">
          <Construction className="h-12 w-12 text-primary" />
        </div>
        
        <div className="space-y-2 max-w-md">
          <h1 className="text-3xl font-heading font-bold text-foreground">
            {title || "Page"} Under Construction
          </h1>
          <p className="text-muted-foreground">
            This section of the knowledge base is currently being built. Check back soon for updates.
          </p>
        </div>

        <Link href="/">
          <Button size="lg" className="gap-2">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
