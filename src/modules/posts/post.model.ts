import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../config/database";

interface PostAttributes {
    id: number;
    title: string;
    slug: string;
    content: string;
    status: string;
    published_at: Date;
    author_id: number;
    category_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// Para criação (id e datas opcionais)
interface PostCreationAttributes extends Optional<PostAttributes, "id" | "createdAt" | "updatedAt"> { }

export class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
    public id!: number;
    public title!: string;
    public slug!: string;
    public content!: string;
    public status!: string;
    public published_at!: Date;
    public author_id!: number;
    public category_id!: number;
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
        slug: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("draft", "published", "archived"),
            defaultValue: "draft",
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        published_at: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "posts",
        timestamps: true
    }
);

// Post.belongsTo(Author, { foreignKey: "author_id" });
// Author.hasMany(Post, { foreignKey: "author_id" });

// Post.belongsTo(Category, { foreignKey: "category_id" });
// Category.hasMany(Post, { foreignKey: "category_id" });