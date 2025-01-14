import { Button } from "@/components/ui/button";
import { Mail, Briefcase, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ShieldCheck, Code, Server } from 'lucide-react';
import { FaUniversity, FaLaptopCode, FaBriefcase, FaPaintBrush, FaCode } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import Image from 'next/image';



// components/Hero.js
export default function Hero() {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        </div>
      </nav>
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Hi🙋‍♂️, I&apos;m<span className="text-gray-800"> Rizky Ferdian Prasetyo</span>

            </h1>

            <p className="mt-4 text-gray-600 md:text-lg">
              An Informatics graduate passionate about Cybersecurity, Software Development, and Technology Writing.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Button>
                <Briefcase /><a href="#portfolio">View my work</a>
              </Button>
              <Button variant="outline">
                <Mail />
                <a href="mailto:rizkyferdianprasetyo@gmail.com">Contact Me</a>
              </Button>
            </div>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/rizkyferdian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/0895339642658"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rizky-ferdian-04/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex ml-44 justify-center">
            <Image
              src="/image_profile.jpg"
              alt="Rizky Ferdian Prasetyo"
              className="w-72 h-72 rounded-full object-cover shadow-lg"
              width={288} // Gantilah dengan ukuran yang sesuai
              height={288} // Gantilah dengan ukuran yang sesuai
            />
          </div>
        </div>
      </section>


      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-12 ">
          What I Do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-left">
            <div className="mb-6 text-gray-900">
              <ShieldCheck size={42} />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Cybersecurity
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Blue Team Defense & Incident Response
            </p>
            <p className="text-gray-600 mb-6">
              Safeguarding digital assets and defending against cyber threats is my top priority. As part of the Blue Team, I specialize in monitoring, detecting, and responding to security incidents, ensuring your infrastructure stays secure from evolving threats.
            </p>

          </div>
          <div className="text-left">
            <div className="mb-6 text-gray-900">
              <Code size={42} />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Frontend Development
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              React.js & Next.js
            </p>
            <p className="text-gray-600 mb-6">
              I build fast, responsive, and dynamic web applications using the latest technologies. With expertise in React.js and Next.js, I create seamless user experiences that bring your ideas to life in the browser.
            </p>

          </div>
          <div className="text-left">
            <div className="mb-6 text-gray-900">
              <Server size={42} />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Backend Development
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Golang & Express.js
            </p>
            <p className="text-gray-600 mb-6">
              From building robust APIs to developing scalable backend services, I leverage Golang and Express.js to create efficient and high-performance server-side solutions. Whether you are building from scratch or scaling up, I can help.
            </p>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-12">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <MdSchool className="text-blue-500 text-3xl" />
              Education
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-4">
                  <FaUniversity className="text-blue-400 text-2xl" />
                  <div className="text-gray-600">
                    <p className="font-bold text-gray-800">Telkom University</p>
                    <p>Bachelor of Technology - BTech, Informatika (2020 &ndash; 2024)</p>

                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <FaLaptopCode className="text-green-400 text-2xl" />
                  <div className="text-gray-600">
                    <p className="font-bold text-gray-800">Studi Independen Frontend Web Developer</p>
                    <p>Alterra Academy (Feb 2023 - Jun 2023)</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Creating a voting application using Next.js and Firebase.</li>
                      <li>Implementing authentication, CRUD system, and real-time voting.</li>
                      <li>Contributing to the StarEdu Learning Management System using React.js.</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <FaBriefcase className="text-purple-500 text-3xl" />
              Experience
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-4">
                  <FaCode className="text-purple-400 text-2xl" />
                  <div className="text-gray-600">
                    <p className="font-bold text-gray-800">Frontend Developer Internship</p>
                    <p>Telkom Indonesia (Jul 2023 - Jan 2024)</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Creating and refining the Talent Admin Dashboard with a user-friendly interface.</li>
                      <li>Transforming prototypes into responsive websites using Next.js, Tailwind CSS, and TypeScript.</li>
                      <li>Collaborating with the backend team to integrate APIs for seamless user experience.</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <FaPaintBrush className="text-yellow-400 text-2xl" />
                  <div className="text-gray-600">
                    <p className="font-bold text-gray-800">UI/UX Designer Internship</p>
                    <p>Mobile Innovation Laboratory (Nov 2021 - Feb 2022)</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Designed MayFay financial and activity management app.</li>
                      <li>Conducted user research, sketched designs, and created prototypes.</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <FaCode className="text-pink-400 text-2xl" />
                  <div className="text-gray-600">
                    <p className="font-bold text-gray-800">Frontend Developer</p>
                    <p>Integra Inovasi Indonesia (Jul 2019 - Oct 2019)</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Developed the website for Integra Innovation Indonesia office.</li>
                      <li>Implemented an online internship registration feature using HTML, CSS, and Bootstrap.</li>
                      <li>Designed attractive and professional website visuals.</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10" id="portfolio">
          <h1 className="text-3xl font-bold mb-12">My Portfolio</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Cyber Security Enthusiast",
                description:
                  "Experienced in cybersecurity, including incident management, security alert handling, and infrastructure troubleshooting. Focused on protecting data and systems from security threats.",
                imgSrc: "/cyber.png", // Pastikan gambar ada di folder public
                link:
                  "https://drive.google.com/drive/folders/15lv1PaZ8xc5Fp-v5RDAwbG2u9B53Xdu9?usp=sharing",
              },
              {
                id: 2,
                title: "Developer",
                description:
                  "Proficient in building web applications using Laravel, Express.js, Golang, Next.js, and React.js. Experienced in both backend and frontend development.",
                imgSrc: "/developer.png", // Pastikan gambar ada di folder public
                link: "https://github.com/rizkyferdian",
              },
              {
                id: 3,
                title: "UI/UX Design",
                description:
                  "Experienced in crafting visually appealing and functional user interfaces. Skilled in designing intuitive layouts that enhance user experience across a variety of platforms and applications.",
                imgSrc: "/design.png", // Pastikan gambar ada di folder public
                link: "https://dribbble.com/rizkyfdyan",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={400} // Ukuran lebar gambar
                  height={200} // Ukuran tinggi gambar
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <Button>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Check Portfolio
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div >
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Brand */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-lg font-bold">My Portfolio</h1>
              <p className="text-sm text-gray-400">&copy; 2025 Rizky Ferdian Prasetyo. All Rights Reserved.</p>
            </div>

            {/* Footer Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com/rizkyferdian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/0895339642658"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rizky-ferdian-04/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Quick Links */}

          </div>
        </div>
      </footer>
    </>
  );
}
