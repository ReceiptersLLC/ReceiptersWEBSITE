import Image from "next/image";

interface TeamMemberProps {
  fullName: string,
  description: string,
}

export default function TeamMember({
                                     fullName,
                                     description
                                   }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="w-64 h-80 relative rounded-xl overflow-hidden mx-auto mb-4">
        <Image
          src="https://images.pexels.com/photos/6786908/pexels-photo-6786908.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Julia Bluebird"
          className="object-cover"
          layout="fill"
        />
      </div>
      <h4 className="font-semibold text-lg">{fullName}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
