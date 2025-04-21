import TeamMember from "@/app/about/components/TeamMember";
import Image from "next/image";

export default function page() {
  return (
    <div className="font-sans text-gray-800">
      {/* Meet the team header */}
      <section className="text-center py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-4">Meet the team.</h2>
        <p className="max-w-xl mx-auto text-base text-gray-600">
          Founded by a finance and tech-driven team, Receipters combines AI with user-focused design to deliver easy,
          accurate expense management for businesses, freelancers, and individuals alike.
        </p>
      </section>

      {/* Our values section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="text-center mb-8">
          <p className="text-sm uppercase mb-2">Meet our team</p>
          <h3 className="text-4xl font-bold">This is us!</h3>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="relative w-full md:w-1/2">
            <Image
              src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb823d_pexels-karolina-grabowska-7876739%20(1).jpg"
              alt="Team working"
              className="rounded-xl w-full object-cover"
              layout="fill"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-xl font-semibold mb-4">Our values.</h4>
            <p className="text-gray-300 leading-relaxed">
              We prioritize innovation, user-focused design, and transparency to make financial management as effortless
              and reliable as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team members */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">We are all about the people.</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <TeamMember fullName="Gordon Odira" description="CEO"/>
          <TeamMember fullName="George Osewe" description="Head of Operations & Communications"/>
          <TeamMember fullName="Jeffrey Dozva" description="Tech"/>
          <TeamMember fullName="Prof. Joshua O. Agola" description="Tech"/>
        </div>
      </section>
    </div>
  )
}
