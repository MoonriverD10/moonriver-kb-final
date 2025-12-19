import { Document } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentCardProps {
  doc: Document;
}

export default function DocumentCard({ doc }: DocumentCardProps) {
  const Icon = doc.icon || FileText;

  return (
    <Card className="group hover:shadow-md transition-all duration-300 border-border bg-card overflow-hidden flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="h-2 w-full bg-muted group-hover:bg-primary transition-colors duration-300" />
      </CardHeader>
      
      <CardContent className="p-5 flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="p-2.5 rounded-lg bg-muted/50 text-primary group-hover:bg-primary/10 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider text-muted-foreground border-border">
            {doc.fileType}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className={cn(
                "text-[10px] px-1.5 py-0 h-5 font-medium",
                doc.type === "template" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                doc.type === "example" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
              )}
            >
              {doc.type}
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">{doc.lastUpdated}</span>
          </div>
          
          <h3 className="font-heading font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
            {doc.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {doc.description}
          </p>
        </div>

        <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
          {doc.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          className="flex-1 gap-2 font-medium" 
          size="sm"
          asChild
          disabled={!doc.path || doc.path === "#"}
        >
          <a href={doc.path} download={doc.path !== "#"}>
            <Download className="h-4 w-4" />
            Download
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="shrink-0"
          asChild
          disabled={!doc.path || doc.path === "#"}
        >
          <a href={doc.path} target="_blank" rel="noopener noreferrer">
            <Eye className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
