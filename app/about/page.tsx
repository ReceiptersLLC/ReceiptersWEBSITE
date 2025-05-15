import TeamMember from "@/app/about/components/TeamMember";
import Image from "next/image";

export default function page() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-5xl font-bold mb-4">About Receipters</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          Founded by a team passionate about finance and technology, Receipters is an AI-powered expense tracking and reporting
          tool that combines cutting-edge artificial intelligence with user-focused design to deliver easy,
          accurate expense management for businesses, freelancers, and individuals alike.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-xl">
            Our mission is to simplify financial management for everyone. We believe that tracking expenses and managing finances should be
            effortless and accessible, allowing individuals and businesses to focus on what truly matters. Leveraging the power of AI,
            innovative technology and user-centric design, we strive to empower our users with clarity and control over their financial lives.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-lg">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
              <p className="leading-relaxed">
                We are constantly exploring new ways to improve financial management through the latest advancements in AI and technology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Simplicity</h3>
              <p className="leading-relaxed">
                We believe that powerful tools should also be easy to use. Our design focuses on a seamless and intuitive user experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Accuracy</h3>
              <p className="leading-relaxed">
                Our AI-powered system is built to provide highly accurate data extraction and reporting, minimizing errors and saving time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Using Receipters Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Benefits of Using Receipters</h2>
          <p className="text-gray-700 leading-relaxed text-xl mb-6">
            Receipters is designed to take the hassle out of expense tracking and reporting. Our AI-powered platform automatically extracts
            key information from receipts, categorizes expenses, and generates detailed reports, saving you valuable time and effort.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 pt-16">Our Story</h2> {/* Added pt-16 for spacing */}
          <p className="text-gray-700 leading-relaxed text-xl mb-6">
            Receipters was born out of a shared frustration with complicated and time-consuming expense tracking methods.
            We saw a need for a smarter, more intuitive solution that leveraged the power of AI to automate the process
            and provide valuable insights. Starting as a small team with a big idea, we dedicated ourselves to building a platform
            that would revolutionize how people manage their finances.
          </p>
          <p className="text-gray-700 leading-relaxed text-xl">
            From initial concept to development and launch, our journey has been driven by a passion for innovation and a commitment
            to our users. We've continuously refined our platform based on feedback, ensuring it remains at the forefront of
            expense management technology. Today, Receipters is a trusted tool for individuals and businesses looking for a
            seamless and efficient way to stay on top of their financial records.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 pt-16">Meet the Team</h2> {/* Added pt-16 for spacing */}
          <p className="text-gray-700 leading-relaxed text-lg text-center mb-12">
            We are a diverse group of individuals united by a common goal: to make financial management simple and accessible.
            Our team brings together expertise in finance, technology, design, and customer service to create a product that
            truly meets the needs of our users. Get to know the people behind Receipters.
          </p>
          {/* Placeholder for Team Member Components */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <TeamMember fullName="Gordon Odira" description="CEO"/>
            <div className="text-center">
 <img src="/assets/team-member-image.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">George Osewe</h3>
              <p className="text-gray-600">Head of Operations & Communications</p>
            </div>
            <div className="text-center">
 <img src="/assets/team-member-image.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Jeffrey Dozva</h3>
              <p className="text-gray-600">Tech Lead</p>
            </div>
            <div className="text-center">
 <img src="/assets/team-member-image.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Prof. Joshua O. Agola</h3>
              <p className="text-gray-600">Senior Advisor, Tech</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

