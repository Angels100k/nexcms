export interface AssetProp {
    title:string;
    url:string;
    alt:string;
    width:number;
    height:number;
}

export interface CheckBoxProp {
  text: string;
  value: string;
}

export interface RadioButtonProp {
  text: string;
  value: string;
  default?: boolean;
}

export interface ButtonProp {
  text: string;
  url: string;
  target?: string;
  rel?: string;
  type?: string;
}

export interface TextProp {
  text: string;
}

export interface NumberProp {
  text: number;
}

export interface ColorProp {
  value: string;
}

export interface TextAreaProp {
  text: Buffer;
}

export interface UrlProp {
  text: string;
  url: string;
}
