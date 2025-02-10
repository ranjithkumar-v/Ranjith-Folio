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
      "Built responsive and dynamic user interfaces using React.js from Scratch, ensuring a seamless user experience across various devices and browsers.",
      "Implemented efficient state management solutions with Redux, optimizing data flow and improving application performance.",
      "Created reusable Custom components to enhance productivity and maintainability of the codebase.",
      "Utilized Ant Design (antd) components to create modern and intuitive user interfaces.",      
      "Improved site speed by 20% through code splitting and lazy loading.",
      "Increased user engagement by 30% through intuitive design and improved navigation.",
      "Collaborated closely with backend developers and designers to integrate APIs and create user-centric designs that met business requirements.",
      "Participated in agile sprints, and daily stand-ups, ensuring high-quality deliverables and efficient collaboration."
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
