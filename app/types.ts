import { ReactNode } from "react";

export type WorkItemProps = {
    id: string;
    title: string;
    affiliation: string | null;
    shortDescription: string;
    link: string;
    status: WorkStatus;
    technologies: Technology[];
    extraTechnologies?: Technology[];
}

export type WorkItem = WorkItemProps & {
    articleComponent?: (props: WorkItemProps) => JSX.Element
}

export enum WorkStatus {
    Active = "active",
    Archived = "archived"
}

export type Technology = {
    name: string;
    icon: ReactNode;
}

