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
      "Developed a dynamic and responsive UI from scratch using React.js, ensuring 99% cross browser compatibility and optimal performance across all devices.",
      "Implemented Redux-based state management to optimize data flow, reducing API calls by 40%, improving data processing speed, and enhancing the overall user experience.",
      "Designed and developed over 10 reusable custom components, enhancing development efficiency by 30% and improving code maintainability",
      "Integrated Ant Design (Antd) components to enhance UI consistency, resulting in a 25% improvement in user satisfaction based on feedback",
      "Boosted site performance by 60% through code splitting, lazy loading, and optimization techniques.",
      "Increased user engagement by 30% through intuitive design and improved navigation.",
      "Collaborated with backend developers and designers to deliver API integrated, user-focused features that boosted workflow efficiency by 25% .",
      "Worked closely  with the designers team to create a pixel-perfect UI, ensuring the best user experience and brand consistency.",
      "Participated in agile sprints, and daily stand-ups, ensuring high-quality deliverables and efficient collaboration.",
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
