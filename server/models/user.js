"use strict";

module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            get: function() {
                return this.getDataValue('user_id');
            }
        },
        email_id: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false,
            get: function() {
                this.getDataValue('email_id');
            },
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            get: function() {
                this.getDataValue('password');
            }
        },
        img: {
            type: Sequelize.STRING,
            allowNull: true,
            get: function() {
                this.getDataValue('img');
            }
        },
        trust_factor: {
            type: Sequelize.INTEGER,
            allowNull: true,
            get: function() {
                this.getDataValue('trust_factor');
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return User;
};
