import type { MetaFunction } from "@remix-run/node";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export const meta: MetaFunction = () => {
  return [
    { title: "BeanieGenie consulting" },
    { name: "BeanieGenie", content: "Consulting" },
  ];
};




export default function Index() {
  return (
    <div className="flex flex-col justify-between items-center bg-slate-950" style={{ height: "100vh" }}>
      <div className="flex z-10 flex-col items-center space-y-8 pt-48">

        <div className="text-lg font-medium justify-center ">Data, AI and Automation consulting. </div>
        <div className="text-6xl font-medium justify-center">Coming soon.</div>
        <div className="text-md font-medium justify-center ">We deliver tests and audit of complex automation solutions.  </div>
      </div>
      <div className="flex z-10 text-xs font-medium justify-center pb-8">BeanieGenie Consulting</div>
    </div>
  );
}