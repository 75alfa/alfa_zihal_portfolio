// Shared domain types and utilities

export type Result<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: string;
};
