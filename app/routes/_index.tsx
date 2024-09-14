import type { MetaFunction } from "@remix-run/node";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export const meta: MetaFunction = () => {
  return [
    { title: "BeanieGenie consulting" },
    { name: "BeanieGenie", content: "Data, AI and automation consulting" },
  ];
};




export default function Index() {
  return (
    <div className="flex flex-col justify-between items-center" style={{ height: "100vh" }}>
      <div className="flex z-10 flex-col items-center space-y-8">
        <div className="text-2xl font-medium justify-center pt-48">Data, AI and Automation consulting</div>
        <div className="text-lg font-medium justify-center ">We deliver tests and audit of complex automation solutions.  </div>
      </div>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 1
        }}
        className="max-h-screen"
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.2&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.1&uStrength=0.3&uTime=0&wireframe=false'
        />

      </ShaderGradientCanvas>
      <div className="flex z-10 text-xs font-medium justify-center pb-8">BeanieGenie Consulting</div>
    </div>
  );
}