import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"

import { Cpu, Database, LineChart, BarChart, Zap, ArrowRight, Users, ChevronDown, LinkedinIcon, BrainCircuitIcon } from "lucide-react"
import { Input } from "~/components/ui/input";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "~/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "~/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { ReactNode } from "react";
import { IconBrandGolang, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandTypescript } from '@tabler/icons-react';
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "BeanieGenie consulting" },
    { name: "BeanieGenie", content: "Consulting" },
  ];
};

type technology = {
  name: string
  icon: ReactNode
}

enum CardStatus {
  Active = "active",
  Archived = "archived"
}

type CardContent = {
  title: string
  affiliation: string | null
  description: string
  link: string
  status: CardStatus
  technologies: technology[]
}

function PytorchLogo({ width, height }: { width: string, height: string }) {
  return (<svg width={width} height={height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0.6 1067.9 90.3 109.1" enableBackground="new 0.6 1067.9 90.3 109.1">
    <g>
      <path fill="#EE4C2C" d="M77.6,1099.6l-8.1,8.1c13.3,13.3,13.3,34.7,0,47.8c-13.3,13.3-34.7,13.3-47.8,0
     c-13.3-13.3-13.3-34.7,0-47.8l0,0l21.1-21.1l3-3l0,0v-15.9l-31.8,31.8c-17.7,17.7-17.7,46.3,0,64c17.7,17.7,46.3,17.7,63.7,0
     C95.3,1145.8,95.3,1117.4,77.6,1099.6z"/>
      <circle fill="#EE4C2C" cx="61.7" cy="1091.8" r="5.9" />
    </g>
  </svg>)
}

function DuckDBIcon({ width, height }: { width: string, height: string }) {
  return (<svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" id="Ebene_1" x="0" y="0" version="1.1" viewBox="0 0 769.5 591.9" ><g><path d="M384.8,344.4L384.8,344.4c-92.5,0-167.2-74.7-167.2-167.2l0,0C217.6,84.7,292.3,10,384.8,10l0,0 C477.3,10,552,84.7,552,177.2l0,0C552,269.6,477.3,344.4,384.8,344.4z" /><path d="M474.2,152.2h-32.8v49.5h32.8c13.7,0,24.9-11.3,24.9-24.9S487.9,152.2,474.2,152.2" fill="#fff100" /><path d="M280.7,177.1c0,38.2,31.1,69.3,69.3,69.3c38.2,0,69.3-31.1,69.3-69.3s-31.1-69.3-69.3-69.3 C311.8,107.8,280.7,138.9,280.7,177.1L280.7,177.1" fill="#fff100" /><g><path d="M221.6,461.9v69.7c0,15-9.3,25.6-22,25.6h-6.2c-13,0-22-10.6-22-25.6v-69.7h-24.5V536c0,26.7,19.2,45.9,46.1,45.9h7.1 c26.9,0,45.9-19.2,45.9-45.9v-74.1H221.6z M445.2,504.3l45.4-47.8h-34.2l-39.9,43v-71.2h-24.2v151.7h24.2v-44.5l11.7-12.3 l39.9,56.9h30L445.2,504.3z M63.6,555.6H34.2V452.7h29.3c22.7,0,40.8,23.1,40.8,51.1C104.3,532.7,86.3,555.6,63.6,555.6z M63.6,428H10v152.1h53.6c35.9,0,65.3-33.9,65.3-76.3C128.8,462.4,99.5,428,63.6,428z M568.2,555.6h-28.9V452.7h28.9 c22.9,0,40.8,23.1,40.8,51.1C608.9,532.7,591.1,555.6,568.2,555.6z M568.2,428h-53.3v152.1h53.3c36.4,0,65.3-33.9,65.3-76.3 C633.4,462.4,604.5,428,568.2,428z M714.3,555.6h-37.7v-42.1h37.7c11.2,0,20.9,9.7,20.9,20.9C735.3,546.4,725.6,555.6,714.3,555.6 z M676.6,489v-36.4h30c10.1,0,18.3,7.9,18.3,18.1c0,10.1-8.2,18.3-18.3,18.3H676.6z M740.1,497.2c5.5-7.3,9.3-16.5,9.3-26.5 c0-23.4-19.6-42.8-42.8-42.8h-54.2v152.1h61.9c25.1,0,45.2-20.5,45.2-45.6C759.5,519,752,505.6,740.1,497.2z M315.1,484.6h6 c14.5,0,26.5,10.6,26.5,23.8h24.7c0-26.2-23.1-47.8-51.1-47.8h-6c-27.6,0-49.8,22.3-49.8,49.6V532c0,27.6,22.3,49.8,49.8,49.8h6 c28.9,0,52.5-21.6,52.5-47.6h-24.7c0,12.6-12.6,22.9-27.8,22.9h-6c-14.1,0-25.8-11.2-25.8-25.1v-21.8 C289.3,496.1,301,484.6,315.1,484.6z" /></g></g></svg>)
}

function DBTIcon({ width, height }: { width: string, height: string }) {
  return (<svg width={width} height={height} viewBox="0 0 90 81" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M77.5499 3.37C79.4499 5.2 80.7 7.62 80.99 10.25C80.99 11.35 80.6999 12.08 80.0399 13.47C79.3799 14.86 71.25 28.92 68.83 32.8C67.44 35.07 66.71 37.78 66.71 40.42C66.71 43.06 67.44 45.77 68.83 48.04C71.25 51.92 79.3799 66.06 80.0399 67.45C80.6999 68.84 80.99 69.5 80.99 70.6C80.7 73.24 79.53 75.65 77.62 77.41C75.79 79.31 73.3699 80.56 70.8099 80.78C69.7099 80.78 68.9799 80.49 67.6599 79.83C66.3399 79.17 51.99 71.26 48.11 68.84C47.82 68.69 47.5199 68.47 47.1599 68.33L27.97 56.98C28.41 60.64 30.0199 64.16 32.6599 66.72C33.1699 67.23 33.6899 67.67 34.2699 68.11C33.8299 68.33 33.32 68.55 32.88 68.84C29 71.26 14.86 79.39 13.47 80.05C12.08 80.71 11.42 81 10.25 81C7.61 80.71 5.19994 79.54 3.43994 77.63C1.53994 75.8 0.29 73.38 0 70.75C0.07 69.65 0.369951 68.55 0.949951 67.6C1.60995 66.21 9.73991 52.07 12.1599 48.19C13.5499 45.92 14.2799 43.28 14.2799 40.57C14.2799 37.86 13.5499 35.22 12.1599 32.95C9.73991 28.92 1.53995 14.79 0.949951 13.4C0.359951 12.45 0.07 11.35 0 10.25C0.29 7.61 1.46 5.2 3.37 3.37C5.19 1.46 7.59999 0.29 10.24 0C11.34 0.07 12.44 0.37 13.46 0.95C14.63 1.46 24.96 7.47 30.45 10.69L31.7 11.42C32.1399 11.71 32.5099 11.93 32.7999 12.08L33.39 12.45L52.9399 24.02C52.4999 19.63 50.23 15.6 46.71 12.89C47.15 12.67 47.66 12.45 48.1 12.16C51.98 9.74 66.12 1.54 67.51 0.95C68.46 0.37 69.56 0.07 70.73 0C73.29 0.29 75.7099 1.46 77.5399 3.37H77.5499ZM41.5199 45.7L45.6899 41.53C46.2799 40.94 46.2799 40.07 45.6899 39.48L41.5199 35.31C40.9299 34.72 40.06 34.72 39.47 35.31L35.2999 39.48C34.7099 40.07 34.7099 40.94 35.2999 41.53L39.47 45.7C39.98 46.21 40.9299 46.21 41.5199 45.7ZM77.5499 3.37C79.4499 5.2 80.7 7.62 80.99 10.25C80.99 11.35 80.6999 12.08 80.0399 13.47C79.3799 14.86 71.25 28.92 68.83 32.8C67.44 35.07 66.71 37.78 66.71 40.42C66.71 43.06 67.44 45.77 68.83 48.04C71.25 51.92 79.3799 66.06 80.0399 67.45C80.6999 68.84 80.99 69.5 80.99 70.6C80.7 73.24 79.53 75.65 77.62 77.41C75.79 79.31 73.3699 80.56 70.8099 80.78C69.7099 80.78 68.9799 80.49 67.6599 79.83C66.3399 79.17 51.99 71.26 48.11 68.84C47.82 68.69 47.5199 68.47 47.1599 68.33L27.97 56.98C28.41 60.64 30.0199 64.16 32.6599 66.72C33.1699 67.23 33.6899 67.67 34.2699 68.11C33.8299 68.33 33.32 68.55 32.88 68.84C29 71.26 14.86 79.39 13.47 80.05C12.08 80.71 11.42 81 10.25 81C7.61 80.71 5.19994 79.54 3.43994 77.63C1.53994 75.8 0.29 73.38 0 70.75C0.07 69.65 0.369951 68.55 0.949951 67.6C1.60995 66.21 9.73991 52.07 12.1599 48.19C13.5499 45.92 14.2799 43.28 14.2799 40.57C14.2799 37.86 13.5499 35.22 12.1599 32.95C9.73991 28.92 1.53995 14.79 0.949951 13.4C0.359951 12.45 0.07 11.35 0 10.25C0.29 7.61 1.46 5.2 3.37 3.37C5.19 1.46 7.59999 0.29 10.24 0C11.34 0.07 12.44 0.37 13.46 0.95C14.63 1.46 24.96 7.47 30.45 10.69L31.7 11.42C32.1399 11.71 32.5099 11.93 32.7999 12.08L33.39 12.45L52.9399 24.02C52.4999 19.63 50.23 15.6 46.71 12.89C47.15 12.67 47.66 12.45 48.1 12.16C51.98 9.74 66.12 1.54 67.51 0.95C68.46 0.37 69.56 0.07 70.73 0C73.29 0.29 75.7099 1.46 77.5399 3.37H77.5499ZM41.5199 45.7L45.6899 41.53C46.2799 40.94 46.2799 40.07 45.6899 39.48L41.5199 35.31C40.9299 34.72 40.06 34.72 39.47 35.31L35.2999 39.48C34.7099 40.07 34.7099 40.94 35.2999 41.53L39.47 45.7C39.98 46.21 40.9299 46.21 41.5199 45.7Z" fill="#FF694A" />
    <path d="M88.83 64.3599L87.62 67.7399H87.1799L85.97 64.3599V67.7399H85.2V63.1299H86.1599L87.3999 66.5599L88.64 63.1299H89.6V67.7399H88.83V64.3599Z" fill="#FF694A" />
    <path d="M84.5199 63.8199H83.25V67.7399H82.47V63.8199H81.2V63.1299H84.5199V63.8199Z" fill="#FF694A" />
  </svg>
  )
}

function DagsterIcon({ width, height }: { width: string, height: string }) {
  return (<svg width={width} height={height} viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M221.556 440.815C221.562 442.771 221.97 444.704 222.757 446.494C223.543 448.285 224.689 449.894 226.125 451.221C227.56 452.548 229.254 453.565 231.1 454.208C232.946 454.851 234.905 455.107 236.854 454.959C310.941 449.655 380.913 397.224 403.252 315.332C404.426 310.622 407.96 308.26 412.669 308.26C415.082 308.357 417.36 309.402 419.009 311.168C420.658 312.933 421.545 315.278 421.477 317.694C421.477 335.953 398.006 383.674 364.442 411.368C362.731 412.807 361.367 414.614 360.452 416.654C359.536 418.694 359.092 420.914 359.154 423.149C359.188 424.967 359.58 426.76 360.308 428.425C361.036 430.091 362.086 431.596 363.397 432.855C364.708 434.114 366.254 435.101 367.948 435.761C369.641 436.421 371.448 436.739 373.264 436.699C376.205 436.699 380.913 434.931 386.795 429.627C410.266 408.412 455 348.909 455 283.508C455 187.624 380.872 105 277.418 105C185.106 105 105.138 180.414 105.138 267.611C105.138 325.345 151.004 368.937 211.56 368.937C258.019 368.937 300.945 335.953 312.708 290.58C313.881 285.87 317.402 283.508 322.11 283.508C324.525 283.606 326.804 284.65 328.455 286.415C330.106 288.181 330.996 290.525 330.933 292.942C330.933 313.564 292.122 385.484 213.327 385.484C194.509 385.484 170.996 380.18 154.524 370.746C152.319 369.677 149.917 369.075 147.469 368.978C145.594 368.906 143.725 369.223 141.979 369.909C140.232 370.594 138.647 371.634 137.321 372.962C135.996 374.291 134.96 375.879 134.278 377.627C133.596 379.376 133.283 381.247 133.359 383.122C133.435 385.524 134.123 387.867 135.357 389.929C136.592 391.991 138.332 393.703 140.414 394.904C162.173 407.334 188.047 413.757 214.501 413.757C280.359 413.757 340.335 368.978 357.98 302.997C359.154 298.287 362.688 295.926 367.383 295.926C369.797 296.023 372.077 297.067 373.728 298.832C375.379 300.598 376.269 302.943 376.205 305.359C376.205 332.459 327.992 419.655 235.087 426.727C231.492 426.994 228.123 428.579 225.625 431.18C223.128 433.78 221.679 437.211 221.556 440.815V440.815Z" fill="#4F43DD" />
    <path d="M313.62 215.178C326.301 215.083 338.748 218.589 349.517 225.288C350.605 219.33 351.206 213.292 351.312 207.236C351.312 179.266 329.995 154.211 304.038 154.211C283.853 154.211 271.233 170.937 271.233 191.6C271.137 202.763 275.057 213.588 282.279 222.098C292.062 217.431 302.782 215.064 313.62 215.178V215.178Z" fill="white" />
    <path d="M374.439 316.505C378.042 304.185 379.63 295.635 379.63 290.083C379.52 287.685 378.493 285.421 376.761 283.76C375.028 282.099 372.724 281.168 370.325 281.16C368.089 281.202 365.932 281.99 364.196 283.399C362.46 284.808 361.244 286.757 360.743 288.936C359.762 292.983 357.664 303.95 355.593 310.912C356.449 308.306 357.231 305.658 357.94 302.97C359.114 298.246 362.648 295.898 367.342 295.898C369.756 295.991 372.035 297.033 373.687 298.796C375.338 300.559 376.228 302.902 376.165 305.318C376.054 309.115 375.446 312.881 374.356 316.519L374.439 316.505Z" fill="#352D8E" />
    <path d="M424.418 303.632C424.305 301.237 423.278 298.977 421.55 297.317C419.821 295.658 417.522 294.724 415.126 294.709C412.893 294.754 410.739 295.543 409.006 296.952C407.272 298.36 406.059 300.308 405.558 302.485C404.564 306.629 402.424 317.761 400.325 324.709H400.422C401.444 321.615 402.396 318.48 403.183 315.289C404.357 310.565 407.891 308.217 412.599 308.217C415.012 308.311 417.29 309.353 418.939 311.116C420.588 312.88 421.475 315.223 421.408 317.637C421.341 320.569 420.938 323.485 420.207 326.325C423.134 316.049 424.418 308.618 424.418 303.632Z" fill="#352D8E" />
    <path d="M313.619 215.178C319.921 215.166 326.196 216.007 332.272 217.678C335.462 213.326 337.056 208.008 336.786 202.618C336.516 197.228 334.398 192.095 330.789 188.084C327.18 184.073 322.3 181.428 316.97 180.594C311.64 179.761 306.185 180.789 301.524 183.507L311.189 199.419L293.089 191.587C290.637 195.545 289.407 200.139 289.555 204.793C289.702 209.446 291.22 213.953 293.917 217.747C300.34 216.016 306.967 215.152 313.619 215.178V215.178Z" fill="#030615" />
    <path d="M174.172 317.583C181.797 317.583 187.979 311.399 187.979 303.771C187.979 296.143 181.797 289.959 174.172 289.959C166.547 289.959 160.365 296.143 160.365 303.771C160.365 311.399 166.547 317.583 174.172 317.583Z" fill="#352D8E" />
    <path d="M174.172 262.335C181.797 262.335 187.979 256.151 187.979 248.523C187.979 240.895 181.797 234.711 174.172 234.711C166.547 234.711 160.365 240.895 160.365 248.523C160.365 256.151 166.547 262.335 174.172 262.335Z" fill="#352D8E" />
    <path d="M146.558 289.958C154.183 289.958 160.364 283.774 160.364 276.146C160.364 268.518 154.183 262.334 146.558 262.334C138.932 262.334 132.751 268.518 132.751 276.146C132.751 283.774 138.932 289.958 146.558 289.958Z" fill="#352D8E" />
    <path d="M208.688 368.91H211.45C257.909 368.91 300.835 335.927 312.598 290.554C313.771 285.844 317.292 283.482 322 283.482C324.415 283.579 326.694 284.624 328.345 286.389C329.996 288.155 330.886 290.499 330.823 292.916C330.612 297.737 329.522 302.479 327.606 306.908C327.939 306.393 328.23 305.853 328.476 305.292C331.969 297.304 333.774 288.679 333.777 279.96C333.777 266.41 324.361 257.571 310.844 257.571C287.276 257.571 282.554 278.151 272.614 300.154C262.3 322.999 243.357 347.709 195.586 347.709C145.951 347.709 94.9487 312.944 107.389 242.253C107.54 241.369 107.665 240.582 107.761 239.85C105.939 248.982 105.014 258.272 105 267.584C105.138 324.491 149.582 367.585 208.688 368.91Z" fill="#352D8E" />
  </svg>
  )
}

const workCardContent: CardContent[] = [{
  title: "BeanieGenie",
  affiliation: null,
  description: "Specialty coffee can be hard to navigate and explore. BeanieGenie is designed to help users navigate complex flavor profiles and manage orders. It aims to simplify choosing the right coffee by identifying flavor patterns and roasters that fit your taste buds while enabling you to make orders in time to maintain freshness, preventing gaps in coffee availability.",
  link: "/beaniegenie",
  status: CardStatus.Active,
  technologies: [{ icon: <IconBrandNextjs />, name: "NextJs" }, { icon: <IconBrandReact />, name: "React" }, { icon: <IconBrandTypescript />, name: "Typescript" }]
},
{
  title: "ML Cookie cutter",
  affiliation: null,
  description: "This GitHub repository provides tools for managing machine learning (ML) projects, covering data ingestion, model training, and performance monitoring. It follows an ELT approach to process and transform raw data. The repository includes a built-in command-line interface (CLI) for managing data, running experiments, and handling project builds..",
  link: "https://github.com/jakthra/ml-cookie-cutter",
  status: CardStatus.Active,
  technologies: [{ icon: <IconBrandPython />, name: "Python" }, { icon: <DagsterIcon width="32" height="32" />, name: "Dagster" }, { icon: <DBTIcon width="22" height="22" />, name: "DBT" }, { icon: <DuckDBIcon width="28 " height="28" />, name: "DuckDB" }]
},
{
  title: "AI for X-Ray",
  affiliation: "AI4XRAY@Unumed",
  description: "The AI4XRAY project focused on providing second opinions to clinicians studying x-rays, benefiting junior doctors and resource-limited clinics. Key engineering efforts included ingesting and extracting 1.5M DICOM images, creating a custom annotation suite, and managing model training, tracking, and deployment.",
  link: "/ai-for-xray",
  status: CardStatus.Archived,
  technologies: [{ icon: <IconBrandPython />, name: "Python" }, { icon: <DagsterIcon width="32" height="32" />, name: "Dagster" }, { icon: <DBTIcon width="22" height="22" />, name: "DBT" }, { icon: <IconBrandGolang />, name: "Golang" }, {
    icon: <PytorchLogo height="20" width="20" />, name: "Pytorch"
  }, { icon: <IconBrandReact />, name: "React" }, { icon: <img src="https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png" height="auto" width="40px" />, name: "MLFlow" }]
}
]

export function TechnologyIcon(props: technology) {
  return (

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><div className="grayscale hover:grayscale-0">{props.icon}</div></TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{props.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>)
}

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen text-slate-800">
      <header
        className="absolute top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center"
      >
        <div className="flex items-center justify-center" href="#">
          <BrainCircuitIcon />
          <span className="ml-2 text-lg ">JAKOB THRANE</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium " href="#work">
            Work
          </a>
          <a className="text-sm font-medium" href="#help">
            Help
          </a>
          <a className="text-sm font-medium" href="https://www.linkedin.com/in/thranejakob">
            <LinkedInLogoIcon />
          </a>
          <a className="text-sm font-medium" href="https://github.com/jakthra">
            <GitHubLogoIcon />
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="h-2/5 flex flex-col justify-end bg-gradient-to-r from-orange-300 to-slate-300 relative overflow-hidden items-end">
          <div className="absolute inset-0 bg-grid-black/[0.05] bg-[size:30px_30px]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath d='M1.5 0h27v30h-27z' fill='none' stroke='000f0f' stroke-opacity='0.5' stroke-width='1'/%3E%3C/svg%3E")`,
            maskImage: 'linear-gradient(to bottom, transparent, black)',
          }} />
          <div
            className="container relative z-10 h-[70vh] flex flex-col justify-center"
          >
            <div className="flex flex-col space-y-4">
              <div
                className="space-y-2"
              >
                <div className="flex">
                  <h1 className=" tracking-tighter text-8xl lg:text-massive">
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
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>
        <section id="work" className=" h-[100vh] pt-12 ">
          <div className="flex flex-col px-4 md:px-6 space-y-4">
            <h2
              className="text-8xl lg:text-massive"
            >
              WORK

            </h2>
            <div className="flex flex-row space-x-2">
              {Object.values(CardStatus).map((status, index) => <Badge key={index}>{status}</Badge>)}


            </div>
            <div className="p-10 xl:p-16 flex flex-grow items-center justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full m-12"
              >
                <CarouselContent>
                  {workCardContent.map((content, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                      <div className="p-1">
                        <Card className="h-[30rem] xl:h-[32rem] flex flex-col justify-between">
                          <div>
                            <CardHeader >
                              <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row space-x-4">
                                  <span className="text-xl">{content.title}</span>
                                </div>
                                <Badge className="text-tiny"><div className="text-white">{content.status}</div></Badge>
                              </div>
                              <CardDescription>
                                <span className="flex flex-col justify-between">
                                  <span className="flex flex-row space-x-2">
                                    {content.technologies.map((tech, index) => {
                                      return <TechnologyIcon {...tech} key={index} />
                                    })}
                                  </span>
                                </span>
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p>{content.description}</p>

                              <p className="text-muted-foreground pt-4">{content.affiliation}</p>
                            </CardContent>
                          </div>
                          <CardFooter className="flex justify-center">
                            <Button asChild className="w-full"><Link href="#">Read more</Link></Button>
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
              <h2
                className=" text-8xl lg:text-massiv "
              >
                HELP
              </h2>
              <p className="text-secondary-foreground ">Are you struggling to build data-driven products or streamline your machine learning workflows? </p>
            </div>
            <div className="container xl:w-1/2 space-y-4 flex flex-col  h-full justify-end">
              <p>As a seasoned ML Engineer with a strong foundation in data engineering and software development, I offer end-to-end consultancy services to help your team navigate complex challenges and deliver cutting-edge solutions.</p>
              <p>My expertise goes beyond just implementing machine learning models. I specialize in building robust data pipelines, integrating state-of-the-art ML solutions, and—crucially—choosing the right tools for your specific needs. Tooling decisions are often overlooked, yet they can make or break the efficiency of your development process. I help you avoid the costly pitfalls of mismatched tools, ensuring seamless scalability and future-proof architecture.</p>
              <p>By partnering with me, you'll gain access to a consultancy service that balances short-term project goals with long-term growth potential. I ensure that your team has the right technology in place from the outset, saving you from wasted development hours and the frustration of working with unsuitable tools. Whether it's optimizing data workflows or scaling your machine learning operations, my tailored approach will ensure that your project is completed with precision and your developers stay productive and satisfied.
                Let’s make sure your next data-driven product is not only built to succeed but also equipped to scale effortlessly.</p>

            </div>

          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-gray-600">© 2023 Jakob Thrane. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#"> */}
          {/* Terms of Service */}
          {/* </Link> */}
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#"> */}
          {/* Privacy */}
          {/* </Link> */}
        </nav>
      </footer>
    </div>
  );
}