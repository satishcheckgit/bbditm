export type ProgrammeLevel = "undergraduate" | "postgraduate" | "doctoral" | "diploma";

export interface ProgrammeSummary {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  schoolId: string;
  schoolName: string;
  degree: string;
  level: ProgrammeLevel;
  duration: string;
  discipline: string;
  tagline?: string;
  featured?: boolean;
  intake?: string;
  eligibilitySummary?: string;
  image?: string;
}

export interface ProgrammeCurriculumYear {
  year: number;
  semesters: {
    semester: number;
    subjects: string[];
  }[];
}

export interface ProgrammeDetail extends ProgrammeSummary {
  overview: string;
  highlights: string[];
  eligibility: string;
  admissionProcess: string[];
  annualFee?: string;
  curriculum?: ProgrammeCurriculumYear[];
  careerOpportunities: string[];
  laboratories?: string[];
  accreditation?: string;
}
