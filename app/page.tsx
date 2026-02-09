"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  ExternalLink,
  MousePointer2,
  Plus,
  Minus,
  ImageIcon,
  Smartphone,
  Briefcase,
  ChevronRight,
  ArrowLeft,
  Info,
  CheckCircle,
  AlertCircle,
  Layers,
  Monitor,
  GraduationCap,
  Cpu,
  Linkedin,
  Twitter,
  Dribbble,
  Smile,
  Zap,
  Target,
  Settings,
  ShieldCheck,
  Globe,
  FileText,
  Clock,
  Send,
  MessageSquare,
  Search,
  PenTool,
  GitBranch,
  Hand,
  Activity,
} from "lucide-react";
import Image from "next/image";

// --- CUSTOM CURSOR (isolated state so mouse moves don't re-render the whole page) ---
function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Detect hoverable elements to change cursor style
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-hoverable]") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-help")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-hoverable]") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-help")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{ left: mousePos.x, top: mousePos.y }}
    >
      <MousePointer2
        size={24}
        fill={isHovering ? "#3b82f6" : "#000"}
        stroke="white"
        strokeWidth={1}
        className="-rotate-[15deg]"
      />
      <div className="bg-white border-2 border-black px-2 py-0.5 ml-4 -mt-2 text-xs font-bold shadow-sm">
        Alfa Zihal {isHovering ? "?" : ""}
      </div>
    </div>
  );
}

// Custom CSS for the "Hand-Drawn" look — memoized to avoid FOUC on re-render
const BALSAMIQ_CSS = `
    .balsamiq-font {
      font-family: 'Architects Daughter', 'Comic Sans MS', 'Comic Sans', cursive;
    }

    .sketch-border {
      border: 2px solid #000;
      border-radius: 4px;
      box-shadow: 2px 2px 0px 0px #000;
    }

    .sketch-border-thick {
      border: 3px solid #000;
      border-radius: 4px;
      box-shadow: 3px 3px 0px 0px #000;
    }

    .sketch-card {
      border: 2px solid #000;
      border-radius: 8px 4px 10px 2px / 4px 10px 3px 8px;
    }

    .enterprise-stack {
      position: relative;
    }

    .enterprise-stack::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      right: -4px;
      bottom: -4px;
      border: 2px solid #000;
      background: white;
      z-index: -1;
      border-radius: 4px;
    }

    .tape-effect {
      position: relative;
    }

    .tape-effect::before {
      content: '';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%) rotate(-2deg);
      width: 80px;
      height: 25px;
      background: rgba(255, 255, 200, 0.6);
      border: 1px solid rgba(0,0,0,0.1);
      z-index: 20;
    }

    .graph-paper {
      background-color: #ffffff;
      background-image: 
        linear-gradient(#e5e5e5 1px, transparent 1px),
        linear-gradient(90deg, #e5e5e5 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .sketch-button {
      background: #fff;
      border: 2px solid #000;
      padding: 4px 12px;
      border-radius: 4px;
      transition: box-shadow 0.1s, transform 0.1s;
      box-shadow: 2px 2px 0px 0px #000;
    }

    .sketch-button:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0px 0px #000;
    }

    .sketch-input {
      border: 2px solid #000;
      padding: 8px 12px;
      border-radius: 4px;
      background: #fff;
      outline: none;
      font-family: inherit;
    }

    .hand-drawn-line {
      height: 2px;
      background: #000;
      width: 100%;
      transform: rotate(-0.5deg);
    }

    .typing-cursor {
      display: inline-block;
      width: 3px;
      height: 1em;
      background-color: #000;
      margin-left: 4px;
      animation: blink 0.8s infinite;
      vertical-align: middle;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
`;

const BalsamiqStyles = React.memo(() => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
    />
    <style dangerouslySetInnerHTML={{ __html: BALSAMIQ_CSS }} />
  </>
));

interface WorkOverview {
  goal: string;
  logic: string;
  stat: string;
}

