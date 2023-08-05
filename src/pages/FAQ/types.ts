interface IFaqItem {
    id: number;
    title: string;
    description: string;
}

export type TFaqProps = {
    faqItems: IFaqItem[];
}