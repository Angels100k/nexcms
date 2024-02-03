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
 
export default async function  ServerComponentExample({ themeName, jsonData, url, themeColors }:any) {   
    // TODO: Make Nav and Footer global optional
    const Nav = dynamic(() => import(`@/theme/${themeName}/global/nav`).catch((error) => console.error("Failed to load nav:", error)))
    const Footer = dynamic(() => import(`@/theme/${themeName}/global/footer`).catch((error) => console.error("Failed to load footer:", error)))
    const [navData, footerData] = await Promise.all([
      prisma.global.findFirst({
          where: { name: "nav" },
      }),
      prisma.global.findFirst({
          where: { name: "footer" },
      }),
  ]);
  prisma.$disconnect()
    const componentsMap: ComponentsMap = {};
    let i = 0
    for (const key of Object.keys(jsonData)) {
        i++;
        componentsMap[key + i] = dynamic(() => import(`@/theme/${themeName}/component/${key}`))
    }
    let y = 0
    const navJson = navData?.data ? JSON.parse(navData.data.toString()) : {data:["empty"]};

    // TODO: find beter way to add theme colors
  return (
    <div style={{
      '--primary': themeColors.primary,
      '--secondary': themeColors.secondary,
      '--accent': themeColors.accent,
      '--background': themeColors.background,
      '--text': themeColors.text,
    } as React.CSSProperties}>
      {Nav ? <Nav {...navJson as React.ComponentProps<any>} /> : null}
      {Object.entries(jsonData).map(([key, value]) => {
        y++
        const Component = componentsMap?.[key + y] || null;
        return (
          <div key={key}>
            {Component ? <Component {...value as React.ComponentProps<any>} /> : <p>Component not found for {key}</p>}
          </div>
        );
      })}
      {Footer ? <Footer />: null}
    </div>
  )
}