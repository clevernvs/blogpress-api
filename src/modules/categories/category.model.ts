import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../config/database";

interface CategoryAttributes {
    id: number;
    value: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id" | "createdAt" | "updatedAt"> { }

export class User extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
    public id!: number;
    public value!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "categories",
        timestamps: true
    }
);