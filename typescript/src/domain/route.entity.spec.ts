import { LatLng, Route, RouteProps } from "../domain/route.entity"

describe('Route Tests', () => {
  test('constructor', () => {
    let routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 10, lng: 25 },
      endPosition: { lat: 35, lng: 50 },
    }

    let route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps, points: []
    })

    routeProps = {
      title: 'minha rota',
      startPosition: { lat: 10, lng: 25 },
      endPosition: { lat: 35, lng: 50 },
      points: [
        { lat: 10, lng: 11 }
      ]
    }
    route = new Route(routeProps)
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps, points: [{
        lat: 10, lng: 11
      }]
    })
  });

  test('updateTitle method', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 10, lng: 15 },
      endPosition: { lat: 20, lng: 35 },
    }
    const route = new Route(routeProps);
    route.updateTitle('title updated')
    expect(route.title).toBe('title updated')
  });

  test('updatePosition method', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 10, lng: 15 },
      endPosition: { lat: 10, lng: 20 }
    }
    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 20, lng: 35 };
    const endPosition: LatLng = { lat: 20, lng: 35 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test('updatePoints method', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 10, lng: 15 },
      endPosition: { lat: 10, lng: 20 }
    }
    const route = new Route(routeProps);
    const points: LatLng[] = [
      { lat: 30, lng: 55 },
    ];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  })

})
