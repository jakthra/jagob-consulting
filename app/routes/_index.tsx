import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

import {
  Cpu,
  Database,
  LineChart,
  BarChart,
  Zap,
  ArrowRight,
  Users,
  ChevronDown,
  LinkedinIcon,
  BrainCircuitIcon,
  MessageSquareCodeIcon,
  MessageCircleDashed,
  MessageCircleIcon,
  AtSignIcon,
  PlusCircle,
  Plus,
  ExpandIcon,
  ArrowDownFromLineIcon,
  SquareChevronDownIcon,
  ChevronDownIcon,
} from "lucide-react";
import { Input } from "~/components/ui/input";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "~/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";
import {
  IconBrandLinkedin,
  IconCirclePlus,
  IconCirclePlus2,
  IconCirclePlusFilled,
  IconLayoutNavbarExpand,
} from "@tabler/icons-react";
import { WorkItems } from "~/lib/workItems";
import { TechnologyIcon } from "~/components/ui/technologyicon";
export const meta: MetaFunction = () => {
  return [
    { title: "BeanieGenie consulting" },
    { name: "BeanieGenie", content: "Consulting" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="h-2/5 flex flex-col justify-end bg-gradient-to-r from-orange-300 to-slate-300 relative overflow-hidden items-end">
          <div
            className="absolute inset-0 bg-grid-black/[0.05] bg-[size:30px_30px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath d='M1.5 0h27v30h-27z' fill='none' stroke='000f0f' stroke-opacity='0.5' stroke-width='1'/%3E%3C/svg%3E")`,
              maskImage: "linear-gradient(to bottom, transparent, black)",
            }}
          />
          <div className="container relative z-10 h-[70vh] flex flex-col justify-center">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="flex">
                  <h1 className="tracking-tighter text-8xl lg:text-massive">
                    THRANE
                  </h1>
                </div>
                <div className="justify-start">
                  <p className=" md:text-xl">
                    A portofolio for engineering projects and research
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>
        <section id="work" className=" h-[100vh] pt-12 ">
          <div className="flex flex-col px-4 md:px-6 space-y-4">
            <h2 className="text-8xl lg:text-massive">WORK</h2>
            <div className="p-10 xl:p-16 flex flex-grow items-center justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full m-12"
              >
                <CarouselContent>
                  {WorkItems.map((content, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="h-[30rem] xl:h-[32rem] flex flex-col justify-between">
                          <div>
                            <CardHeader>
                              <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row space-x-4">
                                  <span className="text-xl">
                                    {content.title}
                                  </span>
                                </div>
                                <Badge className="text-tiny">
                                  <div className="text-white">
                                    {content.status}
                                  </div>
                                </Badge>
                              </div>
                              <CardDescription>
                                <span className="flex flex-row justify-between ">
                                  <span className="flex flex-row space-x-2">
                                    {content.technologies.map((tech, index) => {
                                      return (
                                        <TechnologyIcon {...tech} key={index} />
                                      );
                                    })}
                                  </span>
                                </span>
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p>{content.shortDescription}</p>

                              <p className="text-muted-foreground pt-4">
                                {content.affiliation}
                              </p>
                            </CardContent>
                          </div>
                          <CardFooter className="flex justify-center">
                            <Button asChild className="w-full">
                              <a href={content.link}>Read more</a>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section id="help" className="flex flex-col h-fit bg-orange-200 pt-12">
          <div className="container px-4 md:px-6 flex flex-col xl:flex-row m-12 space-y-12 xl:space-x-12">
            <div className="flex flex-col space-y-4 text-wrap">
              <h2 className=" text-8xl lg:text-massive">HELP</h2>
              <p className="text-secondary-foreground ">
                Are you struggling to build data-driven products or streamline
                your machine learning workflows?{" "}
              </p>
            </div>
            <div className="container xl:w-1/2 space-y-4 flex flex-col  h-full justify-end">
              <p>
                As a seasoned ML Engineer with a strong foundation in data
                engineering and software development, I offer end-to-end
                consultancy services to help your team navigate complex
                challenges and deliver cutting-edge solutions.
              </p>
              <p>
                My expertise goes beyond just implementing machine learning
                models. I specialize in building robust data pipelines,
                integrating state-of-the-art ML solutions,
                and—crucially—choosing the right tools for your specific needs.
                Tooling decisions are often overlooked, yet they can make or
                break the efficiency of your development process. I help you
                avoid the costly pitfalls of mismatched tools, ensuring seamless
                scalability and future-proof architecture.
              </p>
              <p>
                By partnering with me, you'll gain access to a consultancy
                service that balances short-term project goals with long-term
                growth potential. I ensure that your team has the right
                technology in place from the outset, saving you from wasted
                development hours and the frustration of working with unsuitable
                tools. Whether it's optimizing data workflows or scaling your
                machine learning operations, my tailored approach will ensure
                that your project is completed with precision and your
                developers stay productive and satisfied. Let’s make sure your
                next data-driven product is not only built to succeed but also
                equipped to scale effortlessly.
              </p>
            </div>

            <div className="flex flex-col space-y-4 text-nowrap">
              <a href="https://www.linkedin.com/in/thranejakob">
                <LinkedInLogoIcon />
              </a>
              <a
                className="text-sm font-medium"
                href="https://github.com/jakthra"
              >
                <GitHubLogoIcon />
              </a>
              <a
                className="text-sm font-medium"
                href="mailto:jakobthrane@gmail.com"
              >
                <AtSignIcon size="16" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
