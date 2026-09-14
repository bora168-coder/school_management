import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

// Admission SVG Icons (Figma Node 816:581)
import iconGraduate from "../../assets/admission/icon-graduate.svg";
import iconUsers from "../../assets/admission/icon-users.svg";
import iconBook from "../../assets/admission/icon-book.svg";
import iconHeadGear from "../../assets/admission/icon-head-gear.svg";
import iconCardChecklist from "../../assets/admission/icon-card-checklist.svg";
import iconFamily from "../../assets/admission/icon-family-restroom.svg";
import iconQuestion from "../../assets/admission/icon-question-circle.svg";

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const whyChooseItems = [
  {
    icon: iconGraduate,
    title: "A Fully Funded, High-Quality Education",
    desc: "Selected students receive full tuition scholarships and access to an ambitious academic programme designed to prepare them for further education and meaningful careers.",
  },
  {
    icon: iconUsers,
    title: "A Student-Centred Campus",
    desc: "Students are known, supported, and encouraged. The school pays close attention to academic progress, wellbeing, confidence, character, and leadership.",
  },
  {
    icon: iconBook,
    title: "A Rigorous Dual Curriculum",
    desc: "The Cambodian National Curriculum and International programmes provide both strong national foundations and an international academic perspective.",
  },
  {
    icon: iconHeadGear,
    title: "Growth Beyond Academics",
    desc: "Clubs, mentoring, service, sport, creative activities, and career guidance help students discover their strengths and develop the habits needed for adult life.",
  },
];

const applicationSteps = [
  {
    number: 1,
    title: "Complete the application form",
    desc: "Submit either a paper form or the online form available through the application link or QR code.",
  },
  {
    number: 2,
    title: "Prepare the required documents",
    desc: "birth certificate (original or a copy certified by the commune chief or district governor); four recent 4 × 6 cm photographs with a blue background and no glasses; residence book; copies of each parent’s identification card; and family record book.",
  },
  {
    number: 3,
    title: "Submit the complete application",
    desc: "Submit the complete application before the deadline. Incomplete applications may not be considered.",
  },
  {
    number: 4,
    title: "Attend an interview if invited",
    desc: "Attend an interview if invited. Interviews may take place while applications are still open.",
  },
  {
    number: 5,
    title: "Receive the admissions decision",
    desc: "Receive the admissions decision on the published release date.",
  },
];

const timelineMilestones = [
  { date: "1 April", milestone: "Applications open" },
  { date: "15 May", milestone: "Applications close" },
  { date: "April-May", milestone: "Interviews take place on a rolling basis" },
  { date: "31 July", milestone: "Admissions decisions released" },
];

const scholarshipItems = [
  {
    icon: iconGraduate,
    title: "A 100% Tuition Scholarship for Every Selected Student",
    desc: "CCC believes that financial circumstances should not prevent a talented student from receiving an excellent education. All selected students receive a scholarship that covers 100% of tuition fees, along with academic support and full access to the school’s learning facilities and resources.",
  },
  {
    icon: iconCardChecklist,
    title: "Selection Criteria",
    desc: "Scholarships are awarded with consideration for the applicant’s geographic and family background, academic potential, motivation, and commitment to learning.",
  },
  {
    icon: iconFamily,
    title: "Family Contributions",
    desc: "Families share responsibility for selected day-to-day costs, including study materials, books, meals, and school uniforms. The school should provide families with clear, current information about these costs before enrolment.",
  },
];

const faqData = [
  {
    q: "Who can apply CCC?",
    a: "Eligible Grade 9 students from public schools in Santuk District who intend to continue in the science track in Grade 10 may apply. The school should publish any additional eligibility rules for each admissions cycle.",
  },
  {
    q: "Does every admitted student receive a scholarship?",
    a: "All selected students receive a scholarship that covers 100% of tuition fees, along with academic support and full access to the school’s learning facilities and resources.",
  },
  {
    q: "What costs are families responsible for?",
    a: "Families are currently expected to contribute toward study materials, books, meals, and school uniforms. Applicants should consult the latest admissions information for exact costs.",
  },
  {
    q: "What curriculum does CCC offer?",
    a: "The Cambodian National Curriculum and International programmes provide both strong national foundations and an international academic perspective.",
  },
  {
    q: "How do I apply?",
    a: "Submit either a paper form or the online form available through the application link or QR code before the published deadline.",
  },
  {
    q: "When will I receive a decision?",
    a: "Receive the admissions decision on the published release date (indicatively 31 July) following the evaluation and interview stages.",
  },
  {
    q: "Where can I ask for help?",
    a: "Applicants and families can contact the school admissions office or visit the campus for guidance, paper application forms, or questions regarding the admissions process.",
  },
];

