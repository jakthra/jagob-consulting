import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion"
import { Button } from "~/components/ui/button"

import { Cpu, Database, LineChart, BarChart, Zap, ArrowRight, Users, ChevronDown } from "lucide-react"
import { Input } from "~/components/ui/input";

export const meta: MetaFunction = () => {
  return [
    { title: "BeanieGenie consulting" },
    { name: "BeanieGenie", content: "Consulting" },
  ];
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}



export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        className="absolute top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-white">BeanieGenie</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium text-white hover:text-blue-200" href="#services">
            Services
          </a>
          <a className="text-sm font-medium text-white hover:text-blue-200" href="#benefits">
            Benefits
          </a>
          <a className="text-sm font-medium text-white hover:text-blue-200" href="#team">
            Our Team
          </a>
          <a className="text-sm font-medium text-white hover:text-blue-200" href="#contact">
            Contact
          </a>
        </nav>
      </motion.header>
      <main className="flex-1">
        <section className="h-screen flex flex-col justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden items-center">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath d='M1.5 0h27v30h-27z' fill='none' stroke='%23fff' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`,
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
          }} />
          <motion.div
            className="container px-4 md:px-6 relative z-10 h-[70vh] flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Navigate the Data & AI Landscape with Confidence
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  We guide you through the complex world of Data & AI tooling and development, helping you make informed decisions and implement effective solutions.
                </p>
              </motion.div>
              <motion.div
                className="space-x-4"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">Learn More</Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </motion.div>
        </section>
        <section id="services" className="flex flex-col justify-center  py-12 md:py-24 lg:py-32 items-center">
          <div className="container px-4 md:px-6 ">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-lg shadow-md"
                variants={fadeIn}
              >
                <Database className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Data Architecture</h3>
                <p className="text-gray-600">Design scalable and efficient data infrastructures tailored to your needs.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-lg shadow-md"
                variants={fadeIn}
              >
                <LineChart className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">AI Strategy</h3>
                <p className="text-gray-600">Develop comprehensive AI strategies aligned with your business goals.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-lg shadow-md"
                variants={fadeIn}
              >
                <BarChart className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Tool Selection</h3>
                <p className="text-gray-600">Navigate the vast landscape of Data & AI tools to find the perfect fit for your projects.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="benefits" className="flex flex-col justify-center  py-12 md:py-24 lg:py-32 items-center bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Key Benefits
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <Zap className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Accelerated Implementation</h3>
                  <p className="text-gray-600">Reduce time-to-value with our expert guidance and proven methodologies.</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <ArrowRight className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Informed Decision Making</h3>
                  <p className="text-gray-600">Make confident choices backed by our deep industry knowledge and experience.</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <Cpu className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Cutting-edge Solutions</h3>
                  <p className="text-gray-600">Stay ahead of the curve with access to the latest Data & AI technologies and best practices.</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <Database className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Scalable Architecture</h3>
                  <p className="text-gray-600">Build future-proof data and AI systems that grow with your business.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="team" className="flex flex-col justify-center items-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet our team of experienced professionals dedicated to guiding you through the Data & AI landscape.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="flex flex-col items-center space-y-4" variants={fadeIn}>
                {/* <image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. Emily Chen"
                  width={200}
                  height={200}
                  className="rounded-full"
                /> */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Dr. Emily Chen</h3>
                  <p className="text-blue-600">AI & Machine Learning Expert</p>
                  <p className="mt-2 text-gray-600">
                    With a Ph.D. in Machine Learning and 6 years of industrial experience, Dr. Chen brings cutting-edge AI expertise to solve complex business challenges.
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex flex-col items-center space-y-4" variants={fadeIn}>
                {/* <image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Rodriguez"
                  width={200}
                  height={200}
                  className="rounded-full"
                /> */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Michael Rodriguez</h3>
                  <p className="text-blue-600">RPA & Governance Specialist</p>
                  <p className="mt-2 text-gray-600">
                    With 6 years of experience in Robotic Process Automation and Governance, Michael ensures seamless integration of AI solutions within regulatory frameworks.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="contact" className="flex flex-col justify-center  py-12 md:py-24 lg:py-32 items-center bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Data & AI Journey?</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Get in touch with our experts and start navigating the Data & AI landscape with confidence.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-gray-600">© 2023 DataAI Guides. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#"> */}
          Terms of Service
          {/* </Link> */}
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#"> */}
          Privacy
          {/* </Link> */}
        </nav>
      </motion.footer>
    </div>
  );
}