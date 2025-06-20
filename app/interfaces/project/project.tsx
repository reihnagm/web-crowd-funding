type Project = {
  id: string;
  medias: ProjectMedia[];
  alt: string;
  status: "Proyek Berakhir" | "Proyek Berjalan";
  statusColor: "purple" | "green";
  title: string;
  goal: string;
  modal: string;
  unitPrice: string;
  unitTotal: string;
  numberOfUnit: string;
  minInvest: string;
  periode: string;
  roi: string;
};

type ProjectMedia = {
  id: number;
  path: string;
};
