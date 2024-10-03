import { IconBrandNextjs } from "@tabler/icons-react";
import { Badge } from "~/components/ui/badge";
import { TechnologyIcon } from "~/components/ui/technologyicon";
import { WorkItem } from "~/types";
import { Button } from "../ui/button";

export function BeanieGenieArticle(props: WorkItem) {
  return (
    <div className="flex flex-col min-h-screen text-slate-800">
      <main>
        <section className="mt-12">
          <div className="container p-24 flex flex-col space-y-8">
            <div>
              <img
                alt="BeanieGenie logo"
                height={"auto"}
                width={"100px"}
                src="/logo.svg"
                className="invert mb-8"
              />
              <div className="flex flex-row justify-between align-top">
                <div className="flex flex-col md:flex-row space-x-6 space-y-2">
                  <h1 className="tracking-tighter text-2xl md:text-8xl">
                    {props.title}
                  </h1>
                  <div className="items-center"></div>
                </div>
                <span>
                  <Badge className="text-tiny">
                    <div className="text-white">{props.status}</div>
                  </Badge>
                </span>
              </div>

              <span className="text-muted-foreground text-xs">27/09/2024</span>
            </div>
            <span className="flex flex-col justify-between">
              <span className="flex flex-row space-x-2">
                {props.technologies
                  .concat(props.extraTechnologies)
                  .map((tech, index) => {
                    return <TechnologyIcon {...tech} key={index} />;
                  })}
              </span>
            </span>
            <p>{props.shortDescription}</p>
            <Button
              className="w-fit bg-slate-200 text-muted-foreground"
              variant="outline"
              disabled
            >
              Demo (coming soon)
            </Button>
            <section className="container flex flex-col space-y-8">
              <h2 className="text-3xl font-bold">The stack</h2>
              <p>
                The project began out of a strong interest in web technologies.
                Although my background isn't specifically in full-stack web
                development, one of my early goals was to explore some of the
                latest and most talked-about tools in the field. There’s a lot
                of buzzwords in computer science, and to be honest, I don’t
                always know what they mean. So, my first challenge with this
                project was to dive into building an application entirely with
                Next.js.
              </p>
              <p>
                I chose Drizzle as the data migration tool for two reasons: its
                growing popularity and the fact that I hadn’t used it before.
                Since this project is expected to undergo frequent changes, a
                migration tool is essential for managing schema and model
                updates in the database.
              </p>
              <div className="flex flex-col space-y-4 w-1/5 just">
                {props.technologies
                  .concat(props.extraTechnologies)
                  .map((tech, index) => {
                    return (
                      <div
                        className="flex flex-row space-x-4  justify-between"
                        key={index}
                      >
                        <TechnologyIcon {...tech} />
                        <p>{tech.name}</p>
                      </div>
                    );
                  })}
              </div>
            </section>
            <section className="container flex flex-col space-y-8">
              <h1 className="text-3xl font-bold">The feature roadmap</h1>
              <div className="flex flex-row space-x-4 place-items-center">
                <h2 className="text-lg ">v0.0.1</h2>
                <h3 className="text-sm">30/09/2024</h3>
              </div>
              <div className="space-y-2">
                <li>
                  Basic inventory management (unopened, inprogress and empty
                  status)
                </li>
                <li>
                  KPI aggregation for average cost per month and expected
                  inventory depletion
                </li>
              </div>
            </section>
            <section className="container flex flex-col space-y-8">
              <h1 className="text-3xl font-bold">The vision</h1>
              <h2 className="text-lg ">Freshness is everything</h2>
              <p>
                In a world of coffee enthusiasts, ensuring the freshness and
                quality of every cup has become a challenge. Many consumers
                struggle with knowing when to reorder coffee to keep their stock
                fresh, often leading to suboptimal purchases where beans go
                stale or arrive too early. Additionally, finding the right
                suppliers and regions that match personal flavor preferences and
                brewing methods is an overwhelming process, resulting in wasted
                money on coffee that doesn’t meet expectations. This problem of
                managing coffee freshness and sourcing the perfect beans for
                individual tastes has become a first-world inconvenience for
                discerning coffee drinkers.
              </p>
              <p>
                BeanieGenie offers an automated solution to optimize the
                freshness and quality of your coffee supply. By keeping a
                quasi-real-time inventory of your coffee consumption, the app
                helps ensure that new orders are placed at just the right
                moment—maximizing freshness while minimizing waste. It also
                tailors your coffee selection by recommending suppliers and
                regions based on your preferred flavor profiles and brewing
                methods, reducing the likelihood of wrongful purchases. With
                minimal manual input required, this app should take the
                guesswork out of coffee sourcing, saving you money and enhancing
                your overall coffee experience.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
