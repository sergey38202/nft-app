export interface ITableItem {
    id: number;
    title: string;
    items: any[];
}

export type TLevelTableProps = {
    tableItems: ITableItem[]
}