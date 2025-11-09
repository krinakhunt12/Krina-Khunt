import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";

// PNG Icons for each skill
import ReactPNG from '../assets/react3d.jpg';
import NodePNG from '../assets/nodeJs.jpg';
import TailwindPNG from '../assets/tailwind.jpg';
import HTMLPNG from '../assets/html.jpg';
import CSSPNG from '../assets/css.jpg';
import JavaScriptPNG from '../assets/js.jpg';

// Define 6 skills (excluding GraphQL and Three.js)
const DEFAULT_SKILLS = ["React", "Node.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"];

// Create SkillIcons and SKILL_DESCRIPTIONS based ONLY on DEFAULT_SKILLS
const SkillIcons = {
  React: ReactPNG,
  "Node.js": NodePNG,
  "Tailwind CSS": TailwindPNG,
  HTML: HTMLPNG,
  CSS: CSSPNG,
  JavaScript: JavaScriptPNG,
};

const SKILL_DESCRIPTIONS = {
  React: "Builds composable UI with component patterns, hooks, and client state management.",
  "Node.js": "Server-side JavaScript runtime used to build APIs, CLIs and server logic.",
  "Tailwind CSS": "Utility-first CSS framework for rapid, consistent UI development.",
  HTML: "Semantic markup for accessible, well-structured content and SEO-friendly pages.",
  CSS: "Styling and layout — from responsive grid & flexbox to animations and theming.",
  JavaScript: "Language fundamentals, async patterns, DOM manipulation and modern tooling.",
};

