import { IUseRepository } from '../../../application/user/repository/use-repository.interfaces';
import { User } from '../../../domain/user/user.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository implements IUseRepository {
  constructor(private postgres: PrismaService) { }

  async findById(id: string): Promise<User> {
    if (!id) {
      return null;
    }

    const user = await this.postgres.user.findFirst({
      where: {
        id,
      },
    });

    return user != undefined ? User.toDomain({ ...user }) : null;
  }
  deleteById(id: string): Promise<boolean> {
    return Promise.resolve(false);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.postgres.user.findUnique({
      where: {
        email: email,
      },
    });

    return user != undefined ? User.toDomain({ ...user }) : null;
  }

  async save(data: User): Promise<User> {
    const user = await this.postgres.user.create({
      data: { ...data },
    });

    return User.toDomain({ ...user });
  }

  async findUserAndWalletsByEmail(email: string): Promise<User> {
    const user = await this.postgres.user.findFirst({
      where: { email },
      include: {
        Wallet: true,
      },
    });

    return User.toDomain({ ...user });
  }

  async findUserAndWalletsById(userId: string): Promise<User> {
    const user = await this.postgres.user.findFirst({
      where: { id: userId },
      include: {
        Wallet: true,
      },
    });

    return User.toDomain({ ...user });
  }

  async updateUserStatus(data: User): Promise<void> {
    await this.postgres.user.update({
      where: {
        id: data.id,
      },
      data: {
        status: data.status,
      },
    });
  }
}
