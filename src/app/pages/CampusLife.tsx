import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

// Campus Life Assets (Figma Node 833-932)
import clubDefaultImg from "../../assets/campus-life/club-default.png";

// SVG Icons
import iconGraduate from "../../assets/campus-life/icon-graduate.svg";
import iconCardChecklist from "../../assets/campus-life/icon-card-checklist.svg";
import iconFamilyRestroom from "../../assets/campus-life/icon-family-restroom.svg";
import iconHeadGear from "../../assets/campus-life/icon-head-gear.svg";
import iconBook from "../../assets/campus-life/icon-book.svg";
import iconBlueprintPap from "../../assets/campus-life/icon-blueprint-pap.svg";

// Schedule Data (#837:1273)
const dailySchedule = [
  { time: "Before 7:00 AM", activity: "Students arrive on campus open" },
  { time: "7:10-7:30 AM", activity: "DEAR Time" },
  { time: "7:30 AM", activity: "Classes begin" },
  { time: "7:30-11:30 AM", activity: "Morning classes" },
  { time: "11:30 AM-1:00 PM", activity: "Lunch break" },
  { time: "1:00-4:00 PM", activity: "Afternoon classes" },
  {
    time: "After 4:00 PM",
    activity: "Tutoring, office hours, clubs, sport, and enrichment activities",
  },
];

// Campus Highlights Data (#833:960)
const campusHighlights = [
  {
    icon: iconGraduate,
    title: "Modern Learning Spaces",
    desc: "Purpose-built classrooms for focused study, collaboration, and active learning.",
  },
  {
    icon: iconCardChecklist,
    title: "Science & Innovation Laboratories",
    desc: "Hands-on spaces for inquiry, experimentation, and discovery.",
  },
  {
    icon: iconFamilyRestroom,
    title: "Library & Learning Resource Centre",
    desc: "A calm, well-resourced setting for reading, research, and independent study.",
  },
  {
    icon: iconFamilyRestroom,
    title: "Student Commons & Collaboration Areas",
    desc: "Shared spaces where students can exchange ideas, work together, and build community.",
  },
  {
    icon: iconFamilyRestroom,
    title: "Health Centre & Canteen",
    desc: "Essential services that support student health, comfort, and daily wellbeing.",
  },
];

