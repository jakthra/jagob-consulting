import {
  IconBrandGolang,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { AI4xrayArticle } from "~/components/articles/aiforxray";
import { BeanieGenieArticle } from "~/components/articles/beaniegenie";

import {
  DagsterIcon,
  PytorchLogo,
  DBTIcon,
  DuckDBIcon,
  DrizzleLogo,
  PostgresLogo,
} from "~/components/ui/logos";

import { WorkItem, WorkStatus } from "~/types";

export const WorkItems: WorkItem[] = [
  {
    id: "beanie-genie",
    title: "BeanieGenie",
    affiliation: null,
    shortDescription:
      "Specialty coffee can be hard to navigate and explore. BeanieGenie is designed to help users navigate complex flavor profiles and manage orders. It aims to simplify choosing the right coffee by identifying flavor patterns and roasters that fit your taste buds while enabling you to make orders in time to maintain freshness, preventing gaps in coffee availability.",
    articleComponent: (WorkItemProps) => (
      <BeanieGenieArticle {...WorkItemProps} />
    ),
    link: "/work/beanie-genie",
    status: WorkStatus.Active,
    technologies: [
      { icon: <IconBrandNextjs />, name: "NextJs" },
      { icon: <IconBrandReact />, name: "React" },
    ],
    extraTechnologies: [
      { icon: <IconBrandTypescript />, name: "Typescript" },
      { icon: <DrizzleLogo width="82" height="22" />, name: "Drizzle ORM" },
      { icon: <PostgresLogo width="22" height="22" />, name: "Postgres" },
    ],
  },
  {
    id: "ml-cookie-cutter",
    title: "ML Cookie cutter",
    affiliation: null,
    shortDescription:
      "This GitHub repository provides tools for managing machine learning (ML) projects, covering data ingestion, model training, and performance monitoring. It follows an ELT approach to process and transform raw data. The repository includes a built-in command-line interface (CLI) for managing data, running experiments, and handling project builds..",
    link: "https://github.com/jakthra/ml-cookie-cutter",
    status: WorkStatus.Active,
    technologies: [{ icon: <IconBrandPython />, name: "Python" }],
    extraTechnologies: [
      { icon: <DagsterIcon width="32" height="32" />, name: "Dagster" },
      { icon: <DBTIcon width="22" height="22" />, name: "DBT" },
      { icon: <DuckDBIcon width="28 " height="28" />, name: "DuckDB" },
    ],
  },
  {
    id: "ai-for-xray",
    title: "AI for X-Ray",
    affiliation: "AI4XRAY@Unumed",
    shortDescription:
      "The AI4XRAY project focused on providing second opinions to clinicians studying x-rays, benefiting junior doctors and resource-limited clinics. Key engineering efforts included ingesting and extracting 1.5M DICOM images, creating a custom annotation suite, and managing model training, tracking, and deployment.",
    link: "/work/ai-for-xray",
    articleComponent: (WorkItemProps) => <AI4xrayArticle {...WorkItemProps} />,
    status: WorkStatus.Archived,
    technologies: [
      { icon: <IconBrandPython />, name: "Python" },
      { icon: <IconBrandGolang />, name: "Golang" },
      { icon: <IconBrandReact />, name: "React" },
    ],
    extraTechnologies: [
      { icon: <DBTIcon width="22" height="22" />, name: "DBT" },
      { icon: <DagsterIcon width="32" height="32" />, name: "Dagster" },
      {
        icon: <PytorchLogo height="20" width="20" />,
        name: "Pytorch",
      },
      {
        icon: (
          <img
            alt="Mlflow logo"
            src="https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png"
            height="auto"
            width="40px"
          />
        ),
        name: "MLFlow",
      },
    ],
  },
];
