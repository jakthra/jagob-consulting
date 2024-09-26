import { ReactNode } from "react";

export type WorkItem = {
    id: string;
    title: string;
    affiliation: string | null;
    shortDescription: string;
    longDescription?: string | null;
    link: string;
    status: WorkStatus;
    technologies: Technology[];
    extraTechnologies?: Technology[];
}

export enum WorkStatus {
    Active = "active",
    Archived = "archived"
}

export type Technology = {
    name: string;
    icon: ReactNode;
}

