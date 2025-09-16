import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../config/database";

interface PostAttributes {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Para criação (id e datas opcionais)
interface PostCreationAttributes extends Optional<PostAttributes, "id" | "createdAt" | "updatedAt"> { }

export class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public author!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "posts",
        timestamps: true
    }
);
