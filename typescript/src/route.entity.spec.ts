import { Route, RouteProps } from "./route.entity"

describe('Route Tests', () => {
  test('constructor', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 10, lng: 25 },
      endPosition: { lat: 35, lng: 50 },
    }

    const route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps, points: []
    })

  })
})