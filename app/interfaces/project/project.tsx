type Project = {
  id: string;
  medias: ProjectMedia[];
  alt: string;
  status: 'Proyek Berakhir' | 'Proyek Berjalan';
  statusColor: 'purple' | 'green';
  title: string;
  danaTerkumpul: string;
  kebutuhanModal: string;
  minimalInvestasi: string;
  jangkaWaktu: string;
  proyeksiROI: string;
};

type ProjectMedia = {
  id: number; 
  path: string;
}
