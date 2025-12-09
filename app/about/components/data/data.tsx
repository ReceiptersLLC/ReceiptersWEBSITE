export interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Gordon Odira",
    title: "CEO and Founder",
    image: "/assets/gordon.jpg",
    description: "A senior Integration Engineer with over 8 years in federal, state, and private tech deployments. Holds a BSc in Electrical and Computer Engineering from Rutgers University and a Master's in Electrical and Computer Engineering from NJIT."
  },
  {
    name: "George Osewe",
    title: "Senior Consultant, Business Development Director and Communications",
    image: "/assets/george.jpg",
    description: "A government and policy expert who was part of Kenya's constitutional transition team in 2010. Specializes in restructuring business operations. Holds a degree in Development Communication."
  },
  {
    name: "Joffrey Dozva",
    title: "Senior Engineer and Technical Lead",
    image: "/assets/jeffrey.jpg",
    description: "Lead developer of Receipters core systems. Has built hundreds of mobile apps and led health tech deployments across Africa. Graduate of Kenya Aeronautical College in Software Engineering."
  },
  {
    name: "John Obura",
    title: "CTO and Principal Architect",
    image: "/assets/prof.jpg",
    description: "A seasoned technology leader with a background in software architecture and systems design. He has a deep understanding of cloud computing, security protocols, and scalable solutions."
  },
  {
    name: "Joseph Orinda",
    title: "Chief Operations Officer",
    image: "/assets/Joseph.jpg",
    description: "A seasoned operations leader with a track record of transforming business processes and driving sustained growth. As Chief Operations Officer."
  }
];