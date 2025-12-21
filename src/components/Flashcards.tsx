import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Papa from 'papaparse';

interface FlashcardData {
  question: string;
  answer: string;
}

// Raw CSV content embedded to avoid async loading issues for this demo
// In a real app, this would be fetched from the public folder
const csvContent = `What is the crucial first step after being awarded a contract or purchase order?,To conduct a thorough examination of the contract or purchase order.
"If a significant time gap exists between a bid and contract award, what financial aspect must be reassessed?",Potential increases in material and labor costs.
What are the two 'Primary Verification Items' to check in a newly awarded contract?,"The Contract Amount and the Scope of Work, ensuring they match the original bid."
What three key pieces of contact information should be collected during the contract review?,"Contact info for the Project Manager, Job Site Superintendent, and Billing/Accounting."
"According to the 'PRO TIP' in Chapter 1, when should you consult with the GC's Project Manager about your signage scope?",Before the contract or purchase order is executed (signed).
What is the 'Key Business Advisory' regarding your original bid when finalizing a contract?,Request to have your original bid amended to the Contract and or Purchase order.
"What is the primary purpose of Step 2, 'Compare to Original Bid'?",To ensure the total awarded amount in the contract matches the amount in your original bid.
"To maintain negotiating leverage, when is it critical to address any disputes or ambiguities in a contract?",Before the contract is executed.
"A wise saying from the source material states, “What is not on paper _____”",has not been said.
"If a General Contractor refuses to amend your proposal into the contract scope, what should you do?",Review the contract thoroughly to uncover any potential hidden clauses that could cause costs or delays.
"When a contract is signed by both the subcontractor and the General Contractor, it is considered _____",legally binding.
What should you do if you receive a contract for signature that is missing the General Contractor's signature?,"Sign and return the contract, expecting a fully executed copy in return before commencing any work."
"In a post-signing kickoff meeting, what structural support should be confirmed with the GC for anchoring large exterior or interior signs?","That the GC is providing 'blocking' (e.g., marine board) behind the walls."
Who is typically responsible for pulling general permits as they relate to signage?,The General Contractor (G.C.).
"A _____ will be required with every Contract for Materials and Installation, but typically not for Purchase Orders for Materials Only.",Certificate of Insurance (C.O.I.)
Who typically completes and provides the Certificate of Insurance (COI) form upon your request?,Your insurance agent who handles your Business Owners Policy (BOP).
What is the primary function of a Certificate of Insurance (COI) in a construction project?,It provides tangible proof that subcontractors have the necessary insurance coverage to protect against financial disasters and liability claims.
Name three types of insurance coverage typically verified by a COI.,"General Liability, Auto Insurance, and Workers’ Compensation Insurance."
Why is it crucial to provide a COI for 'stored materials'?,"To prove the materials are insured in case of damage or loss, preventing project delays or payment issues."
Concept: Schedule of Values (S.O.V.),"A detailed breakdown of the bid, enabling the General Contractor to see how costs are allocated across the project."
"In an SOV, you are entering the total value of each item, which includes your costs, _____, and overhead.",mark-up
What is the purpose of a Project Participation Form?,It lists all the important people on your team and their contact details for the General Contractor.
"For tax purposes, what form is required to verify a contractor's tax identification number?",A W-9 Form.
"As payments are made, subcontractors may need to provide _____ to protect the owner from potential claims.",Partial Release of Liens
OSHA 10-hour certification is sometimes required for workers on what types of projects?,Public works or large municipal projects in certain states.
"After signing a contract, what key information should be entered into a Project Management System like Trello?","Project name, location, contract info, GC contacts, contract value, location map, and scope of work."
"In the accounting system (QuickBooks), what must the Sales Order accurately represent?",The material and labor costs as stipulated in the original contract's Schedule of Values.
Why is establishing a Job Folder with paper copies of all electronic files a crucial step?,"They act as a dependable backup, mitigating the risk of information loss due to computer-related problems."
"Why must you request new quotes from manufacturers after a project is awarded, even if you received them during bidding?","The initial price estimates might no longer be valid, as most quotes are only valid for 30 days."
"When requesting quotes from suppliers, what should you include in your email to clearly communicate your needs?","All necessary details, including visual representations like drawings."
"After approving a manufacturer's quote, what document should you expect to receive within a few days?",An 'Order Acknowledgement' showing receipt of what was approved.
"When submitting manufacturer drawings to the GC, what document should you check for any extra requirements?","The original project specifications, specifically section 101400 Signage."
What are four possible review outcomes an architect might mark on a submittal?,"Rejected, Reviewed, Approved as Noted, or Revise and Resubmit."
"According to the contract, how long does an architect typically have to review your drawings and samples?",Two weeks.
With whom should a subcontractor primarily direct their communications regarding a project?,"The General Contractor, as they are the entity with whom the subcontract exists."
"Once submittals are approved, what information should you obtain from the manufacturer regarding production?",How long it will take to make (lead time) and when the products will be sent out (delivery date).
How much advance notice are you typically required to give a GC or site superintendent before a delivery arrives at a construction site?,24 hours.
Why might deliveries from a freight carrier require more attention than those from UPS or FedEx Ground?,"The freight carrier might be delivering to that jobsite for the first time, whereas regular UPS/FedEx drivers often know the site well."
"Under FOB _____ shipping terms, the buyer (subcontractor) assumes all risk once the seller (manufacturer) ships the product.",Origin
"Under FOB _____ shipping terms, the manufacturer retains responsibility for the goods until they reach the buyer's location.",Destination
What is the safest approach regarding shipping terms and insurance?,"Clearly specify shipping terms in contracts, verify insurance coverage for materials in transit, and document the condition upon delivery."
"When requesting an installation quote, what document should you always ask the installer to provide?",A Certificate of Insurance (COI).
What must you inform an installation company about if a project has a Prevailing Wage Order?,They will be required to provide Certified Payroll Reports to the General Contractor.
What does an NTE (Not-To-Exceed) limit on an installation quote prevent?,It prevents the installer from performing extra work that costs more without contacting you for approval first.
Why is it important for interior ADA signs to be installed on time per the project schedule?,They must be installed for the building to pass inspection and get its occupancy permit.
"If possible, what should be done before installation day to confirm hardware needs and see the work areas?",A pre-install jobsite visit.
"About a week before the installation date, who should you call to confirm the schedule and site readiness?",Your installation company and the GC's jobsite superintendent.
What is a 'Change Order' in the context of construction project management?,A written approval from the General Contractor to perform work that is not part of the original scope/contract.
"If a jobsite superintendent asks you to perform extra work, what should you secure before proceeding?","Written permission (email, text, or formal change order) from the GC showing approval and assurance of payment."
"For a 'materials only' Purchase Order, what should you request from the jobsite superintendent after delivery?",A picture of the received product/boxes to confirm it was received and stored.
What is the name of the standard American Institute of Architects (AIA) form used for payment applications?,The G702/G703 Pay Application.
"Before getting an AIA G702/G703 form notarized, what is the recommended 'PRO TIP'?",Send a copy to your accounting contact at the GC for them to double check everything is in order.
"To get paid for materials stored at your own shop, what documentation must you provide to the GC?","Your COI showing stored materials coverage, plus pictures of the packing slip and signage."
What is the final invoice submitted at the very end of a project for?,"To bill for the held retainage, which is usually 5% or 10% of the total contract value."
What does the first step 'Awarded Contract / Receive PO' trigger in the project management process?,"The start of the entire project management workflow, beginning with contract review."
"In the project management flowchart, if submittals are not approved, what is the next step?",Revise and Resubmit.
What is the purpose of the 'Project Close-Out' phase?,To provide warranty and maintenance documents and submit all required close-out documentation to the GC.
The process of submitting manufacturer drawings and cut sheets to the GC for architect review is part of which major phase?,Coordinate Submittals and Approvals.
During which phase are project details entered into systems like Trello and QuickBooks?,Set Up Project Management Systems.
Confirming shipping details and monitoring delivery falls under which major process gate?,Production and Shipment.`;

