export interface User {
  id: string;
  role: UserRole;
  name: string;
  gmail: string;
  avatar: string;
  totalAvailable: number;
  totalUsed: number;
  createdAt: string;
  updateAt: string;
  deletedAt: string;
}

export enum UserRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  USER = "user",
}
