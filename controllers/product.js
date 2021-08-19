const { Product, Sequelize } = require('../models');
const { Op } = Sequelize;

exports.getProducts = async (req, res, next) => {
  const { filter, sort, page } = req.query;
  const paramQuerySQL = {};
  let limit;
  let offset;

  // filtering - [category]
  if (filter !== '' && typeof filter !== 'undefined') {
    const query = filter.category.split(',').map((item) => ({
      [Op.eq]: item,
    }));

    paramQuerySQL.where = {
      id_category: { [Op.or]: query },
    };
  }

  // sorting
  if (sort !== '' && typeof sort !== 'undefined') {
    let query;
    if (sort.charAt(0) !== '-') {
      query = [[sort, 'ASC']];
    } else {
      query = [[sort.replace('-', ''), 'DESC']];
    }

    paramQuerySQL.order = query;
  }

  // pagination
  if (page !== '' && typeof page !== 'undefined') {
    if (page.size !== '' && typeof page.size !== 'undefined') {
      limit = page.size;
      paramQuerySQL.limit = limit;
    }

    if (page.number !== '' && typeof page.number !== 'undefined') {
      offset = page.number * limit - limit;
      paramQuerySQL.offset = offset;
    }
  } else {
    limit = 5; // limit 5 item
    offset = 0;
    paramQuerySQL.limit = limit;
    paramQuerySQL.offset = offset;
  }

  try {
    const data = await Product.findAll(paramQuerySQL);
    if (data) {
      res.status(200).json({ data });
    }
  } catch (err) {
    next(err);
  }
};
