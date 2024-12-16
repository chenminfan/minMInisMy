export type portfolioProps = {
  id: string,
  page: string,
  category: string,
  content: string;
  workTitle: string,
  title: string,
  imageUrl: string,
  link: string,
  imageInfo?: string[string],

}
export type infoProps = {
  title?: string | null;
  content?: string | null;
  category?: string | null;
  time?: string | null;
  imageUrl?: string | null;
}
export type content1Props = {
  courses?: string;
  coursesLink?: string;
}
export type WORKProps = {
  work: string,
  workName: string,
  endTime: string,
  startTime: string,
  workTitle: string,
  workTool: string | null,
  infoTitle: string,
  info: infoProps[],
  subInfo?: {
    subInfoTitle?: string;
    content?: string;
    content1?: content1Props[];
  };
}

export type DATABASEProps = {
  work: { WORKProps },
  portfolio: { portfolioProps },
}