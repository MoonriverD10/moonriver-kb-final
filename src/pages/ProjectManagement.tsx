import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PenTool, Factory, HardHat, ClipboardCheck, CheckCircle2, ChevronRight, Download, BookOpen, Copy, ThumbsUp, ThumbsDown, ChevronLeft, Maximize2, X } from "lucide-react";
import sopContentFull from "@/data/sopContentFull.json";
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from "framer-motion";

// Blueprint Slideshow Component
const BlueprintSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = 11; // Based on the file listing we saw

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Format slide number to match filename (slide-01.png, slide-02.png, etc.)
  const getSlidePath = (index: number) => {
    const slideNum = (index + 1).toString().padStart(2, '0');
    return `/images/blueprint/slide-${slideNum}.png`;
  };

  return (
    <div className={`relative group ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center p-4' : 'w-full aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-lg mb-12'}`}>
      
      {/* Main Image */}
      <div className={`relative ${isFullscreen ? 'h-full w-full flex items-center justify-center' : 'w-full h-full'}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={getSlidePath(currentSlide)}
            alt={`Project Blueprint Slide ${currentSlide + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${isFullscreen ? 'max-h-full max-w-full object-contain' : 'w-full h-full object-contain'}`}
          />
        </AnimatePresence>

        {/* Navigation Overlay */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-end">
          <div className="text-white text-sm font-medium px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
            Slide {currentSlide + 1} of {totalSlides}
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
            className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
          >
            {isFullscreen ? <X className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ProjectManagement() {
  const [activeStageId, setActiveStageId] = useState(1);

  const stages = sopContentFull.stages;
  const activeStage = stages.find(s => s.id === activeStageId) || stages[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileSignature": return FileText;
      case "PenTool": return PenTool;
      case "Factory": return Factory;
      case "HardHat": return HardHat;
      case "ClipboardCheck": return ClipboardCheck;
      default: return FileText;
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Project Management Hub</h1>
        <p className="text-muted-foreground">
          Your interactive guide to the Moon River Sign Company project lifecycle.
          Click a stage below to access the full SOP manual for that phase.
        </p>
      </div>

      {/* Blueprint Slideshow Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              The Project Blueprint
            </h2>
            <p className="text-muted-foreground mt-1">
              Visual guide to the D10 SOP workflow. Review this before diving into the chapters below.
            </p>
          </div>
          <a 
            href="/D10_Project_Blueprint.pdf" 
            download
            className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
        
        <BlueprintSlideshow />
      </div>

      {/* Interactive Infographic Navigation */}
      <div className="relative mb-12">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 hidden md:block transform -translate-y-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stage) => {
            const Icon = getIcon(stage.icon);
            const isActive = stage.id === activeStageId;
            
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={cn(
                  "flex flex-col items-center p-4 rounded-xl transition-all duration-300 border-2 bg-background relative group",
                  isActive 
                    ? "border-primary shadow-lg scale-105 z-10" 
                    : "border-muted hover:border-primary/50 hover:bg-accent/50"
                )}
              >
                <div className={cn(
                  "p-3 rounded-full mb-3 transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className={cn("font-bold text-sm mb-1", isActive ? "text-primary" : "text-foreground")}>
                    {stage.id}. {stage.title}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2 hidden md:block">
                    {stage.summary}
                  </div>
                </div>
                
                {/* Active Indicator Arrow */}
                {isActive && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary hidden md:block" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-Width Reader View (Optimized for Study) */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="sticky top-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  In This Section
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {activeStage.fullContent.map((chapter, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                    <div className="font-medium text-sm mb-2 text-foreground flex items-center gap-2">
                      <BookOpen className="h-3 w-3 text-primary" />
                      {chapter.chapterTitle.split(':')[0]}
                    </div>
                    <ul className="space-y-1 border-l-2 border-muted ml-1.5 pl-3">
                      {chapter.sections.map((section, sIdx) => (
                        <li key={sIdx}>
                          <a 
                            href={`#section-${idx}-${sIdx}`} 
                            className="text-xs text-muted-foreground hover:text-primary block py-1 transition-colors line-clamp-1"
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(`section-${idx}-${sIdx}`)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            {section.heading.replace(/^Step \d+: /, '')}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Downloads
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Download className="h-3 w-3" />
                  Download Full SOP
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <CheckCircle2 className="h-3 w-3" />
                  Stage Checklist
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area - Clean Reader Mode */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0 space-y-8">
                
                {/* Header Block */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border shadow-sm">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    {(() => {
                      const Icon = getIcon(activeStage.icon);
                      return <Icon className="h-6 w-6 text-primary" />;
                    })()}
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">{activeStage.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {activeStage.summary}
                    </p>
                  </div>
                </div>

                {/* Content Blocks */}
                {activeStage.fullContent.map((chapter, idx) => (
                  <div key={idx} className="space-y-6">
                    {/* Chapter Divider */}
                    <div className="flex items-center gap-4 py-4">
                      <div className="h-px bg-border flex-1" />
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        {chapter.chapterTitle}
                      </span>
                      <div className="h-px bg-border flex-1" />
                    </div>

                    {chapter.sections.map((section, sIdx) => (
                      <div 
                        key={sIdx} 
                        id={`section-${idx}-${sIdx}`} 
                        className="group relative bg-card rounded-xl border shadow-sm p-8 md:p-10 scroll-mt-24 transition-all hover:shadow-md"
                      >
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold tracking-tight text-foreground">
                            {section.heading}
                          </h3>
                          
                          <div className="prose prose-slate dark:prose-invert max-w-none 
                            prose-headings:font-semibold prose-headings:tracking-tight
                            prose-p:leading-8 prose-p:text-[1.05rem] prose-p:text-slate-600 dark:prose-p:text-slate-300
                            prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-li:marker:text-primary/70
                            prose-strong:text-foreground prose-strong:font-bold
                            prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300
                          ">
                            <ReactMarkdown>{section.body}</ReactMarkdown>
                          </div>
                        </div>

                        {/* Interaction Bar (Subtle) */}
                        <div className="flex items-center gap-2 mt-8 pt-4 border-t opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* End of Section */}
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground space-y-4">
                  <div className="h-12 w-1 bg-gradient-to-b from-border to-transparent" />
                  <Button variant="outline" className="gap-2" onClick={() => {
                    const nextId = activeStageId < 5 ? activeStageId + 1 : 1;
                    setActiveStageId(nextId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>
                    Continue to Next Stage <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
