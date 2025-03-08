export interface Starship {
  id: string;
  name: string;
  model: string;
  manufacturer?: string;
  length?: string;
  cost_in_credits?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  pilots: string[];
  films: string[];
}
