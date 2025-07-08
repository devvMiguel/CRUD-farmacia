import { IsNotEmpty, IsPositive } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_game' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsPositive()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @IsPositive()
  @Column({ type: 'int', nullable: false })
  quantidade: number;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  dataValidade: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
