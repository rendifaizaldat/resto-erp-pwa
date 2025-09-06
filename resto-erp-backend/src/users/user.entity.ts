import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Ini akan membuat tabel bernama 'users' di database
export class User {
  @PrimaryGeneratedColumn('uuid') // Membuat primary key dengan tipe UUID
  id: string;

  @Column({ unique: true }) // Kolom email, harus unik
  email: string;

  @Column() // Kolom password
  password_hash: string;

  @Column({ nullable: true }) // Kolom nama, boleh kosong
  full_name: string;
}
