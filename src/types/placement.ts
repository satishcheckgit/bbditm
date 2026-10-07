export interface PlacementStatistic {
  label: string;
  value: string;
  subtext: string;
}

export interface TopRecruiter {
  name: string;
  sector: string;
  logo?: string;
}

export interface StudentPlacementStory {
  id: string;
  studentName: string;
  programme: string;
  batch: string;
  company: string;
  packageText: string;
  quote: string;
  avatar?: string;
}

export interface PlacementData {
  heroStats: PlacementStatistic[];
  topRecruiters: TopRecruiter[];
  studentStories: StudentPlacementStory[];
}
