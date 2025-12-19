import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import DocumentCard from "@/components/DocumentCard";
import { documents, categories } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

export default function Examples() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [location]);

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group stats
  const stats = [
    { label: "Total Examples", value: documents.length },
    { label: "Templates", value: documents.filter(d => d.type === "template").length },
    { label: "Examples", value: documents.filter(d => d.type === "example").length },
  ];

  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
          <div className="space-y-2">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Training Examples
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Browse real-world examples of Moon River documents, forms, and workflows for training purposes.
            </p>
          </div>
          
          <div className="flex gap-4 md:border-l md:border-border md:pl-6">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
                <div className="text-2xl font-bold font-heading text-primary">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center sticky top-0 z-20 bg-background/95 backdrop-blur py-4 -mx-4 px-4 md:mx-0 md:px-0 border-b border-border/50 md:border-none md:static md:bg-transparent md:backdrop-blur-none md:py-0">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search documents, tags, or descriptions..." 
              className="pl-10 h-12 bg-card border-border focus-visible:ring-primary/20 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        {filteredDocs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-lg bg-muted/30">
            <div className="p-4 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">No documents found</h3>
            <p className="text-muted-foreground max-w-sm mt-2">
              We couldn't find any documents matching "{searchQuery}" in the {selectedCategory} category.
            </p>
            <Button 
              variant="link" 
              className="mt-4 text-primary"
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
