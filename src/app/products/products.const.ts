export class ProductsConst {
  public static get PRODUCTS_URL(): string {
    return "assets/products/products.csv"
  };

  public static get CSV_SEPARATOR(): string {
    return ";"
  };

  public static get COLUMN_HEADER_EXIST(): boolean {
    return true
  };

  public static get WITHOUT_GROUP_NAME_INDICATOR(): string {
    return '@'
  }
}
