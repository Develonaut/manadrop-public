import moment, { Moment } from "moment";
import shortid from "shortid";

export type CollectionId = string;
export type CollectionName = string;
export type CollectionDateCreated = Moment;
export type CollectionLastUpdated = Moment;

export interface CollectionItemsByIdItem {
  quantity: number;
}

export interface CollectionItemsById {
  [key: string]: CollectionItemsByIdItem;
}

export interface CreateCollection {
  name?: string;
  itemsById?: CollectionItemsById;
}

export class Collection {
  public name: CollectionName;
  public id: CollectionId;
  public itemsById: CollectionItemsById;
  public dateCreated: CollectionDateCreated;
  public lastUpdated: CollectionLastUpdated;

  constructor({
    name = "My Magic Collection",
    itemsById = {}
  }: CreateCollection = {}) {
    this.name = !name ? "My Magic Collection" : name;
    this.id = shortid.generate();
    this.dateCreated = moment();
    this.lastUpdated = moment();
    this.itemsById = itemsById;
  }
}
