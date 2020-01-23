module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        tableName: 'houses',
        timestamps: false
    });


    return House;
};
