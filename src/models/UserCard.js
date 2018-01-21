/**
 * Copyright (C) 2017 TopCoder Inc., All Rights Reserved.
 */

/**
 * the UserCard schema
 *
 * @author      TCSCODER
 * @version     1.0
 */


module.exports = (sequelize, DataTypes) => sequelize.define('UserCard', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.BIGINT, allowNull: false },
}, {});