export const Flashcards = () => {
  const [cards, setCards] = useState<FlashcardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    // Parse CSV data
    Papa.parse(csvContent, {
      complete: (results) => {
        const parsedData = results.data
          .filter((row: any) => row.length >= 2 && row[0]) // Filter empty rows
          .map((row: any) => ({
            question: row[0],
            answer: row[1]
          }));
        setCards(parsedData);
      }
    });
  }, []);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (cards.length === 0) return <div className="text-center p-10 text-muted-foreground">Loading flashcards...</div>;

  const currentCard = cards[currentIndex];

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      
      {/* Card Container */}
      <div className="relative h-[500px] w-full perspective-1000">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative preserve-3d cursor-pointer"
            onClick={handleFlip}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              className="w-full h-full relative preserve-3d"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of Card (Question) */}
              <Card className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-12 text-center bg-slate-900 border-slate-700 shadow-2xl">
                <div className="absolute top-6 left-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Question
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
                  {currentCard.question}
                </h3>
                <div className="absolute bottom-8 text-slate-400 text-sm flex items-center gap-2 animate-pulse">
                  Click to reveal answer
                </div>
              </Card>

              {/* Back of Card (Answer) */}
              <Card 
                className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-12 text-center bg-indigo-950 border-indigo-800 shadow-2xl"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="absolute top-6 left-6 text-xs font-bold text-indigo-300 uppercase tracking-widest">
                  Answer
                </div>
                <p className="text-2xl md:text-3xl font-medium text-indigo-50 leading-relaxed">
                  {currentCard.answer}
                </p>
                
                <div className="absolute bottom-8 flex gap-3">
                  <Button 
                    variant="outline" 
                    className="bg-indigo-900/50 border-indigo-700 text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Placeholder for "Explain" feature
                      window.open(`https://www.google.com/search?q=${encodeURIComponent(currentCard.question)}`, '_blank');
                    }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" /> Explain
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Floating) */}
        <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 hidden md:block">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="h-12 w-12 rounded-full bg-slate-200/10 hover:bg-slate-200/20 text-slate-600 hover:text-slate-900 disabled:opacity-30"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
        </div>
        <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 hidden md:block">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNext} 
            disabled={currentIndex === cards.length - 1}
            className="h-12 w-12 rounded-full bg-slate-200/10 hover:bg-slate-200/20 text-slate-600 hover:text-slate-900 disabled:opacity-30"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation & Progress */}
      <div className="mt-8 flex items-center justify-between px-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="md:hidden"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex flex-col items-center mx-auto">
          <span className="text-sm font-medium text-muted-foreground">
            Card {currentIndex + 1} of {cards.length}
          </span>
          <div className="w-48 h-1 bg-slate-200 rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full bg-indigo-600 transition-all duration-300" 
              style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>

        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext} 
          disabled={currentIndex === cards.length - 1}
          className="md:hidden"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-center mt-4 text-xs text-muted-foreground">
        Press <kbd className="px-1 py-0.5 rounded bg-muted border">Space</kbd> to flip, <kbd className="px-1 py-0.5 rounded bg-muted border">←</kbd> / <kbd className="px-1 py-0.5 rounded bg-muted border">→</kbd> to navigate
      </div>
    </div>
  );
};
