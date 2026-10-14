/**
 * Standard Payload CMS v3 / v2 REST API Response Shapes
 */

export interface PayloadCollectionResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface PayloadQueryParams {
  page?: number;
  limit?: number;
  depth?: number;
  sort?: string;
  where?: Record<string, unknown>;
  draft?: boolean;
  locale?: string;
  fallbackLocale?: string;
}
