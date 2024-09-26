import type { MetaFunction } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { WorkItems } from "~/lib/workItems";
import { WorkItem } from "~/types";
import { TechnologyIcon } from "~/components/ui/technologyicon";
import { Badge } from "~/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "BeanieGenie consulting" },
    { name: "BeanieGenie", content: "Consulting" },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  if (!WorkItems.map((item) => item.id).includes(params.workId)) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return params.workId;
}

export default function Index() {
  const workId = useLoaderData<string>();

  // This will always return a result. The item is returned here rather than in the loader - since the loader creates a json-object returned, and the data structure contains reactnodes
  const data = WorkItems.find((item) => item.id == workId) as WorkItem;

  return (
    <div className="flex flex-col min-h-screen text-slate-800">
      <main>
        <section className="mt-12">
          <div className="container p-24 flex flex-col space-y-8">
            <div className="flex flex-row justify-between align-top">
              <h1 className="tracking-tighter text-8xl">{data.title}</h1>
              <span>
                <Badge className="text-tiny">
                  <div className="text-white">{data.status}</div>
                </Badge>
              </span>
            </div>
            <span className="flex flex-col justify-between">
              <span className="flex flex-row space-x-2">
                {data.technologies
                  .concat(data.extraTechnologies)
                  .map((tech, index) => {
                    return <TechnologyIcon {...tech} key={index} />;
                  })}
              </span>
            </span>
            <p>{data.shortDescription}</p>
            <p>{data.longDescription}</p>
            <p>{data.affiliation}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
