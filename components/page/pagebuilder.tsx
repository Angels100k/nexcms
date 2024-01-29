import dynamic from 'next/dynamic'
import { PrismaClient } from '@prisma/client'

interface ComponentProps {
[key: string]: any;
}

interface PageProps {
jsonData: any;
themeName?: string;
}

type ComponentTypeWithProps = React.ComponentType<ComponentProps> | null;
interface ComponentsMap {
[componentName: string]: ComponentTypeWithProps;
}
const prisma = new PrismaClient()
// Server Component:
 
export default async function  ServerComponentExample({ themeName, jsonData, url }:any) {
    
    const componentsMap: ComponentsMap = {};
    let i = 0
    for (const key of Object.keys(jsonData)) {
        i++;
        componentsMap[key + i] = dynamic(() => import(`@/theme/${themeName}/component/${key}`))
    }
    console.log(componentsMap)
    let y = 0
  return (
    <div>
      {Object.entries(jsonData).map(([key, value]) => {
        y++
        const Component = componentsMap?.[key + y] || null;
        return (
          <section key={key}>
            {Component ? <Component {...value as React.ComponentProps<any>} /> : <p>Component not found for {key}</p>}
          </section>
        );
      })}
    </div>
  )
}