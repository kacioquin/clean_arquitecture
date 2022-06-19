import { RouteRepositoryInterface } from "../domain/route-repository";
import { LatLng, Route } from "../domain/route.entity";

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}

type CreateRouteOutput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}

export class CreateRouteUseCase {

  constructor(private routeRepo: RouteRepositoryInterface) {

  }

  async execute(input: CreateRouteInput) {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}
