export interface IHomeCard {
    icon: any;
    title: string;
    param: string;
    name: string;
    titleColor: string;
}

export type THomeCardProps = {
    cards: IHomeCard[]
}