const Skills = ({ skills = DEFAULT_SKILLS }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const items = useMemo(
    () => (skills.length ? skills : DEFAULT_SKILLS),
    [skills]
  );

  const { positions, petalSize, centerSize, radius, orbitSize } =
    useMemo(() => {
      const positions = items.map((_, i) => {
        const angle = (i / items.length) * 360;
        return { angle };
      });

      const petalSize = 64;
      const centerSize = 92;
      const n = items.length || 6;
      const minimalRadius = petalSize / (2 * Math.sin(Math.PI / n));
      const radius = Math.max(110, minimalRadius + centerSize / 2);
      const orbitSize = Math.round(radius * 2 + petalSize + 40);

      return { positions, petalSize, centerSize, radius, orbitSize };
    }, [items]);

  const handleSkillEnter = useCallback((name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSkill(name);
    }, 50);
  }, []);

  const handleSkillLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSkill(null);
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <aside className="relative flex justify-center w-full">
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 p-8 sm:p-12 rounded-3xl border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-5xl mx-auto relative overflow-hidden fade-in-scale">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-heading)] mb-3">
            Skills & Technologies
          </h3>
          <p className="text-[color:var(--color-muted)] text-lg">
            Hover over a skill to learn more
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center relative z-10">
          {/* Orbit - Desktop - Centered */}
          <div className="hidden md:block relative flex-shrink-0 mx-auto">
            <div
              className="skills-orbit-enhanced"
              style={{
                width: orbitSize,
                height: orbitSize,
                ["--orbit-radius"]: `${radius}px`,
              }}
            >
              {/* Center circle with beautiful flower design */}
              <div className="skill-center-enhanced group relative">
                {/* Animated petals effect */}
                <div className="absolute inset-0 rounded-full overflow-visible">
                  {items.map((_, idx) => {
                    const petalAngle = (idx / items.length) * 360;
                    return (
                      <div
                        key={`petal-effect-${idx}`}
                        className="absolute top-1/2 left-1/2 w-2 h-12 origin-top"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${petalAngle}deg) translateY(-60px)`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-b from-[color:var(--color-primary)]/20 to-[color:var(--color-accent)]/10 rounded-full blur-sm"></div>
                      </div>
                    );
                  })}
                </div>
                {/* Main center circle with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full opacity-25 group-hover:opacity-35 transition-opacity duration-300"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-blue-50/80 to-purple-50/60 rounded-full border-2 border-[color:var(--color-accent)]/30 shadow-inner"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-white to-transparent rounded-full"></div>
                <span className="relative z-20 font-bold text-lg text-[color:var(--color-heading)] flex items-center justify-center h-full">
                  Skills
                </span>
                {/* Rotating decorative ring - only animate when not hovering a skill */}
                {!hoveredSkill && (
                  <>
                    <div className="absolute -inset-3 border-2 border-[color:var(--color-accent)]/15 rounded-full animate-spin-slow"></div>
                    <div className="absolute -inset-1 border border-purple-300/20 rounded-full animate-spin-slow-reverse"></div>
                  </>
                )}
              </div>

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: "visible" }}
              >
                {items.map((name, idx) => {
                  const { angle } = positions[idx];
                  const centerX = orbitSize / 2;
                  const centerY = orbitSize / 2;
                  const endX =
                    centerX + Math.cos((angle * Math.PI) / 180) * radius;
                  const endY =
                    centerY + Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <line
                      key={`line-${idx}`}
                      x1={centerX}
                      y1={centerY}
                      x2={endX}
                      y2={endY}
                      stroke="rgba(23, 162, 184, 0.1)"
                      strokeWidth="1"
                      className="transition-opacity duration-300"
                      style={{
                        opacity: hoveredSkill === name ? 0.3 : 0.1,
                      }}
                    />
                  );
                })}
              </svg>

               {/* Skill petals with PNG icons */}
               {items.map((name, idx) => {
                 const { angle } = positions[idx];
                 const isHovered = hoveredSkill === name;
                 const baseTransform = `translate(-50%, -50%) rotate(${angle}deg) translate(var(--orbit-radius)) rotate(-${angle}deg)`;
                 const scale = isHovered ? 1.2 : 1;
                 const transform = `${baseTransform} scale(${scale})`;
                 return (
                   <button
                     key={name}
                     className={`skill-petal-enhanced ${
                       isHovered ? "skill-petal-active" : ""
                     } group`}
                     style={{
                       left: "50%",
                       top: "50%",
                       transform,
                       transition:
                         "transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out, background 200ms ease-out",
                     }}
                     onMouseEnter={() => handleSkillEnter(name)}
                     onMouseLeave={handleSkillLeave}
                     onFocus={() => handleSkillEnter(name)}
                     onBlur={handleSkillLeave}
                     aria-label={`Learn more about ${name}`}
                   >
                     <div className="skill-icon-wrapper relative w-full h-full flex items-center justify-center">
                       {SkillIcons[name] && (
                         <div className="skill-icon-jpg skill-icon-animated">
                           <img 
                             src={SkillIcons[name]} 
                             alt={name}
                             className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300"
                           />
                         </div>
                       )}
                       {/* Skill name tooltip on hover */}
                       <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-[color:var(--color-primary)] text-white text-xs font-semibold rounded-md whitespace-nowrap pointer-events-none z-50 shadow-lg transition-all duration-200 ${
                         isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                       }`}>
                         {name}
                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-[color:var(--color-primary)] rotate-45"></div>
                       </div>
                     </div>
                   </button>
                 );
               })}
            </div>
          </div>
          {/* Right Side Detail Box (Desktop) */}
          <div className="hidden lg:block flex-1 w-full min-h-[280px] transition-all duration-300">
            <div className="skill-side-box-enhanced relative">
              {hoveredSkill ? (
                <div className="skill-detail-content">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]
            to-[color:var(--color-accent)] flex items-center justify-center text-white font-bold text-2xl shadow-xl"
                      >
                        {SkillIcons[hoveredSkill] ? (
                          <div className="w-10 h-10 flex items-center justify-center skill-icon-animated">
                            <img 
                              src={SkillIcons[hoveredSkill]} 
                              alt={hoveredSkill}
                              className="w-8 h-8 object-contain transition-all duration-300 hover:scale-110 hover:rotate-12"
                            />
                          </div>
                        ) : (
                          hoveredSkill.charAt(0)
                        )}
                      </div>
                      <div
                        className="absolute -inset-3 bg-gradient-to-br from-[color:var(--color-primary)]/40
            to-[color:var(--color-accent)]/30 rounded-2xl blur-2xl -z-10"
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-3xl text-[color:var(--color-heading)] mb-2">
                        {hoveredSkill}
                      </h4>
                      <div
                        className="w-20 h-1.5 bg-gradient-to-br from-[color:var(--color-primary)]
            to-[color:var(--color-accent)] rounded-full"
                      ></div>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/40
        rounded-xl p-5 border border-blue-100/50 shadow-sm backdrop-blur-sm"
                  >
                    <p className="text-base text-[color:var(--color-muted)] leading-relaxed">
                      {SKILL_DESCRIPTIONS[hoveredSkill] ||
                        "Expert-level proficiency in this technology with extensive practical usage."}
                    </p>
                  </div>
                </div>
              ) : (
                /* Placeholder when no skill hovered */
                <div className="skill-placeholder-content text-center py-16">
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br
          from-[color:var(--color-primary)]/20 to-[color:var(--color-accent)]/15 blur-xl"
                    ></div>
                    <div
                      className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-50
          to-[color:var(--color-accent)]/10 flex items-center justify-center shadow-xl border-2
          border-[color:var(--color-primary)]/20"
                    >
                      <svg
                        className="w-14 h-14 text-[color:var(--color-accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[color:var(--color-muted)] text-xl font-semibold mb-2">
                    Select a skill to learn more
                  </p>
                  <p className="text-[color:var(--color-muted)] text-sm">
                    Hover over any skill badge to see details
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Old side detail box - removed for desktop, kept for mobile */}
          <div className="lg:hidden flex-1 w-full min-h-[280px] flex items-center">
            <div
              className={`w-full skill-side-box-enhanced transition-all duration-500 ease-out ${
                hoveredSkill
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              }`}
            >
              {hoveredSkill ? (
                <div className="skill-detail-content">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                        {SkillIcons[hoveredSkill] ? (
                          <div className="w-10 h-10 flex items-center justify-center skill-icon-animated">
                            <img 
                              src={SkillIcons[hoveredSkill]} 
                              alt={hoveredSkill}
                              className="w-8 h-8 object-contain transition-all duration-300"
                            />
                          </div>
                        ) : (
                          hoveredSkill.charAt(0)
                        )}
                      </div>
                      <div className="absolute -inset-3 bg-gradient-to-br from-[color:var(--color-primary)]/40 to-[color:var(--color-accent)]/30 rounded-2xl blur-2xl -z-10"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-3xl text-[color:var(--color-heading)] mb-2">
                        {hoveredSkill}
                      </h4>
                      <div className="w-20 h-1.5 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/40 rounded-xl p-5 border border-blue-100/50 shadow-sm backdrop-blur-sm">
                    <p className="text-base text-[color:var(--color-muted)] leading-relaxed">
                      {SKILL_DESCRIPTIONS[hoveredSkill] ||
                        "Expert-level proficiency in this technology with extensive hands-on experience and practical applications."}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="skill-placeholder-content text-center py-16">
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]/20 to-[color:var(--color-accent)]/15 blur-xl"></div>
                    <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-50 to-[color:var(--color-accent)]/10 flex items-center justify-center shadow-xl border-2 border-[color:var(--color-primary)]/20">
                      <svg
                        className="w-14 h-14 text-[color:var(--color-accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[color:var(--color-muted)] text-xl font-semibold mb-2">
                    Select a skill to learn more
                  </p>
                  <p className="text-[color:var(--color-muted)] text-sm">
                    Hover over any skill badge to see details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile fallback - Enhanced with PNG icons */}
        <div className="md:hidden mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {items.map((name, idx) => (
            <button
              key={name}
              onClick={() =>
                setHoveredSkill(hoveredSkill === name ? null : name)
              }
              className={`skill-chip-enhanced hover-scale hover-lift transition-all duration-300 fade-in-scale group ${
                hoveredSkill === name ? "skill-chip-active" : ""
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center justify-center gap-2">
                {SkillIcons[name] && (
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center skill-icon-animated">
                    <img 
                      src={SkillIcons[name]} 
                      alt={name}
                      className="w-4 h-4 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-125"
                    />
                  </div>
                )}
                <span className="truncate">{name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile description */}
        {hoveredSkill && (
          <div className="md:hidden mt-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg fade-in">
            <div className="flex items-center gap-3 mb-3">
              {SkillIcons[hoveredSkill] && (
                <div className="w-10 h-10 flex items-center justify-center skill-icon-animated">
                  <img 
                    src={SkillIcons[hoveredSkill]} 
                    alt={hoveredSkill}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )}
              <h4 className="font-bold text-xl text-[color:var(--color-heading)]">
                {hoveredSkill}
              </h4>
            </div>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
              {SKILL_DESCRIPTIONS[hoveredSkill] ||
                "Expert-level proficiency in this technology."}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Skills;