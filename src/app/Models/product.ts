export class Product {
  id: number;
  pName: string;
  price: number;
  imgPath: string;
  itin: Itinery[];

  constructor(
    id: number,
    pName: string,
    price: number,
    imgPath: string,
    itin: Itinery[]
  ) {
    this.id = id;
    this.pName = pName;
    this.price = price;
    this.imgPath = imgPath;
    this.itin = itin;
  }
}
export class Itinery {
  id: number;
  day: string;
  location: string;

  activities: Activity[] = [];
  constructor(id: number, d: string, loc: string, acts: Activity[]) {
    this.id = id;
    this.day = d;
    this.location = loc;
    this.activities = acts;
  }
}

export class Activity {
  id: number;
  actName: string;

  constructor(id: number, actNm: string) {
    this.id = id;
    this.actName = actNm;
  }
}