// Student Activities & Clubs (#917:2275)
const studentClubs = [
  {
    icon: iconHeadGear,
    title: "Speech & Debate Club — Find your voice. Sharpen your thinking.",
    desc: "Students practise public speaking, research, and structured argument. The club builds confidence, critical thinking, and persuasive communication, and offers a pathway for students interested in Model United Nations.",
  },
  {
    icon: iconBook,
    title:
      "Reading & English Conversation Club — Read widely. Speak with confidence.",
    desc: "Students read fiction and non-fiction, build vocabulary, and discuss ideas in English. Guided discussion and presentations help them develop clear, fluent expression.",
  },
  {
    icon: iconBlueprintPap,
    title: "English Music Club — Where language meets creativity and culture.",
    desc: "Students explore music in English as a way to strengthen listening, interpret lyrics, discover new cultures, and understand how stories and ideas are expressed through sound.",
  },
  {
    icon: iconBlueprintPap,
    title: "Student Entrepreneurship Club — Where ideas become action.",
    desc: "Students investigate local markets, ethical business, and entrepreneurship through projects, field visits, guest speakers, and group problem-solving. They learn how ideas, resources, and supply chains work in the real world.",
  },
  {
    icon: iconBlueprintPap,
    title: "Robotics Club — Build, test, and imagine.",
    desc: "Students explore electronics, coding, and engineering through hands-on projects using tools such as Arduino. Working in teams, they design, build, troubleshoot, and learn from each attempt.",
  },
  {
    icon: iconBlueprintPap,
    title: "Game Design Club — From player to designer.",
    desc: "Students look beyond gameplay to understand concept development, mechanics, storytelling, and production. They work together to design original games while building creativity, logic, and collaboration.",
  },
  {
    icon: iconBlueprintPap,
    title: "Media Club — Tell stories through photography and film.",
    desc: "Students learn visual storytelling, from framing and composition to filming and editing. They develop technical skills and use images and film to communicate ideas with purpose.",
  },
  {
    icon: iconBlueprintPap,
    title: "Creative Writing Club — Where stories come to life.",
    desc: "Students experiment with poetry, short fiction, creative nonfiction, and scripts. Prompts, workshops, and peer feedback help them strengthen craft, originality, and voice.",
  },
  {
    icon: iconBlueprintPap,
    title: "Performing Arts Club — Culture, movement, and creativity on stage.",
    desc: "Through singing, dance, and traditional Khmer performance, students build confidence, discipline, stage presence, and appreciation for the stories carried through the arts.",
  },
  {
    icon: iconBlueprintPap,
    title: "Movie Club — Watch closely. Think deeply.",
    desc: "Students view carefully selected films from different genres and cultures, then take part in guided discussions and reflective activities that connect cinematic stories with wider ideas.",
  },
  {
    icon: iconBlueprintPap,
    title: "Sports Club — Teamwork, discipline, and school spirit in motion.",
    desc: "Football, volleyball, and badminton offer students structured opportunities to stay active, improve skills, compete, and develop resilience and teamwork.",
  },
  {
    icon: iconBlueprintPap,
    title: "Tutoring Club — Knowledge grows when it is shared.",
    desc: "Students who are strong in particular subjects support peers through structured tutoring. Tutors deepen their own understanding while developing patience, leadership, and communication.",
  },
  {
    icon: iconBlueprintPap,
    title: "Student Community Service — Responsibility and care in action.",
    desc: "Students contribute to the school through shared responsibilities and service activities. Working together helps them develop accountability, respect, teamwork, and pride in their community.",
  },
];

// College & Career Readiness (#918:2569)
const readinessItems = [
  {
    title: "Parent Engagement & Partnership",
    desc: "Parents and guardians are valued partners in each student’s education. CCC maintains open communication, shares important information, and encourages families to stay involved while students learn to take ownership of their progress.",
  },
  {
    title: "School-Community Collaboration",
    desc: "CCC works with families, local leaders, and community stakeholders through meetings, events, and joint initiatives that strengthen trust, cooperation, and long-term impact.",
  },
  {
    title: "Cultural & Community Events",
    desc: "Family Day, school celebrations, and cultural activities create opportunities for connection and help sustain the values shared across the CCC community.",
  },
  {
    title: "Student Leadership, Service & Volunteering",
    desc: "Students take part in structured service and student-led initiatives that build empathy, responsibility, teamwork, and the belief that leadership begins with contribution.",
  },
  {
    title: "Student Gardening Programme",
    desc: "Through supervised gardening, students develop practical skills, care for their environment, and learn about sustainability, patience, responsibility, and teamwork.",
  },
  {
    title: "Learning Beyond the Classroom",
    desc: "Service and community engagement help students understand the effect of their choices and the value of contributing to something larger than themselves.",
  },
];

