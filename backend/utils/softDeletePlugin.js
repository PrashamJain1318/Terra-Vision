export default function softDeletePlugin(schema) {
  schema.add({
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  });

  const excludeDeleted = function (next) {
    this.where({ isDeleted: { $ne: true } });
    next();
  };

  schema.pre('find', excludeDeleted);
  schema.pre('findOne', excludeDeleted);
  schema.pre('findOneAndUpdate', excludeDeleted);
  schema.pre('updateMany', excludeDeleted);
  schema.pre('updateOne', excludeDeleted);
  schema.pre('countDocuments', excludeDeleted);

  schema.methods.softDelete = async function () {
    this.isDeleted = true;
    this.deletedAt = new Date();
    return this.save();
  };

  schema.methods.restore = async function () {
    this.isDeleted = false;
    this.deletedAt = null;
    return this.save();
  };
}