export function Admission() {
  // Matches Figma #833:875 where item 2 ("What costs are families responsible for?") is expanded by default
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  return (
    <div className="flex flex-col font-sora bg-white text-[#25252A] overflow-hidden pt-20 md:pt-24">
      {/* 1. Breadcrumbs (#816:690) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-8 pb-0">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1 text-[12px] leading-[15px]"
        >
          <Link
            to="/home"
            className="text-[#66666E] font-normal hover:text-[#182B70] transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-[#66666E] shrink-0" />
          <span className="text-[#182B70] font-bold">Admission</span>
        </nav>
      </section>

      {/* 2. Why Chea Chanto College? (#816:582) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-6 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            Why Chea Chanto College?
          </h1>
          <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px] max-w-[1208px]">
            Talent should never be limited by circumstance. CCC gives promising
            students from underserved communities access to a fully funded
            education that combines academic challenge, global perspective,
            personal growth, and practical preparation for the future. More than
            a school, CCC is a community that sees potential, nurtures it, and
            expects students to use it with purpose.
          </p>
        </motion.div>

        {/* 4 List items (#816:813) */}
        <div className="mt-8 space-y-8">
          {whyChooseItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="space-y-4 pr-0 lg:pr-12"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={item.icon}
                  alt=""
                  className="w-8 h-8 shrink-0 object-contain"
                />
                <h2 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
                  {item.title}
                </h2>
              </div>
              <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Application Process (#816:610) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-24 lg:pt-32 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            Application Process
          </h2>
          <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px] max-w-[1208px]">
            Applications are open to eligible Grade 9 students in Santuk
            District who plan to continue in the science track in Grade 10.
            Students and families can follow the steps below.
          </p>
        </motion.div>

        {/* 5 Steps (#816:612) */}
        <div className="mt-8 space-y-6">
          {applicationSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#25252A] text-white flex items-center justify-center font-bold text-[15px] leading-none shrink-0">
                  {step.number}
                </div>
                <h3 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
                  {step.title}
                </h3>
              </div>
              <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Indicative Application Timeline Table (#821:843) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 space-y-4"
        >
          <h3 className="text-[#25252A] text-lg sm:text-xl lg:text-[20px] font-bold leading-snug lg:leading-[25px]">
            Indicative Application Timeline
          </h3>

          <div className="w-full rounded-2xl border border-[#D8D8DA] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#25252A] text-white">
                  <th className="py-4 px-6 font-normal text-sm md:text-[15px] leading-[19px] w-1/2">
                    Date
                  </th>
                  <th className="py-4 px-6 font-normal text-sm md:text-[15px] leading-[19px] w-1/2">
                    Milestone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8D8DA] bg-white">
                {timelineMilestones.map((item) => (
                  <tr
                    key={item.milestone}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm md:text-[15px] leading-[19px] text-[#25252A]">
                      {item.date}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-[15px] leading-[19px] text-[#25252A]">
                      {item.milestone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Timeline Note (#821:928) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 pt-1 text-sm md:text-[15px] leading-[19px]">
            <span className="font-bold text-[#DC2626] shrink-0">
              TIMELINE NOTE :
            </span>
            <span className="text-[#25252A]">
              Dates may change from year to year. Applicants should check this
              page or contact the school for the current admissions schedule.
            </span>
          </div>
        </motion.div>

        {/* Apply Now Button (#821:937) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="pt-8"
        >
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 bg-[#182B70] text-white px-6 py-3 rounded-full text-base font-normal leading-[20px] hover:bg-[#122055] transition-colors shadow-sm"
          >
            <span>Apply Now</span>
            <ChevronRight size={20} className="text-white" />
          </a>
        </motion.div>
      </section>

      {/* 4. Scholarships (#825:1594) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-24 lg:pt-32 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            Scholarships
          </h2>
        </motion.div>

        {/* 3 List items (#825:1598) */}
        <div className="mt-4 md:mt-6 space-y-8">
          {scholarshipItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="space-y-4 pr-0 lg:pr-12"
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
              <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Frequently Asked Questions (#829:709) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-24 lg:pt-32 pb-32 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <h2 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            Frequently Asked Questions
          </h2>
          <img
            src={iconQuestion}
            alt=""
            className="w-8 h-8 shrink-0 object-contain"
          />
        </motion.div>

        {/* FAQ Accordion Card (#833:872) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-[#D8D8DA] p-4 sm:p-6"
        >
          <div className="divide-y divide-[#D8D8DA]">
            {faqData.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className="py-2">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left group transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "text-sm sm:text-[15px] leading-snug lg:leading-[19px] pr-4 transition-colors font-normal",
                        isOpen
                          ? "text-[#182B70] font-medium"
                          : "text-[#25252A] group-hover:text-[#182B70]",
                      )}
                    >
                      {item.q}
                    </span>
                    <ChevronRight
                      className={cn(
                        "w-5 h-5 sm:w-6 sm:h-6 text-[#25252A] shrink-0 transition-transform duration-300",
                        isOpen && "rotate-90 text-[#182B70]",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pt-1 pr-6 lg:pr-12 text-[#66666E] text-sm sm:text-[15px] leading-relaxed lg:leading-[19px]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
