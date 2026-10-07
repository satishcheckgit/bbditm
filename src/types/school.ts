export interface SchoolSummary {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  programmeCount: number;
  establishedYear?: number;
}

export interface SchoolDetail extends SchoolSummary {
  dean: {
    name: string;
    designation: string;
    message: string;
    avatar?: string;
  };
  departments: string[];
  keyFacilities: string[];
  researchAreas: string[];
}
