import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Mendaftarkan User entity
  providers: [UsersService],
  exports: [UsersService], // Export agar bisa dipakai modul lain
})
export class UsersModule {}
