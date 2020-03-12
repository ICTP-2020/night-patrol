import { Injectable } from '@angular/core';
import * as Cosmos from "@azure/cosmos";
import { User } from "../../interfaces/data-models";


@Injectable({
  providedIn: 'root'
})
export class CosmosService {

  private static instance: CosmosService;

  private readonly database = "night-patrol";
  //private collection;

  private client: Cosmos.CosmosClient;
  db: Cosmos.Database;
  container: Cosmos.Container;

  public items: User[];

  constructor() {
    this.client = new Cosmos.
      CosmosClient("AccountEndpoint=https://ictp2020-night-patrol-cdb.documents.azure.com:443;AccountKey=JW10PO3aGyj1dsiLjezT8GAFZwXzIpqcGIEjYMeSmLjc0jU7C44sQjJBsFUGRhYLAtUIfgYz0dqiJwzHaTPxhA==")
    this.db = this.client.database(this.database);

  }

  async addItem(newItem, collection: string) {
    this.container = this.db.container(collection);
    const item = await this.container.items.create(newItem)
      .catch(err => console.error(err));

    console.log(item);
  }

  async listUsers(): Promise<User[]> {
    const response = await this.container.items
      .readAll<User>().fetchAll();
    console.warn(response);
    this.items = response.resources;
    console.log(`${this.items.length} items received`);

    return this.items;
  }

  public static getInstance(): CosmosService {
    if (!CosmosService.instance)
      CosmosService.instance = new CosmosService();

    return CosmosService.instance;
  }
}
