export interface Plant {
  id?: string; // Add this line to include the 'id' property as an optional string
  name: string;
  top: number;
  left: number;
  humidity: number;
  healthy: boolean;
}