interface Project {
  name: string;
  desc: string;
  details: string;
}

interface WorkItem {
  id: string;
  title: string;
  type: string;
  description: string;
  isEnterprise: boolean;
  isMobile?: boolean;
  period?: string;
  logoInitials?: string;
  overview?: WorkOverview;
  projects?: Project[];
  context?: string;
  problem?: string;
  solution?: string;
  tags?: string[];
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function Page() {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [view, setView] = useState("canvas");
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const headline = "Alfa Zihal: UX & Product Designer";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Typing animation logic
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= headline.length) {
        setTypedText(headline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(typingInterval);
    };
  }, []);

  const [workItems] = useState<WorkItem[]>([
    {
      id: "ent1",
      title: "Global Tech Corp",
      type: "Enterprise",
      description: "Senior UX Designer (Contract)",
      isEnterprise: true,
      period: "2026 - Present",
      logoInitials: "GT",
      overview: {
        goal: "Lead internal design ops",
        logic: "Atomic System Architecture",
        stat: "3+ Scaled Products",
      },
      projects: [
        {
          name: "Internal CRM Overhaul",
          desc: "Simplified lead management for 500+ agents.",
          details: "Cohesive interface design.",
        },
        {
          name: "Cloud Admin Dashboard",
          desc: "Logic-mapping for complex server instances.",
          details: "Reduced errors by 30%.",
        },
        {
          name: "HR Portal",
          desc: "Redesigned onboarding flow.",
          details: "Condensed 12 steps into 4.",
        },
      ],
      tags: ["Enterprise", "B2B"],
    },
    {
      id: "ent2",
      title: "FinStream Inc.",
      type: "Enterprise",
      description: "Lead Product Designer",
      period: "2026 - 2030",
      isEnterprise: true,
      logoInitials: "FS",
      overview: {
        goal: "Modernize legacy wealth app",
        logic: "Modular Logic Components",
        stat: "2.4x User Growth",
      },
      projects: [
        {
          name: "Wealth Management App",
          desc: "Design system for HNW clients.",
          details: "Charting and asset allocation.",
        },
        {
          name: "Risk Assessment Tool",
          desc: "Visualizing data for banking analysts.",
          details: "Automated report UI.",
        },
      ],
      tags: ["Finance", "SaaS"],
    },
    {
      id: "p1",
      title: "SwiftPay FinTech",
      type: "Mobile App",
      description: "Low-fi mockup of the cross-border payment flow.",
      isEnterprise: false,
      isMobile: true,
      overview: {
        goal: "Reduce cross-border friction",
        logic: "Centralized Ledger System",
        stat: "+14% Success Rate",
      },
      context: "Digital Nomads struggle with hidden fees.",
      problem: "Opaque transaction finality.",
      solution: "Real-Time Calculator + Status Tracker.",
      tags: ["Mobile", "Individual"],
    },
    {
      id: "p2",
      title: "EcoStore E-com",
      type: "Web Design",
      description: "Checkout flow and carbon-offset integration sketch.",
      isEnterprise: false,
      isMobile: false,
      overview: {
        goal: "Integrate carbon transparency",
        logic: "Embedded Offset API",
        stat: "8k trees planted",
      },
      context: "Sustainability impact is often hidden.",
      problem: "Low engagement with carbon metrics.",
      solution: "Integrated 'Tree points' in primary CTA.",
      tags: ["Web", "Individual"],
    },
  ]);

  const [blogPosts] = useState<BlogPost[]>([
    {
      id: "b1",
      title: "The Logic of Low-Fi sketching",
      date: "Jan 12, 2026",
      excerpt:
        "Why mapping out logical flows in wireframe mode saves weeks of rework during the high-fidelity phase.",
      tags: ["Strategy", "Philosophy"],
    },
    {
      id: "b2",
      title: "Designing for High-Density Data",
      date: "Dec 05, 2025",
      excerpt:
        "Lessons learned from building complex cloud dashboards for technical server administrators.",
      tags: ["Enterprise", "IA"],
    },
    {
      id: "b3",
      title: "Mobile Accessibility Hacks",
      date: "Nov 20, 2025",
      excerpt:
        "Quick wins for making complex fintech apps more accessible for diverse user capabilities.",
      tags: ["Accessibility", "Mobile"],
    },
  ]);

  const openDetail = (item: WorkItem) => {
    setSelectedItem(item);
    setView("detail");
    window.scrollTo(0, 0);
  };

  const closeView = () => {
    setView("canvas");
    setSelectedItem(null);
    setIsSubmitted(false);
  };

  // --- REUSABLE METHODOLOGY COMPONENT ---
  const MethodologySection = ({
    colorClass = "bg-green-100",
  }: {
    colorClass?: string;
  }) => (
    <section className="relative my-24">
      <div
        className={`absolute -top-12 left-0 ${colorClass} border-2 border-black p-2 px-6 rotate-[-1deg] font-black uppercase shadow-sm z-10`}
      >
        {"My Design Methodology"}
      </div>

      <div className="sketch-card bg-white p-10 overflow-hidden">
        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Process Connectors */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-black border-dashed z-0 opacity-20"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-yellow-50 transition-colors">
              <Search size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">01 Research</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                {"Mapping user mental models & defining core logic friction."}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-50 transition-colors">
              <Settings size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">02 Logic Flow</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                Architecting high-density systems and data hierarchies.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-green-50 transition-colors">
              <PenTool size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">
                03 Wireframing
              </h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                Rapid lo-fi prototyping to validate functional puzzles.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-red-50 transition-colors">
              <Activity size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">04 Iterate</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                Usability testing and refining logic before the pixels.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-4 border-2 border-black border-dashed bg-gray-200 text-[14px] leading-relaxed text-center italic">
          {
            '"I prioritize functionality and clarity. By staying in the low-fidelity phase longer, we ensure the structural integrity of the user experience before committing to visual aesthetics."'
          }
        </div>
      </div>
    </section>
  );

  // --- SUB-VIEWS ---

  const MinimalFooter = () => (
    <div className="mt-24 mb-8 border-t-2 border-black border-dashed pt-8 flex flex-col items-center gap-6 opacity-60">
      <div className="text-xl font-black italic tracking-widest uppercase">
        Everything is possible by prayer and UX
      </div>
      <div className="flex gap-8">
        <a
          href="#"

          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Linkedin size={16} /> LINKEDIN
        </a>
        <a
          href="#"

          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Dribbble size={16} /> DRIBBBLE
        </a>
        <a
          href="#"

          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Twitter size={16} /> TWITTER
        </a>
      </div>
    </div>
  );

  const ResumeView = () => (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={closeView}

          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {"Back"}
        </button>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          Work History
        </span>
      </div>

      <div className="sketch-card bg-white p-10 flex flex-col gap-12">
        <section>
          <div className="inline-block bg-yellow-100 border-2 border-black px-4 py-1 rotate-[-1deg] mb-4 font-black uppercase">
            {"Profile"}
          </div>
          <p className="text-lg leading-relaxed">
            Multidisciplinary UX & Product Designer with 4+ years of experience in
            leading digital transformation for enterprise-scale platforms.
            Expert in user Flows, information architecture, rapid prototyping,
            and complex user flow logic. I believe in solving the functional
            puzzle before applying the visual polish.
          </p>
        </section>

        <section className="flex flex-col gap-8">
          <div className="inline-block bg-blue-100 border-2 border-black px-4 py-1 rotate-[1deg] mb-4 font-black uppercase">
            {"Work History"}
          </div>

          {workItems
            .filter((i) => i.isEnterprise)
            .map((item) => (
              <div
                key={item.id}
                className="relative pl-8 border-l-2 border-black border-dashed"
              >
                <div className="absolute top-0 -left-[9px] w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-xl font-black uppercase">
                    {item.title}
                  </h4>
                  <span className="font-bold text-sm bg-gray-100 px-2 py-0.5 border border-black">
                    {item.period || "2022 - Present"}
                  </span>
                </div>
                <p className="italic font-bold text-blue-800 mb-4">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  {item.projects?.map((proj, i) => (
                    <li key={i} className="flex gap-2">
                      <ChevronRight size={16} className="shrink-0 mt-0.5" />
                      <span>
                        <strong className="uppercase">{proj.name}:</strong>{" "}
                        {proj.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t-2 border-black border-dashed">
          <section>
            <div className="inline-block bg-green-100 border-2 border-black px-4 py-1 rotate-[-2deg] mb-6 font-black uppercase">
              {"Skills Stack"}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <h5 className="font-black text-xs uppercase flex items-center gap-2">
                  <Layers size={14} /> Design
                </h5>
                <ul className="text-xs flex flex-col gap-1 opacity-70">
                  <li>- Wireframing</li>
                  <li>- User Flows</li>
                  <li>- Info Architecture</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="font-black text-xs uppercase flex items-center gap-2">
                  <Cpu size={14} /> Technical
                </h5>
                <ul className="text-xs flex flex-col gap-1 opacity-70">
                  <li>- React / JS</li>
                  <li>- Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="inline-block bg-purple-100 border-2 border-black px-4 py-1 rotate-[1deg] mb-6 font-black uppercase">
              {"Education"}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <GraduationCap size={24} className="shrink-0" />
                <div>
                  <h5 className="font-black uppercase text-sm">
                    M.Sc. Interaction Design
                  </h5>
                  <p className="text-xs opacity-60 italic">
                    Tech University of Design | 2018
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-12 text-center">
          <MinimalFooter />
          <p className="text-[10px] uppercase font-bold opacity-30 italic mt-8">
            Generated by Alfa_Zihal_Mockup_Engine_v4.2
          </p>
        </div>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={closeView}

          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {"Back"}
        </button>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          Hire Request
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Contact Form Mockup */}
        <div className="sketch-card bg-white p-8 relative">
          <div className="bg-[#e0e0e0] border-2 border-black border-b-4 p-2 mb-6 flex justify-between">
            <span className="font-black text-xs uppercase italic tracking-tighter">
              Request Mockup
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
            </div>
          </div>

          <h2 className="text-3xl font-black uppercase mb-6 italic underline underline-offset-4 decoration-2">
            {"Let's build !"}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {"Sender Name"}
              </label>
              <input
                type="text"
                className="sketch-input"
                placeholder="Type name here..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {"Email Address"}
              </label>
              <input
                type="email"
                className="sketch-input"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {"Project Scope"}
              </label>
              <textarea
                className="sketch-input h-32"
                placeholder="Briefly describe the user logic challenge..."
              />
            </div>
            <button
              onClick={() => setIsSubmitted(true)}

              className="sketch-button w-full py-4 bg-indigo-600 text-black font-black uppercase flex items-center justify-center gap-3"
            >
              Submit Request <Send size={18} />
            </button>
          </div>

          {isSubmitted && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-30 flex items-center justify-center p-8">
              <div className="sketch-border bg-yellow-100 p-8 rotate-[-2deg] text-center shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-white border-2 border-black p-2 rotate-[12deg]">
                  <Smile size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">
                  Request Cached!
                </h3>
                <p className="text-sm font-bold">
                  {"I'll review the logic and get back to you within 24 work-hours."}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 underline text-xs font-black uppercase"
                >
                  {"Edit Draft"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Contact Info / Side Annotation */}
        <div className="flex flex-col gap-8">
          <div className="sketch-border p-6 bg-blue-50 rotate-[1deg]">
            <h4 className="font-black uppercase flex items-center gap-2 mb-4">
              <MessageSquare size={18} /> Direct Links
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase">
                    E-Mail
                  </p>
                  <p className="font-bold underline">aalfajiri75@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase">
                    Professional Network
                  </p>
                  <p className="font-bold underline">
                    linkedin.com/in/alfazihal
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sketch-border p-6 bg-white border-dashed relative">
            <div className="absolute -top-3 -left-3 bg-yellow-100 border-2 border-black px-2 py-1 text-[10px] font-black rotate-[-5deg]">
              ANNOTATION
            </div>
            <h4 className="font-black uppercase mb-2 text-sm italic">
              Current availability:
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              {"Open for complex logic puzzles in B2B, B2C, FinTech, Blockchain and GovStack enterprise design systems."}
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-black text-xs">
              <Zap size={14} fill="currentColor" /> RATE: FAST TRACK
            </div>
          </div>
        </div>
      </div>

      {/* Methodology component call inside contact view */}
      <MethodologySection colorClass="bg-green-100" />

      <MinimalFooter />
    </div>
  );

  const DetailView = ({ item }: { item: WorkItem }) => (
    <div className="max-w-5xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={closeView}

          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {"Back"}
        </button>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          {item.title}
        </span>
      </div>

      {item.isEnterprise ? (
        <div className="flex flex-col gap-12">
          <div className="sketch-border bg-white p-8">
            <h2 className="text-5xl font-black uppercase mb-2">
              {item.title}
            </h2>
            <div className="flex gap-4 text-lg mb-6">
              <span className="flex items-center gap-2 italic">
                <Briefcase size={20} /> {item.description}
              </span>
              <span className="opacity-30">|</span>
              <span className="font-bold">{item.period || "Current"}</span>
            </div>
            <p className="text-xl max-w-3xl border-t-2 border-black border-dashed pt-6 italic">
              Focused on enterprise-scale logic and system wireframing.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <h3 className="text-3xl font-black uppercase underline decoration-4">
              Sub-Projects Archive
            </h3>
            {item.projects?.map((proj, i) => (
              <div key={i} className="sketch-card bg-white p-8">
                <h4 className="text-2xl font-black uppercase mb-2 underline">
                  {proj.name}
                </h4>
                <div className="p-4 border-2 border-black border-dashed bg-gray-50 text-md leading-relaxed">
                  {"[Notes]: "}
                  {proj.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          <div className="sketch-card bg-white overflow-hidden">
            <div className="bg-[#e0e0e0] border-b-2 border-black p-4 flex items-center justify-between">
              <span className="font-black uppercase italic tracking-tighter">
                Case_Study: {item.title}
              </span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full border border-black bg-white"></div>
                <div className="w-3 h-3 rounded-full border border-black bg-white"></div>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-5xl font-black uppercase mb-8 italic underline decoration-8 underline-offset-8 decoration-blue-200">
                {item.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-8">
                  <div className="sketch-border p-6 bg-yellow-50 rotate-[-1deg]">
                    <h4 className="font-black uppercase flex items-center gap-2 mb-2">
                      <Info size={18} /> The Challenge
                    </h4>
                    <p className="text-lg leading-relaxed">{item.context}</p>
                  </div>
                  <div className="sketch-border p-6 bg-red-50 rotate-[1deg]">
                    <h4 className="font-black uppercase flex items-center gap-2 mb-2">
                      <AlertCircle size={18} /> The Problem
                    </h4>
                    <p className="text-lg leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="sketch-border p-6 bg-green-50 rotate-[-0.5deg]">
                    <h4 className="font-black uppercase flex items-center gap-2 mb-2">
                      <CheckCircle size={18} /> The Solution
                    </h4>
                    <p className="text-lg leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="aspect-[4/3] bg-white border-4 border-black border-dashed flex items-center justify-center relative shadow-inner">
                    <ImageIcon size={64} className="opacity-20" />
                    <span className="font-bold text-xs uppercase opacity-50">
                      {"[Prototype_Preview]"}
                    </span>
                  </div>
                  <button
                    className="sketch-button w-full py-4 text-xl bg-blue-600 text-white font-black hover:bg-blue-700"
                  >
                    LAUNCH LIVE MOCKUP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <MinimalFooter />
    </div>
  );

  return (
    <div
      className={`min-h-screen graph-paper balsamiq-font text-black ${!isMobile ? "cursor-none" : ""}`}
    >
      <BalsamiqStyles />

      {!isMobile && <CustomCursor />}

      <nav className="sticky top-0 z-40 bg-[#f0f0f0] border-b-4 border-black p-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="sketch-border bg-white p-1 px-3 font-bold text-xl uppercase italic">
            Alfa Zihal
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={closeView}


            className={`sketch-button text-xs font-bold ${view === "canvas" ? "bg-blue-200" : "bg-white"}`}
          >
            CANVAS VIEW
          </button>
        </div>
      </nav>

      {view === "canvas" ? (
        <main className="max-w-5xl mx-auto px-6 pt-12 pb-32">
          {/* --- HERO SECTION --- */}
          <section className="mb-24 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-block sketch-border bg-yellow-100 px-6 py-4 mb-6 rotate-[-1deg] min-h-[4rem] flex items-center relative group">
                <div className="absolute -top-3 -left-3 bg-white border-2 border-black px-2 text-[10px] font-black uppercase rotate-[-5deg] shadow-sm">
                  {"+5 years experience"}
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                  {typedText}
                  <span className="typing-cursor"></span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
                {"I focus on the logic before the pixels. I build the foundation, define flows, and create structured systems that turn complex problems into intuitive experiences."}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setView("contact")}
                  className="sketch-button py-3 px-8 text-lg bg-blue-50"
                >
                  Hire me !
                </button>
                <button
                  onClick={() => setView("resume")}
                  className="sketch-button py-3 px-8 text-lg"
                >
                  Work History
                </button>
              </div>
            </div>

            <div
              className="relative w-48 h-48 md:w-64 md:h-64 cursor-help"
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              <div
                className={`absolute inset-0 border-2 border-black border-dashed flex items-center justify-center bg-blue-50 duration-500 transition-[transform,opacity] ${isProfileHovered ? "rotate-6 translate-x-4 translate-y-4 opacity-100" : "rotate-0 opacity-0 scale-95"}`}
              >
                <Image src="Personality.png" alt="personality image" className=" w-full h-full" width={100} height={100} />
              </div>

              <div
                className={`absolute inset-0 border-2 border-black bg-gray-50 duration-500 transition-[transform,opacity,filter] ${isProfileHovered ? "-rotate-12 -translate-x-8 -translate-y-4 opacity-20 grayscale" : "rotate-2 opacity-100"}`}
              >
                <Image src="Profile.png" alt="profile image" className="object-cover w-full h-full" width={100} height={100} />
              </div>
            </div>
          </section>

          <div className="hand-drawn-line mb-20 opacity-50"></div>

          {/* REPLICATED: Methodology Section under Hero on main Canvas */}
          <MethodologySection colorClass="bg-blue-100" />

          {/* WORK SECTION */}
          <section className="relative mb-32">
            <div className="absolute -top-12 left-0 bg-blue-100 border-2 border-black p-2 px-6 rotate-[-2deg] font-bold shadow-sm z-10">
              {"SOME OF MY WORK"}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {workItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openDetail(item)}
                  onMouseEnter={() => setHoveredWorkId(item.id)}
                  onMouseLeave={() => setHoveredWorkId(null)}
                  className={`sketch-card p-6 cursor-pointer hover:translate-y-[-4px] transition-transform ${item.isEnterprise ? "enterprise-stack bg-gray-50" : "tape-effect bg-white"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center rotate-[-3deg] shadow-sm">
                        {item.isEnterprise ? (
                          <span className="font-black text-xs">
                            {item.logoInitials}
                          </span>
                        ) : item.isMobile ? (
                          <Smartphone size={18} />
                        ) : (
                          <Monitor size={18} />
                        )}
                      </div>
                      {item.isEnterprise && (
                        <div className="p-1.5 border border-black bg-white rounded-full">
                          <ShieldCheck
                            size={14}
                            className="text-blue-600"
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={`px-2 py-0.5 border border-black text-[10px] font-bold ${item.isEnterprise ? "bg-yellow-100" : "bg-gray-100"}`}
                    >
                      {item.type}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-1 uppercase tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="mb-4 opacity-75 text-sm italic">
                    {item.description}
                  </p>

                  <div className="mb-6 overflow-hidden">
                    <div className="mx-auto relative">
                      <div
                        className={`absolute inset-0 z-20 bg-blue-50/95 border-2 border-black border-dashed p-4 duration-500 transition-[transform,opacity] ${hoveredWorkId === item.id ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                      >
                        <div className="h-full flex flex-col justify-center gap-3">
                          <div className="flex items-center gap-2">
                            <Target
                              size={14}
                              className="text-blue-600"
                            />
                            <span className="text-[10px] font-black uppercase">
                              Objective:
                            </span>
                          </div>
                          <p className="text-[11px] leading-tight italic">
                            {item.overview?.goal}
                          </p>
                          <div className="flex items-center gap-2">
                            {item.isEnterprise ? (
                              <Globe
                                size={14}
                                className="text-blue-600"
                              />
                            ) : (
                              <Settings
                                size={14}
                                className="text-blue-600"
                              />
                            )}
                            <span className="text-[10px] font-black uppercase">
                              {item.isEnterprise
                                ? "Tenure Impact:"
                                : "Design Logic:"}
                            </span>
                          </div>
                          <p className="text-[11px] leading-tight italic">
                            {item.overview?.logic}
                          </p>
                          <div className="bg-white border border-black p-2 text-center rotate-2">
                            <span className="text-xs font-black uppercase">
                              {item.overview?.stat}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`mx-auto bg-white border-2 border-black p-2 relative transition-transform duration-500 ${hoveredWorkId === item.id ? "scale-95 opacity-20 blur-sm" : "scale-100"} ${!item.isEnterprise && item.isMobile ? "w-32 h-56 rounded-[20px]" : "w-full h-40 rounded-sm"}`}
                      >
                        {item.isEnterprise ? (
                          <div className="border border-black h-full bg-gray-50 flex flex-col relative overflow-hidden">
                            <div className="bg-white h-6 border-b border-black flex items-center px-2 gap-1">
                              <div className="w-2 h-1 bg-black/20"></div>
                              <div className="w-10 h-1 bg-black/20"></div>
                            </div>
                            <div className="flex-1 flex items-center justify-center opacity-10">
                              <Briefcase size={48} />
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`border border-black h-full flex flex-col ${item.isMobile ? "rounded-[15px]" : ""}`}
                          >
                            <div className="bg-gray-100 h-4 border-b border-black flex items-center px-1 gap-1">
                              <div className="w-1 h-1 rounded-full bg-black/30"></div>
                              <div className="w-1 h-1 rounded-full bg-black/30"></div>
                            </div>
                            <div className="flex-1 p-2 flex flex-col justify-center items-center">
                              <ImageIcon
                                size={24}
                                className="opacity-10"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {(item.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-200 border border-black px-2 py-0.5 text-[10px] uppercase font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase underline decoration-2 decoration-blue-500 underline-offset-4">
                      Explore {item.isEnterprise ? "Tenure" : "Study"}{" "}
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BLOG SECTION */}
          <section className="relative mt-40">
            <div className="absolute -top-12 left-0 bg-yellow-100 border-2 border-black p-2 px-6 rotate-[1.5deg] font-bold shadow-sm z-10">
              {"MY WRITTINGS"}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="sketch-card bg-white p-6 hover:rotate-1 hover:translate-y-[-2px] transition-transform group"
                >
                  <div className="flex items-center gap-2 mb-4 text-[10px] font-black opacity-40 uppercase">
                    <Clock size={12} /> {post.date}
                  </div>
                  <h4 className="text-xl font-black uppercase mb-3 leading-tight underline decoration-2 decoration-transparent group-hover:decoration-black transition-[text-decoration-color]">
                    {post.title}
                  </h4>
                  <p className="text-sm opacity-75 mb-6 italic leading-relaxed">
                    {`"${post.excerpt}"`}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-black rounded-full text-[9px] font-black uppercase tracking-tighter"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-black border-dashed">
                    <button className="text-[10px] font-black uppercase flex items-center gap-1">
                      Read Script <FileText size={12} />
                    </button>
                    <Plus size={14} className="opacity-20" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HIRE ME CALL-TO-ACTION WITH UX ILLUSTRATIONS */}
          <section className="relative mt-52 mb-20">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-100 border-2 border-black p-2 px-8 rotate-[-1deg] font-black uppercase shadow-sm z-10">
              {"Final Logic Check"}
            </div>

            <div className="sketch-card bg-white p-12 text-center relative overflow-hidden">
              {/* Decorative UX Illustrations */}
              <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-12">
                <div className="w-24 h-24 border-2 border-black bg-yellow-50 rotate-[-8deg] flex flex-col items-center justify-center p-2 shadow-sm">
                  <Search size={24} className="mb-1" />
                  <span className="text-[8px] font-black uppercase">
                    Research
                  </span>
                  <div className="w-full h-px bg-black/10 mt-2"></div>
                  <div className="w-2/3 h-px bg-black/10 mt-1"></div>
                </div>
                <div className="w-24 h-24 border-2 border-black bg-blue-50 rotate-[12deg] translate-x-4 flex flex-col items-center justify-center p-2 shadow-sm">
                  <PenTool size={24} className="mb-1" />
                  <span className="text-[8px] font-black uppercase">
                    Wireframe
                  </span>
                  <div className="grid grid-cols-2 gap-1 w-full mt-2">
                    <div className="h-4 border border-black/10"></div>
                    <div className="h-4 border border-black/10"></div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-12">
                <div className="w-24 h-24 border-2 border-black bg-green-50 rotate-[6deg] flex flex-col items-center justify-center p-2 shadow-sm">
                  <GitBranch size={24} className="mb-1" />
                  <span className="text-[8px] font-black uppercase">
                    User_Flow
                  </span>
                  <div className="flex gap-1 items-center mt-2">
                    <div className="w-2 h-2 rounded-full border border-black/20"></div>
                    <div className="w-4 h-px bg-black/20"></div>
                    <div className="w-2 h-2 rounded-full border border-black/20"></div>
                  </div>
                </div>
                <div className="w-24 h-24 border-2 border-black bg-red-50 rotate-[-10deg] -translate-x-4 flex flex-col items-center justify-center p-2 shadow-sm">
                  <Hand size={24} className="mb-1" />
                  <span className="text-[8px] font-black uppercase">
                    Usability
                  </span>
                  <div className="w-full h-2 border-2 border-black/10 rounded-full mt-2"></div>
                </div>
              </div>

              <div className="max-w-xl mx-auto py-10">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter italic">
                  Ready to start the next flow?
                </h2>
                <p className="text-lg opacity-60 mb-10 leading-relaxed font-bold">
                  {"I'm currently looking for new puzzles and complex system challenges to solve. Let's wireframe your vision together."}
                </p>
                <button
                  onClick={() => setView("contact")}
                  className="sketch-button py-5 px-12 bg-indigo-600 text-black text-xl font-black uppercase flex items-center gap-4 mx-auto group"
                >
                  Start a Project{" "}
                  <Zap size={24} className="group-hover:animate-pulse" />
                </button>
                <div className="mt-8 flex items-center justify-center gap-3 opacity-30 text-[10px] font-black uppercase">
                  <ShieldCheck size={14} /> NDA Friendly <Minus size={12} />{" "}
                  Logic-Driven Design
                </div>
              </div>
            </div>
          </section>

          <MinimalFooter />
        </main>
      ) : view === "detail" ? (
        selectedItem && <DetailView item={selectedItem} />
      ) : view === "resume" ? (
        <ResumeView />
      ) : (
        <ContactView />
      )}
    </div>
  );
}
