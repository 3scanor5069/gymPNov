import db from "../database/db.js"; //impotamos la conexion de la DB
import {DataTypes} from "sequelize"; //importamos sequelize

const BlogModel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel;