export function CampusLife() {
  return (
    <div className="flex flex-col bg-white text-[#25252A] overflow-hidden pt-20 md:pt-24">
      {/* 1. Breadcrumbs (#833:1051) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-4 pb-2">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-[#66666E]"
        >
          <Link
            to="/home"
            className="hover:text-[#182B70] transition-colors font-normal"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-[#66666E]" />
          <span className="text-[#182B70] font-bold">Campus Life</span>
        </nav>
      </section>

      {/* 2. Life at Chea Chanto College (#833:933) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-8 md:pt-12 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            Life at Chea Chanto College
          </h1>
          <div className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[22px] max-w-[1208px] space-y-3">
            <p>
              A day at CCC is carefully structured, but never one-dimensional.
              Students move through a full academic programme, then have time
              for tutoring, clubs, sport, creative work, and other enrichment
              activities. The rhythm of the day builds focus and discipline
              while leaving room for curiosity, friendship, and personal growth.
            </p>
            <p>
              Just as important is the culture around that schedule. CCC is a
              place where students can ask questions, test ideas, make mistakes,
              and challenge themselves within a community that believes in their
              potential.
            </p>
          </div>
        </motion.div>

        {/* Schedule Sub-block (#837:1264) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          <h2 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
            A Typical School Day
          </h2>

          <div className="w-full max-w-[1120px] rounded-2xl border border-[#D8D8DA] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#25252A] text-white">
                  <th className="py-4 px-6 font-normal text-sm md:text-[15px] leading-[19px] w-1/2">
                    Time
                  </th>
                  <th className="py-4 px-6 font-normal text-sm md:text-[15px] leading-[19px] w-1/2">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8D8DA] bg-white">
                {dailySchedule.map((item) => (
                  <tr
                    key={item.time}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm md:text-[15px] leading-[19px] text-[#25252A]">
                      {item.time}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-[15px] leading-[19px] text-[#25252A]">
                      {item.activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Office Hours Sub-block (#837:1342) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-2"
        >
          <h2 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px] uppercase">
            OFFICE HOURS
          </h2>
          <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
            Students can meet teachers for additional guidance and academic
            support outside regular class time.
          </p>
        </motion.div>
      </section>

      {/* 3. Campus Highlights (#833:958) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-16 md:pt-24 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            Campus Highlights
          </h2>
          <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[22px] max-w-[1208px]">
            Every part of the CCC campus is designed to support learning,
            connection, and wellbeing. From laboratories and classrooms to open
            communal spaces and quiet places to study, students learn in an
            environment that respects their ambitions and gives them room to
            grow.
          </p>
        </motion.div>

        {/* Highlights Items (#833:960) */}
        <div className="mt-8 space-y-8">
          {campusHighlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="space-y-4 max-w-[1208px]"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={item.icon}
                  alt=""
                  className="w-8 h-8 shrink-0 object-contain"
                />
                <h3 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#66666E] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Student Activities & Clubs (#917:2271) */}
      <section className="w-full bg-brand-cream py-16 md:py-20 mt-16 md:mt-24">
        <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
              Student Activities & Clubs
            </h2>
            <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[22px] max-w-[1208px]">
              Clubs and activities give students the freedom to explore
              interests, practise new skills, and take on responsibility. The
              programme evolves with student interests and school capacity,
              spanning academic enrichment, English, technology, business,
              sport, creative arts, mentoring, and service. Activities take
              place after the school day and are structured to support balance,
              discipline, teamwork, and personal growth.
            </p>
          </motion.div>

          {/* 3-Column Grid of Clubs (#917:2275) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-12">
            {studentClubs.map((club, idx) => (
              <motion.div
                key={club.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                className="flex flex-col group"
              >
                <div className="w-full aspect-[380/240] max-h-[240px] rounded-[24px] overflow-hidden bg-gray-200 shadow-sm">
                  <img
                    src={clubDefaultImg}
                    alt={club.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6 flex flex-col gap-2">
                  <div className="flex items-start gap-4">
                    <img
                      src={club.icon}
                      alt=""
                      className="w-8 h-8 shrink-0 mt-0.5 object-contain"
                    />
                    <h3 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
                      {club.title}
                    </h3>
                  </div>
                  <p className="text-[#66666E] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
                    {club.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. College & Career Readiness (#918:2569) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-16 md:py-24 pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight mb-8">
            College & Career Readiness
          </h2>
        </motion.div>

        <div className="space-y-6">
          {readinessItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="space-y-2 max-w-[1208px]"
            >
              <h3 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
                {item.title}
              </h3>
              <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
