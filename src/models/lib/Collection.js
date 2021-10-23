'use strict';

// Sequelize Model
class Collection {
  constructor(model){
    this.model = model;
  }

  async read(id, options = {}) {
    try {
      let records = null;
      if (id) {
        // options['where'] = {id:id};
        records = await this.model.findByPk(id);
      } else {
        records = await this.model.findAll();
      }
      return records;
    } catch (e) {
      return e;
    }
  }
  
  async create (json) {
    try {
      let record = await this.model.create(json);
      return record;
    } catch (e){
      return e;
    }
  }

  async update (id, json) {
    try {
      let record = await this.model.findByPk(id);
      let updatedRecord = await record.update(json);
      return updatedRecord;
    } catch (e) {
      return e;
    }
  }

  async delete (id) {
    try {
      let updatedRecord = await this.model.destroy({where: {id}});
      return updatedRecord;
    } catch (e) {
      return e;
    }
  }
}

module.exports = Collection;