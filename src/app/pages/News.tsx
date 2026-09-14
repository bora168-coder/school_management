import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

// Figma Node 918:2632 Assets
import newsBento1Img from "../../assets/news/news-bento-1.png";
import newsBento2Img from "../../assets/news/news-bento-2.png";
import newsCard1Img from "../../assets/news/news-card-1.png";
import newsCard2Img from "../../assets/news/news-card-2.png";
import newsCard3Img from "../../assets/news/news-card-3.png";

export interface BentoArticle {
  id: number;
  date: string;
  title: string;
  image: string;
  gradient: string;
  colSpanClass: string;
  heightClass: string;
}

export interface NewsArticle {
  id: number;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  image: string;
}

// Bento grid items matching Figma #922:3395
const DEFAULT_BENTO_ARTICLES: BentoArticle[] = [
  {
    id: 1,
    date: "06-February-2026",
    title: "Annual Science Fair Showcases Student Innovation",
    image: newsBento1Img,
    gradient:
      "linear-gradient(180deg, rgba(102, 102, 102, 0) 20%, rgba(0, 0, 0, 0.32) 70%)",
    colSpanClass: "lg:col-span-2",
    heightClass: "h-[340px] sm:h-[420px] md:h-[500px] lg:h-[640px]",
  },
  {
    id: 2,
    date: "06-February-2026",
    title: "Annual Science Fair Showcases Student Innovation",
    image: newsBento2Img,
    gradient:
      "linear-gradient(180deg, rgba(102, 102, 102, 0) 20%, rgba(0, 0, 0, 0.32) 66%)",
    colSpanClass: "lg:col-span-1",
    heightClass: "h-[300px] sm:h-[360px] md:h-[440px] lg:h-[640px]",
  },
];

// 6 Cards matching Figma #918:2955
const DEFAULT_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    tag: "Campus Life",
    date: "06-February-2026",
    title: "Annual Science Fair Showcases Student Innovation",
    subtitle:
      "Our students continue to excel in various fields, demonstrating the core values and leadership skills fostere…",
    image: newsCard1Img,
  },
  {
    id: 2,
    tag: "Sports Event",
    date: "12-March-2026",
    title:
      "Intercollegiate Championship Brings Together Teams from Across the Region",
    subtitle:
      "Athletes displayed remarkable talent and dedication, highlighting the spirit of competition and camaraderie.",
    image: newsCard2Img,
  },
  {
    id: 3,
    tag: "Art Exhibit",
    date: "20-April-2026",
    title: "Student Artists Showcase Their Work at the Annual Art Gala",
    subtitle:
      "The event celebrated creativity, featuring diverse artworks that reflect a variety of perspectives and techniques.",
    image: newsCard3Img,
  },
  {
    id: 4,
    tag: "Guest Lecture",
    date: "15-May-2026",
    title: "Renowned Author Shares Insights on Modern Literature",
    subtitle:
      "Attendees engaged in a thought-provoking discussion about storytelling and its impact on society.",
    image: newsCard1Img,
  },
  {
    id: 5,
    tag: "Career Fair",
    date: "22-June-2026",
    title:
      "Students Connect with Leading Companies for Internship Opportunities",
    subtitle:
      "The fair provided valuable networking opportunities, helping students kickstart their professional journeys.",
    image: newsCard2Img,
  },
  {
    id: 6,
    tag: "Cultural Festival",
    date: "10-July-2026",
    title: "Celebrating Diversity through Food, Music, and Dance",
    subtitle:
      "The festival highlighted different cultures within our campus, fostering understanding and appreciation among students.",
    image: newsCard3Img,
  },
];

export interface NewsProps {
  bentoArticles?: BentoArticle[];
  articles?: NewsArticle[];
}

export function News({
  bentoArticles = DEFAULT_BENTO_ARTICLES,
  articles = DEFAULT_NEWS_ARTICLES,
}: NewsProps) {
  return (
    <div className="flex flex-col font-sora bg-white text-[#25252A] overflow-hidden pt-20 md:pt-24">
      {/* 1. Breadcrumbs (#918:2724) */}
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
          <span className="text-[#182B70] font-bold">News & Events</span>
        </nav>
      </section>

      {/* 2. Header / Title Section (#918:2634) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-6 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-tight">
            News & Events
          </h1>
          <p className="text-[#25252A] text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed lg:leading-[19px] max-w-[1208px]">
            Stay connected with the latest announcements, student achievements,
            school events, classroom stories, and community activities from Chea
            Chanto College.
          </p>
        </motion.div>
      </section>

      {/* 3. Bento Grid (#922:3395) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-8 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[1208px]">
          {bentoArticles.map((bento, idx) => (
            <motion.div
              key={bento.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative ${bento.colSpanClass} ${bento.heightClass} rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Background Image */}
              <img
                src={bento.image}
                alt={bento.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Linear Gradient Scrim */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: bento.gradient }}
              />
              {/* Overlay Content (#922:3401 / #922:3397) */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end gap-1 z-10">
                <span className="text-[11px] font-normal text-[#EEF0F7]/80 leading-none">
                  {bento.date}
                </span>
                <h2 className="text-white text-lg sm:text-xl lg:text-[20px] font-bold leading-snug drop-shadow-sm">
                  {bento.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. News Cards Grid (#918:2955) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-8 pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1208px]">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col bg-white border border-[#D8D8DA] rounded-[24px] overflow-hidden pb-6 gap-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Top Image Frame (#792:194) */}
              <div className="relative w-full h-[230px] overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay (#792:197) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.36) 21%, rgba(102, 102, 102, 0.24) 66%)",
                  }}
                />
                {/* Category Tag (#795:1084) */}
                <span className="absolute top-4 left-4 bg-[#AFD2FA] text-[#66666E] text-[11px] font-normal px-4 py-2 rounded-[16px] leading-none">
                  {article.tag}
                </span>
              </div>

              {/* Bottom Content Frame (#792:189) */}
              <div className="px-6 flex flex-col gap-2 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[#8A8A91] text-[11px] font-normal leading-tight">
                    {article.date}
                  </span>
                  <h3 className="text-[#25252A] group-hover:text-[#182B70] text-[20px] font-bold leading-snug transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
                <p className="text-[#66666E] text-[12px] font-normal leading-relaxed line-clamp-3">
                  {article.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
