interface ITeam {
    id: number;
    title: string;
    position: string;
}

export type TTeamProps = {
    team: ITeam[];
}