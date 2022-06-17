
export type LatLng = { lat: number, lng: number };

export type RouteProps = {
  title: string, 
  startPosition: LatLng, 
  endPosition: LatLng,
  points?: LatLng[]
}

export class Route {
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || []
    };
  }

  private set title(value: string) {
    this.props.title = value;
  }


  //Qualquer regra de negocio deve ser chamada atraves de metodos
  //e nao atraves de "set" diretamente

}

const rota = new Route({
  title: 'minha rota',
  startPosition: { lat: 15, lng: 30 },
  endPosition: { lat: 15, lng: 30 },
  points: [
    { lat: 15, lng: 30 },
    { lat: 15, lng: 30 }
  ],
});

rota.title = 'title updated';