import { Document } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentCardProps {
  doc: Document;
}

export default function DocumentCard({ doc }: DocumentCardProps) {
  const Icon = doc.icon || FileText;

  // Helper to determine if we should use Google Docs Viewer
  const isOfficeFile = ["docx", "doc", "xlsx", "xls", "pptx", "ppt"].includes(doc.fileType);
  
  // Construct the view URL
  const getViewUrl = () => {
    if (!doc.path || doc.path === "#") return "#";
    
    // If it's an office file, use Google Docs Viewer
    if (isOfficeFile) {
      // We need a full absolute URL for Google Docs Viewer to work
      const baseUrl = window.location.origin;
      const fullUrl = new URL(doc.path, baseUrl).href;
      return `https://docs.google.com/viewer?url=${encodeURIComponent(fullUrl)}&embedded=true`;
    }
    
    // Otherwise return the direct path (works for PDF, images, etc.)
    return doc.path;
  };

  const viewUrl = getViewUrl();
  
  // Generate preview image path based on filename
  // Assuming the conversion script created .jpg files in /documents/previews/ with same basename
  const getPreviewPath = () => {
    if (!doc.path || doc.path === "#") return null;
    const filename = doc.path.split('/').pop();
    if (!filename) return null;
    
    // Handle the specific infographic case which is already an image
    if (filename.includes("Infographic")) {
        return `/documents/previews/${filename.replace(/\.(jpeg|jpg|png)$/i, '.jpg')}`;
    }
    
    const basename = filename.substring(0, filename.lastIndexOf('.'));
    return `/documents/previews/${basename}.jpg`;
  };

  const previewPath = getPreviewPath();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden flex flex-col h-full">
      {/* Preview Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted border-b border-border">
        {previewPath ? (
          <img 
            src={previewPath} 
            alt={`Preview of ${doc.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
            }}
          />
        ) : null}
        
        {/* Overlay with Icon fallback if image missing or loading */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm transition-opacity duration-300",
          previewPath ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}>
          <div className="p-4 rounded-full bg-background/80 shadow-sm">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Type Badge Overlay */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className={cn(
              "shadow-sm backdrop-blur-md border-white/20",
              doc.type === "template" ? "bg-blue-500/90 text-white" :
              doc.type === "example" ? "bg-green-500/90 text-white" :
              "bg-orange-500/90 text-white"
            )}
          >
            {doc.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5 flex-1 flex flex-col gap-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span className="font-mono uppercase">{doc.category}</span>
            <span className="font-mono">{doc.fileType.toUpperCase()}</span>
          </div>
          
          <h3 className="font-heading font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {doc.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {doc.description}
          </p>
        </div>

        <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
          {doc.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium border border-border">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          className="flex-1 gap-2 font-medium shadow-sm" 
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
          <a href={viewUrl} target="_blank" rel="noopener noreferrer">
            <Eye className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
