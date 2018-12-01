class Room {
  id: string;
  building: string;
  floor: number;
  status: number;
}

class IResponse {
  messageCode: string;
  messageDescription: string;
  data: any;
}

export { Room, IResponse };
