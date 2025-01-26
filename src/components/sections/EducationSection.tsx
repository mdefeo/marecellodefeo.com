"use client";
import ExperienceListItem from '@/components/ui/ExperienceListItem';
import educationData from '@/data/experience/educationData.json';
import ChatContainer from "@/components/chat/ChatContainer";

export default function Education() {
  return (
    <section className="relative" id="education" aria-labelledby="education-heading" role="contentinfo">
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto w-full md:gap-8">
        <article className="w-full lg:col-span-3 lg:flex lg:flex-col lg:justify-center md:mb-10 mx-auto order-2 lg:order-1">
          <article>
            <h2 className="mb-6">Education</h2>
            {educationData.map((item, index) => (
              <ExperienceListItem
                id={index}
                key={index}
                logoSrc={item.logoSrc}
                altText={item.altText}
                institutionName={item.institutionName}
                duration={item.duration}
                title={item.degree}
                location={item.location}
                description={item.description}
              />
            ))}
          </article>
        </article>
        <aside className="w-full h-full flex justify-center items-center order-1 lg:order-2 lg:col-span-2">
          <ChatContainer />
        </aside>
      </div>
    </section>
  );
}