import { Collection } from "core/lib/Collection";

const buildCollectionBlueprint = (name = "My Collection") => ({
  id: expect.any(String),
  items: [],
  name
});

describe("Collection", () => {
  test("should create a Collection with 'My Collection' as the collection name", () => {
    const name = "My Collection";
    const collection = new Collection({ name });
    expect(collection.id).toBeDefined();
    expect(collection.name).toEqual(name);
    expect(collection.dateCreated).toBeDefined();
    expect(collection.lastUpdated).toBeDefined();
  });

  test("should create a Collection with '' as the collection name", () => {
    const name = "";
    const collection = new Collection({ name });
    expect(collection.id).toBeDefined();
    expect(collection.name).toEqual("My Magic Collection");
    expect(collection.dateCreated).toBeDefined();
    expect(collection.lastUpdated).toBeDefined();
  });
});
