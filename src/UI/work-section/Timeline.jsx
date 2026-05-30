import Title from "../../Animate/Title";
import TimelineItem from "./TimelineItem";
import novacLogo from "../../assets/Images/novacLogo.jpg";
const TimelineData = [
  {
    companyImg: novacLogo,
    jobTitle: "Frontend Developer",
    company: "Novac Technology Solutions",
    jobType: "Full Time",
    duration: "2023 - Present",
    stuffIDid: [
      "Built and maintained a B2B platform used by thousands of insurance agents to manage end-to-end proposal submissions, policy renewals, and client portfolios, serving as the primary frontend engineer across the full product lifecycle.",
      "Architected a dynamic multi-step proposal system in React with conditional flows and validation, improving completion rates by 25% and reducing drop-offs by 18%.",
      "Engineered Redux based state management across the platform to centralize session data, cutting redundant API calls by 40% and eliminating data inconsistency bugs across modules.",
      "Developed a reusable component library (forms, tables, modals) using Ant Design, accelerating feature delivery by 30% and ensuring design consistency.",
      "Integrated 50+ RESTful APIs covering proposal lifecycle, policy management, retry logic, and centralized error handling, improving reliability of critical business workflows.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment, participating in sprint planning, daily standups, and retrospectives to deliver features.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
