export interface AssetProp {
    title:string;
    url:string;
    alt:string;
    width:number;
    height:number;
}

export interface CheckBoxProp {
  label: string;
  value: string;
}

export interface ButtonProp {
  label: string;
  url: string;
  target?: string;
  rel?: string;
  type?: string;
}