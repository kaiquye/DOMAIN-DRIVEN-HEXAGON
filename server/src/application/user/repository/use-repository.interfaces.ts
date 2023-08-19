import { User } from '../../../domain/user/user.model';

export interface IUseRepository {
  save(data: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  deleteById(id: string): Promise<boolean>;
  findUserAndWalletsByEmail(email: string): Promise<User>;
  findUserAndWalletsById(userId: string): Promise<User>;
  updateUserStatus(data: User): Promise<void>;
}
